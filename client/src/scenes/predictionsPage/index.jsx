import React, { useEffect, useState } from 'react'
import { Box} from '@mui/material';
import Navbar from '../../scenes/navbar';

const PredictionPage = () => {
    const [monthlySales, setMonthlySales] = useState([]);
    const [year, setYear] = useState(2000);
    const [loading, setLoading] = useState(true);

    return (
        <Box height={"500px"}>
            <Navbar />
            <h1>Prediction Page</h1>
        </Box>
    )
}

export default PredictionPage;
