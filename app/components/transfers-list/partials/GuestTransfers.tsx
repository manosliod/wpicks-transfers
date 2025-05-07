import { Box, Typography } from '@mui/material';

import { useTranslation } from 'next-i18next';
import type { TransferDetailsItem } from '@/app/shared/types/transferDetails';
import { formatArrivalDepartureDate } from '@/app/shared/helpers/formatArrivalDepartureDate';
import RouteDisplay from '@/app/components/transfers-list/partials/RouteDisplay';
import TravelDetails from '@/app/components/transfers-list/partials/TravelDetails';
import FlightDetails from '@/app/components/transfers-list/partials/FlightDetails';
import { usePageStore } from '@/app/shared/stores/useStore';

interface GuestCardProps {
  transferDetails?: TransferDetailsItem;
}

export default function GuestTransfers({ transferDetails }: GuestCardProps) {
  const { t } = useTranslation();
  const { isMobile } = usePageStore();
  const formatedDate = formatArrivalDepartureDate(
    transferDetails?.from_datetime,
    t
  );
  return (
    <Box
      sx={{
        borderRadius: '6px',
        p: !isMobile ? 4 : null,
        backgroundColor: !isMobile ? '#2D3B4E08' : null,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <Box
        width="fit-content"
        sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        <Typography variant="body1" fontWeight={600}>
          {formatedDate}
        </Typography>
        <Box sx={{ border: '1px solid #48D9A4', borderRadius: '4px' }} />
      </Box>
      <RouteDisplay transferDetails={transferDetails} />
      <Box
        width="max-content"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <TravelDetails
          passengers={transferDetails?.passengers}
          babyseats={transferDetails?.babyseats}
          handLuggage={transferDetails?.hand_luggage}
          luggage={transferDetails?.luggage}
        />
        <FlightDetails
          flightNumber={transferDetails?.flight_status?.flight_number}
          flightTime={transferDetails?.flight_status?.flight_time}
          flightStatus={transferDetails?.flight_status?.flight_status}
        />
      </Box>
    </Box>
  );
}
