/* eslint-disable perfectionist/sort-imports */

import { useState } from 'react';
 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import the Button component
import { PromoCard } from './PromoCard'; // Import the custom PromoCard component
import { ExtendedEuclideanAlgorithm } from './components/Extended-Euclidean-Algorithm';

export function HomeHeroCYSE1008() {
  // Set up state for the Click Me button
  const [count, setCount] = useState(0);

  // Create an array of colors for each letter in "KICKS"
  const colors = ['#003F5C', '#8B8589', '#008080', '#003F5C', '#F4A8B3'];

  // Map over each letter of "KICKS" to assign a unique color
  const multiColoredKicks = 'KICKS'.split('').map((letter, index) => (
    <span key={index} style={{ color: colors[index], margin: '0 2px' }}>
      {letter}
    </span>
  ));

  return (
    <div>
      {/*  <div> Hello World </div> */}
      <Box
        sx={{
          backgroundColor: '#f0f0f0',
          padding: 4,
          textAlign: 'center',
          fontSize: '2rem',
          color: '#000000', // default text color (overridden for "KICKS")
          marginTop: 2,
          borderRadius: 2,
          boxShadow: 3,
          fontWeight: 'bold', 
          fontFamily: 'Arial, sans-serif', 
        }}
      >
        {/* Render the text with "KICKS" styled separately */}
        THE {multiColoredKicks} COLLECTIVE

        {/* Shop Now button */}
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary">
            Shop Now
          </Button>
        </Box>

        {/* Add item button with onClick logic */}
        <Box sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount(count + 1)}
          >
            Add to Cart {count}
          </Button>
        </Box>

        {/* Custom PromoCard component */}
        <PromoCard 
          title="Special Offer!" 
          description="Get 20% off on your first order!" 
        />
       
        {/* 🔹 New Component: Extended Euclidean Algorithm */}
        <Box sx={{ marginTop: 4 }}>
          <ExtendedEuclideanAlgorithm />
        </Box>

      </Box>
    </div>
  );
}
