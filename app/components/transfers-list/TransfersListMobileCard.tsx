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
import StatusBadge from '@/app/components/transfers-list/partials/StatusBadge';

interface TransfersListMobileCardProps {
  transfer: TransferItem;
}

export default function TransfersListMobileCard({
  transfer,
}: TransfersListMobileCardProps) {
  const { t } = useTranslation();

  const getCategoryTrans = () => {
    switch (transfer?.category.toLowerCase().replace(' ', '-')) {
      case 'arrival':
        return t('transfers:list_table.arrive:adverb');
      case 'departure':
        return t('transfers:list_table.depart:adverb');
      default:
        return transfer?.category;
    }
  };

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
          title={
            <StatusBadge
              category={transfer?.category}
              sx={{
                borderRadius: '32px',
                padding: '4px 6px',
                '& > svg': { width: '14px', height: '13px' },
                marginBlockEnd: '6px',
              }}
            >
              <Typography
                variant="subtitle2"
                fontSize="10px"
                sx={{ color: '#fff', lineHeight: '13px', display: 'flex' }}
              >
                {getCategoryTrans()}
              </Typography>
            </StatusBadge>
          }
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
        <LabelValuePair
          label={`${t('transfers:list_table.opportunities.title')}`}
        >
          <Box sx={{ display: 'flex', gap: '12px' }}>
            <OpportunitiesCell transfer={transfer} />
          </Box>
        </LabelValuePair>
      </CardContent>
    </Card>
  );
}
