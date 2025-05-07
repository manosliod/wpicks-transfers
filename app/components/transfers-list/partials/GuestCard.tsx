import React from 'react';
import { useTranslation } from 'next-i18next';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { TransferItem } from '@/app/components/transfers-list/TransfersListTableBody';
import type { TransferDetailsItem } from '@/app/shared/types/transferDetails';
import LabelValuePair from '@/app/components/transfers-list/partials/LabelValuePair';
import OpportunitiesCell from '@/app/components/transfers-list/partials/OpportunitiesCell';

interface GuestCardProps {
  transfer: TransferItem;
  transferDetails?: TransferDetailsItem;
}

export default function GuestCard({
  transfer,
  transferDetails,
}: GuestCardProps) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        maxWidth: '220px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Avatar
          src={transfer.traveler_photo}
          sx={{ width: 82, height: 82, mb: 2, mt: 2 }}
        />
        <Box>
          <Typography variant="body1" textAlign="center" fontWeight={600}>
            {transfer.traveler_first_name}
          </Typography>
          <Typography variant="body1" textAlign="center" fontWeight={600}>
            {transfer.traveler_last_name}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <LabelValuePair
        label={t('guest:phone_number')}
        labelProps={{
          variant: 'subtitle2',
          letterSpacing: '0.13px',
        }}
        value={transferDetails?.traveler?.phone_number}
      />
      <LabelValuePair
        label={t('guest:email')}
        labelProps={{
          variant: 'subtitle2',
          letterSpacing: '0.13px',
        }}
        value={transferDetails?.traveler?.email}
      />
      <LabelValuePair
        label={t('guest:origin')}
        labelProps={{
          variant: 'subtitle2',
          letterSpacing: '0.13px',
        }}
        value={transferDetails?.traveler?.country}
      />
      <LabelValuePair
        label={t('transfers:list_table.opportunities.title')}
        labelProps={{
          variant: 'subtitle2',
          letterSpacing: '0.13px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <OpportunitiesCell transfer={transfer} showOpportunityLabel />
        </Box>
      </LabelValuePair>
    </Box>
  );
}
