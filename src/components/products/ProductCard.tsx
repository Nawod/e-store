/**
 * @class ProductCard
 * @description purpose of this components is to render dynamic product card
 * @author Nawod Madhuwantha
 */

import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../lib/store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { NavList } from "../../lib/constants/navigations";

type Props = {
    product: Product;
};

const ProductCard = ({ product }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /**
     * Add selected product to cart
     * @param product
     */
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
            })
        );
        toast.success("Item added to cart");
    };

    const navigateToProduct = () => {
        navigate(`${NavList.PRODUCTS.id}/${product.id}`);
    };

    return (
        <div
            className="border rounded-lg p-4 shadow-md cursor-pointer hover:shadow-lg hover:shadow-black transition-all duration-100"
            onClick={navigateToProduct}
        >
            <img
                src={
                    product.image[0].value || "https://via.placeholder.com/150"
                }
                alt={product.name}
                className="w-full h-32 rounded-md object-cover mb-4"
            />
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-500">{product.subTitle}</p>
            <p className="text-blue-500 text-xl font-semibold my-2">
                ${product.price}
            </p>
            <Button
                onClick={(e) => handleAddToCart(e)}
                className="w-full"
                variant="contained"
            >
                Add to Cart
            </Button>
            <ToastContainer
                closeOnClick={false}
                pauseOnFocusLoss={false}
                position="top-right"
            />
        </div>
    );
};

export default ProductCard;
