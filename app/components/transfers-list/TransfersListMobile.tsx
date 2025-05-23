import React from 'react';
import { Box, Typography } from '@mui/material';
import type { FormattedTransfers } from '@/app/components/transfers-list/TransfersListTableBody';
import WpIcon from '@/app/components/WpIcon';
import TransfersListMobileCard from '@/app/components/transfers-list/TransfersListMobileCard';

interface TransfersListMobileProps {
  transfersList: FormattedTransfers[];
}

export default function TransfersListMobile({
  transfersList,
}: TransfersListMobileProps) {
  return (
    <Box
      sx={{
        gap: '10px',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '320px',
      }}
    >
      {transfersList.map(({ formattedDate, transfers }, index) => (
        <Box
          key={`mobile-${index}`}
          sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
        >
          <Box
            sx={{
              background: '#2D3B4E0A',
              borderRadius: '32px',
              padding: '8px 12px',
              minHeight: '32px',
              flexGrow: 1,
              flexShrink: 1,
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <WpIcon name="calendar" />
            <Typography
              variant="subtitle1"
              fontWeight="bold"
              sx={{
                color: '#2D3B4E66',
                width: '100%',
              }}
            >
              {formattedDate}
            </Typography>
          </Box>

          {transfers.map((transfer, index) => (
            <TransfersListMobileCard
              key={`mobile-transfer-${index}`}
              transfer={transfer}
            />
          ))}
        </Box>
      ))}
    </Box>
  );
}
