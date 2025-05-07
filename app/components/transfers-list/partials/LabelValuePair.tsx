import React from 'react';
import { Box, Typography } from '@mui/material';

interface LabelValuePairProps {
  label: string;
  value?: string | React.ReactNode;
  children?: React.ReactNode;
}

const LabelValuePair = ({ label, value, children }: LabelValuePairProps) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
    <Typography
      variant="caption"
      sx={{
        fontWeight: 600,
        color: '#2D3B4E80',
      }}
    >
      {label}
    </Typography>
    {value && (
      <Typography
        variant="body2"
        sx={{
          fontWeight: 500,
          fontSize: '15px',
        }}
      >
        {value}
      </Typography>
    )}
    {children}
  </Box>
);

export default LabelValuePair;
