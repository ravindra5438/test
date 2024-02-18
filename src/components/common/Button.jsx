import Button from '@mui/material/Button';

const CustomButton = ({ onClick = () => { }, text, variant = "filed", color="secondary" }) => {
    return (
        <Button variant={variant} color={color} onClick={onClick}>
            {text}
        </Button>
    );
};

export default CustomButton;
