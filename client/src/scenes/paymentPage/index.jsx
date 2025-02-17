import React from 'react'
import { Container, Box, Typography, TextField, Button, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Navbar from '../navbar';

const PaymentPage = () => {
  return (
    <div>
      <Navbar/>
      <h1>PaymentPage</h1>
      <Box sx={{ width: { xs: '100%', lg: '60%' }, mb: { xs: 6, lg: 0 } }}>
                   <Typography
                    variant="body1"
                    sx={{ color: 'white', fontFamily: 'monospace', fontSize: '1.125rem', lineHeight: 1.75 }}
                  >
                    Welcome 
                    to our decentralized 
                    payment system, a next-generation 
                    solution for secure, transparent, 
                    and efficient financial transactions.
                     Built on blockchain technology, our 
                     platform eliminates the need for 
                     intermediaries, allowing users to 
                     send and receive payments directly in
                      their local currencies with low 
                      fees and near-instant processing
                       times. Our system leverages smart
                        contracts to automate and enforce 
                        payment terms, ensuring trust and
                         reliability in every transaction.
                          Whether you are a business or an individual, our decentralized payment system empowers you to take control of your finances in a fully decentralized, borderless environment. Experience the future of payments today—where your money is truly yours.
                  </Typography>
                  <Box sx={{ mt: 5 }}>
                    <button>Connect to Wallet</button>
                  </Box>
                </Box>
    </div>
  )
}

export default PaymentPage