import React from 'react';
import { format } from 'date-fns';
import { Box, Typography } from '@mui/material';
import WpIcon from '@/app/components/WpIcon';
import type { TransferDetailsItem } from '@/app/shared/types/transferDetails';

interface RouteItemProps {
  title?: string;
  address?: string;
  datetime?: string;
}

const RouteItem = ({ title, address, datetime }: RouteItemProps) => (
  <Box display="flex" alignItems="flex-start">
    <Box
      sx={{
        border: '1px solid #2D3B4E80',
        borderStyle: 'dashed',
        padding: '4px',
      }}
    >
      <Box
        sx={{
          border: '2px solid #48d9a4',
          borderRadius: '100%',
          padding: '3px',
        }}
      />
    </Box>
    <Box ml={2} sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <Typography
        variant="subtitle1"
        fontWeight={400}
        sx={{ color: '#2D3B4E' }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={400}
        sx={{ color: '#2D3B4E80' }}
      >
        {address}
      </Typography>
    </Box>
    <Typography
      variant="subtitle1"
      ml="auto"
      fontWeight={600}
      sx={{ color: '#2D3B4E80' }}
    >
      {datetime}
    </Typography>
  </Box>
);

interface RouteItemProps {
  transferDetails?: TransferDetailsItem;
}

const RouteDisplay = ({ transferDetails }: RouteItemProps) => {
  const formatDatetime = (
    datetime?: string,
    datetimeFormat: string = 'HH:mm'
  ) => format(datetime ?? '', datetimeFormat);

  return (
    <Box
      width="100%"
      maxWidth={400}
      position="relative"
      sx={{ gap: '16px', display: 'flex', flexDirection: 'column' }}
    >
      <RouteItem
        title={transferDetails?.from_location_title}
        address={transferDetails?.from_location_address}
        datetime={formatDatetime(transferDetails?.from_datetime)}
      />
      {/* Dashed line between items */}
      <Box
        width="fit-content"
        position="absolute"
        sx={{ top: '50%', left: '7px', transform: 'translateY(-68%)' }}
      >
        <WpIcon name="arrow-dotted" />
      </Box>

      <RouteItem
        title={transferDetails?.to_location_title}
        address={transferDetails?.to_location_address}
        datetime={formatDatetime(transferDetails?.to_datetime)}
      />
    </Box>
  );
};

export default RouteDisplay;
