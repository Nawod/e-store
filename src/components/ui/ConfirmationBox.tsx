/**
 * @class ConfirmationBox
 * @description purpose of this component is to render a dialog box
 * @author Nawod Madhuwantha
 */

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";

type Props = {
    title: string;
    message: string;
    onClose: Function;
    onConfirm: Function;
    open: boolean;
};

const ConfirmationBox = ({
    title,
    message,
    onClose,
    open,
    onConfirm,
}: Props) => {
    return (
        <Dialog
            open={open}
            onClose={() => onClose()}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onConfirm()}>Yes</Button>
                <Button onClick={() => onClose()}>No</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmationBox;
