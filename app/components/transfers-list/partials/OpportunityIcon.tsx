import { ReactNode } from 'react';
import { Box } from '@mui/material';

type OpportunityIconProps = {
  children: ReactNode;
  className?: string;
};

export default function OpportunityIcon({
  children,
  className,
}: OpportunityIconProps) {
  return (
    <Box
      className={className}
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
