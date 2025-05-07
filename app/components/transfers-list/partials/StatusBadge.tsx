import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import WpIcon from '@/app/components/WpIcon';
import { mapTransferCategoryToIconName } from '@/app/shared/helpers/useHelpers';

interface StatusBadgeProps extends IconButtonProps {
  category: string;
  children?: React.ReactNode;
}

export default function StatusBadge({
  category,
  children,
  ...rest
}: StatusBadgeProps) {
  const getStatusBadgeBgColor = () => {
    switch (category.toLowerCase().replace(' ', '-')) {
      case 'arrival':
        return '#56A7FA';
      case 'departure':
        return '#F96381';
      case 'in-city':
        return '#736BFF';
    }
  };

  return (
    <IconButton
      {...rest}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: 0,
        backgroundColor: getStatusBadgeBgColor,
        ...rest.sx,
      }}
    >
      <WpIcon name={mapTransferCategoryToIconName(category)} />
      {children}
    </IconButton>
  );
}
