import React from 'react';
import { Box, SxProps, Typography } from '@mui/material';

interface LabelValuePairProps {
  label: string;
  labelProps?: object;
  value?: string | React.ReactNode;
  children?: React.ReactNode;
  sx?: SxProps;
}

const LabelValuePair = ({
  label,
  labelProps,
  value,
  children,
  sx,
}: LabelValuePairProps) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px', ...sx }}>
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
