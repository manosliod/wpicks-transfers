import { ReactNode } from 'react';
import { Box } from '@mui/material';

type OpportunityIconProps = {
  children: ReactNode;
};

export default function OpportunityIcon({ children }: OpportunityIconProps) {
  return (
    <Box
      sx={{
        width: 38,
        height: 38,
        borderRadius: '50%',
        backgroundColor: '#F4F5F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}
