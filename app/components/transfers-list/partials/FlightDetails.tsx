import { Box, Divider, Typography } from '@mui/material';
import WpIcon, { WpIconProps } from '@/app/components/WpIcon';
import React from 'react';

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
  return (
    <Box
      sx={{
        width: 'fit-content',
        padding: '8px 20px',
        background: '#2D3B4E0A',
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
