import React from 'react';
import { Button } from '@mui/material';

function CategoryButton({ label, onClick }) {
    return (
        <Button
            variant="outlined"
            size="large"
            color="secondary" 
            onClick={onClick}
            sx={{ borderRadius: '70px', marginRight: '10px' }} 
        >
            {label}
        </Button>
    );
}

export default CategoryButton;