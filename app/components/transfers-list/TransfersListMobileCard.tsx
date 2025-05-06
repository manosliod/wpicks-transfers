import React from 'react';
import LabelValuePair from '@/app/components/transfers-list/partials/LabelValuePair';
import { useTranslation } from 'next-i18next';
import type { TransferItem } from '@/app/components/transfers-list/TransfersListTableBody';
import { formatArrivalDepartureDate } from '@/app/shared/helpers/formatArrivalDepartureDate';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import OpportunitiesCell from '@/app/components/transfers-list/partials/OpportunitiesCell';

interface TransfersListMobileCardProps {
  transfer: TransferItem;
}

const TransfersListMobileCard: React.FC<TransfersListMobileCardProps> = ({
  transfer,
}) => {
  const { t } = useTranslation();
  type OpportunityKey =
    | 'babies'
    | 'return_transfer'
    | 'early_checkin'
    | 'late_checkout';
  const opportunityKeys: OpportunityKey[] = [
    'babies',
    'return_transfer',
    'early_checkin',
    'late_checkout',
  ];

  return (
    <Card
      elevation={0}
      sx={{
        border: 'unset',
        borderColor: 'unset',
        borderRadius: '6px',
        boxShadow: '0px 0px 8px rgba(45, 59, 78, 0.1)',
      }}
    >
      <CardContent
        sx={{
          padding: '20px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              src={transfer.traveler_photo}
              sx={{ width: '54px', height: '54px' }}
            />
          }
          title={'Arriving'}
          subheader={
            <Typography variant="body1" fontWeight={600}>
              {transfer?.traveler_first_name} {transfer?.traveler_last_name}
            </Typography>
          }
          sx={{
            p: 0,
            flexDirection: 'row-reverse',
            '& .MuiCardHeader-avatar': {
              marginRight: 0,
            },
          }}
        />
        <LabelValuePair
          label={t('transfers:list_table.property')}
          value={transfer?.property_title}
        />
        <LabelValuePair
          label={`${t('transfers:list_table.arrive.noun')}/${t('transfers:list_table.depart.noun')}`}
          value={formatArrivalDepartureDate(transfer?.datetime, t)}
        />
        <LabelValuePair
          label={`${t('common:from')}/${t('common:to')}`}
          value={transfer?.location_title}
        />
        <LabelValuePair label={`${t('transfers:list_table.opportunities')}`}>
          <Box sx={{ display: 'flex', gap: '12px' }}>
            <OpportunitiesCell transfer={transfer} />
          </Box>
        </LabelValuePair>
      </CardContent>
    </Card>
  );
};

export default TransfersListMobileCard;
