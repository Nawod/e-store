/**
 * @class DeleteButton
 * @description purpose of this component is to remove cart item
 * @author Nawod Madhuwantha
 */

import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationBox from "../ui/ConfirmationBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../lib/store/cartSlice";

type Props = {
    cartIem: CartItem;
};

const DeleteButton = ({ cartIem }: Props) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    /**
     * remove item
     * @param id
     */
    const handleRemove = (id: number) => {
        setOpen(false);
        dispatch(removeFromCart(id));
    };

    return (
        <>
            <div onClick={() => setOpen(true)}>
                <DeleteIcon
                    fontSize="small"
                    className="cursor-pointer hover:text-red-600"
                />
            </div>
            <ConfirmationBox
                title="Remove cart item!"
                message={`Are you sure to remove ${cartIem.name}`}
                onClose={() => setOpen(false)}
                onConfirm={() => handleRemove(cartIem.id)}
                open={open}
            />
        </>
    );
};

export default DeleteButton;
