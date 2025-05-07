import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { usePageStore } from '@/app/shared/stores/pageStore';
import WpIcon, { WpIconProps } from '@/app/components/WpIcon';

interface FlightDetailsProps {
  flightNumber?: string;
  flightTime?: string;
  flightStatus?: string;
}

export default function FlightDetails({
  flightNumber,
  flightTime,
  flightStatus,
}: FlightDetailsProps) {
  const flightDetails = [
    { icon: 'take_off', value: flightNumber, fontWeight: 600 },
    { icon: 'time', value: flightTime, fontWeight: 600 },
    { value: flightStatus, color: '#42c594' },
  ];
  const { isMobile } = usePageStore();

  return (
    <Box
      sx={{
        width: 'fit-content',
        padding: '8px 20px',
        background: !isMobile ? '#2D3B4E0A' : null,
        border: isMobile ? '1px solid #2D3B4E14' : null,
        borderRadius: '32px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {flightDetails.map((flightDetail, index) => (
        <React.Fragment key={`flightDetail-${index}`}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {flightDetail?.icon && (
              <WpIcon name={flightDetail.icon as WpIconProps['name']} />
            )}
            <Typography
              variant="subtitle1"
              fontWeight={flightDetail.fontWeight ?? 500}
              sx={{ color: flightDetail?.color ?? '#2D3B4E80' }}
            >
              {flightDetail.value}
            </Typography>
          </Box>

          {index !== flightDetails.length - 1 && (
            <Divider orientation="vertical" sx={{ mx: 1, height: 'auto' }} />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
}
