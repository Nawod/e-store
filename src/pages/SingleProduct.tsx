/**
 * @class SingleProduct
 * @description purpose of this page is to render selected product data
 * @author Nawod Madhuwantha
 */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../lib/store/store";
import { Button } from "@mui/material";
import { NavList } from "../lib/constants/navigations";
import { addToCart } from "../lib/store/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Quantity from "../components/ui/Quantity";

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState<number>(1);
    const [data, setData] = useState<Product | undefined>(undefined);
    const products = useSelector((state: RootState) => state.productStates);

    /**
     * find product data
     * @param id
     */
    const getData = (id: number) => {
        const productItem = products.find((item) => item.id === id);
        if (productItem) {
            setData(productItem);
        }
    };

    useEffect(() => {
        if (id) {
            getData(parseInt(id));
        }
    }, [id]);

    /**
     * Add selected product to cart
     * @param product
     */
    const handleAddToCart = (product: Product) => {
        dispatch(
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
            })
        );
        toast.success("Item added to cart");
    };

    /**
     * update product quantity
     */
    const updateQuantity = (id: string, value: number) => {
        if (value > 0) {
            setQuantity(value);
        }
    };

    return (
        <div className="container py-8 min-h-[calc(100vh-12rem)]">
            {!data ? (
                <div className="mt-[10rem] text-center">
                    <p className="text-center mb-8">
                        There are not matching product with given id!
                    </p>
                    <Button
                        variant="contained"
                        onClick={() => navigate(NavList.PRODUCTS.id)}
                    >
                        Shop now
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full">
                        <img
                            src={data.image[0].value}
                            alt={`${data.name}-image`}
                            className="w-full object-scale-down "
                        />
                    </div>
                    <div className="min-w-[20rem]">
                        <h1 className="font-bold text-3xl text-blue-500 text-nowrap">
                            {data.name}
                        </h1>
                        <h2 className="my-4">{data.subTitle}</h2>
                        <h3 className="text-justify text-gray-600">
                            {data.description}
                        </h3>
                        <h3 className="text-2xl font-semibold mt-8 text-blue-500">
                            ${data.price.toFixed(2)}
                        </h3>
                        <div className="my-4">
                            <Quantity
                                quantity={quantity}
                                id={data.id}
                                onUpdate={updateQuantity}
                            />
                        </div>
                        <Button
                            variant="contained"
                            onClick={() => handleAddToCart(data)}
                        >
                            Add to cart
                        </Button>
                    </div>
                </div>
            )}
            <ToastContainer
                closeOnClick={false}
                pauseOnFocusLoss={false}
                position="top-right"
            />
        </div>
    );
};

export default SingleProduct;
