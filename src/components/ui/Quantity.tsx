/**
 * @class Quantity
 * @description purpose of this component is to change quantity value
 * @author Nawod Madhuwantha
 */

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

type Props = {
    onUpdate: Function;
    quantity: number;
    id: string | number;
};

const Quantity = ({ onUpdate, quantity, id }: Props) => {
    return (
        <div className="flex items-center">
            <div onClick={() => onUpdate(id, quantity - 1)}>
                <RemoveCircleOutlineIcon
                    fontSize="small"
                    className="cursor-pointer hover:text-blue-500"
                />
            </div>
            <span className="mx-2">{quantity}</span>
            <div onClick={() => onUpdate(id, quantity + 1)}>
                <AddCircleOutlineIcon
                    fontSize="small"
                    className="cursor-pointer hover:text-blue-500"
                />
            </div>
        </div>
    );
};

export default Quantity;
