import React from 'react';
import { Box, Typography } from '@mui/material';
import WpIcon, { WpIconProps } from '@/app/components/WpIcon';
import { usePageStore } from '@/app/shared/stores/pageStore';

interface TravelDetailsProps {
  passengers: string | number | undefined;
  babyseats: string | number | undefined;
  luggage: string | number | undefined;
  handLuggage: string | number | undefined;
}

const TravelDetails = ({
  passengers,
  babyseats,
  luggage,
  handLuggage,
}: TravelDetailsProps) => {
  const { isMobile } = usePageStore();

  // If all values are 0, don't render anything
  if (
    [passengers, babyseats, luggage, handLuggage].every((item) => item === 0)
  ) {
    return null;
  }

  const travelData = [
    { icon: 'passengers', value: passengers },
    { icon: 'babyseats', value: babyseats },
    { icon: 'luggage', value: luggage },
    { icon: 'hand_luggage', value: handLuggage },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        padding: '8px 20px',
        background: !isMobile ? '#2D3B4E0A' : null,
        border: isMobile ? '1px solid #2D3B4E14' : null,
        borderRadius: '32px',
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
      }}
    >
      {travelData.map((item) => (
        <Box
          key={item.icon}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <WpIcon name={item.icon as WpIconProps['name']} />
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            sx={{ color: '#2D3B4E80' }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TravelDetails;
