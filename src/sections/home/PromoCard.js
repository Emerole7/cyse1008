import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function PromoCard({ title, description }) {
  return (
    <Box
      sx={{
        backgroundColor: '#e0f7fa', 
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
        textAlign: 'center',
        marginTop: 2,
      }}
    >
      <Typography variant="h6"> {title} </Typography>
      <Typography variant="body1"> {description} </Typography>
      
    </Box>
  );
}