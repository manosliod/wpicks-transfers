import React from 'react';
import { Box, Typography } from '@mui/material';

interface LabelValuePairProps {
  label: string;
  labelProps?: object;
  value?: string | React.ReactNode;
  children?: React.ReactNode;
}

const LabelValuePair = ({
  label,
  labelProps,
  value,
  children,
}: LabelValuePairProps) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    <Typography
      variant="caption"
      sx={{
        fontWeight: 600,
        color: '#2D3B4E80',
      }}
      {...labelProps}
    >
      {label}
    </Typography>
    {value && (
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 500,
        }}
      >
        {value}
      </Typography>
    )}
    {children}
  </Box>
);

export default LabelValuePair;
