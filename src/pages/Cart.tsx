/**
 * @class Cart
 * @description purpose of this page is to visualize cart page
 * @author Nawod Madhuwantha
 */

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../lib/store/store";
import { updateQuantity } from "../lib/store/cartSlice";
import { Button } from "@mui/material";
import DeleteButton from "../components/cart/DeleteButton";
import Quantity from "../components/ui/Quantity";
import { useMemo } from "react";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cartStates);
    const dispatch = useDispatch();

    /**
     * update item quantity
     * @param id
     * @param quantity
     */
    const handleUpdateQuantity = (id: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const totalCost = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cart]);

    return (
        <div className="container py-8">
            <h1 className="section-title">Shopping cart</h1>
            {cart.length > 0 ? (
                <div className="flex mx-4 pt-4 flex-col md:flex-row gap-12 min-h-[calc(100vh-22rem)]">
                    <div className="w-full">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-3 border-b pb-2 mb-2 items-center"
                            >
                                <div>
                                    <h2 className="text-lg font-bold">
                                        {item.name}
                                    </h2>
                                    <p>${item.price}</p>
                                </div>
                                <div className="justify-self-center">
                                    <Quantity
                                        quantity={item.quantity}
                                        id={item.id}
                                        onUpdate={handleUpdateQuantity}
                                    />
                                </div>
                                <div className="justify-self-end">
                                    <DeleteButton cartIem={item} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-200 rounded-lg p-4 h-fit">
                        <h2 className="text-xl font-bold text-nowrap mb-8">
                            Total:{" "}
                            <span className="text-blue-500">
                                ${totalCost.toFixed(2)}
                            </span>
                        </h2>
                        <Button
                            className="w-full"
                            variant="contained"
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            ) : (
                <p className="text-center min-h-[calc(100vh-22rem)]">
                    Your cart is empty.
                </p>
            )}
        </div>
    );
};

export default Cart;
