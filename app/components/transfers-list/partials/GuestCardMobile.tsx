import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@mui/material';
import { TransferItem } from '@/app/components/transfers-list/TransfersListTableBody';
import type { TransferDetailsItem } from '@/app/shared/types/transferDetails';
import LabelValuePair from '@/app/components/transfers-list/partials/LabelValuePair';
import OpportunitiesCell from '@/app/components/transfers-list/partials/OpportunitiesCell';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

interface GuestCardProps {
  transfer?: TransferItem;
  transferDetails?: TransferDetailsItem;
}

export default function GuestCardMobile({
  transfer,
  transferDetails,
}: GuestCardProps) {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      <Typography variant="h6" fontWeight={600} sx={{ color: '#2D3B4E' }}>
        {t('guest:your_guest')}
      </Typography>
      <Card
        elevation={0}
        sx={{
          border: 'unset',
          borderColor: 'unset',
        }}
      >
        <CardContent
          sx={{
            padding: '0 !important',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            '& .MuiCardContent-root': {
              p: 0,
            },
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                src={transfer?.traveler_photo}
                sx={{ width: '54px', height: '54px' }}
              />
            }
            title={
              <Typography
                variant="body1"
                fontWeight={600}
                sx={{ marginBottom: '6px' }}
              >
                {transfer?.traveler_first_name} {transfer?.traveler_last_name}
              </Typography>
            }
            subheader={
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  sx={{ color: '#2D3B4E80' }}
                >
                  {transferDetails?.traveler?.phone_number}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={500}
                  sx={{ color: '#2D3B4E80' }}
                >
                  {t('common:from')} {transferDetails?.traveler?.country}
                </Typography>
              </Box>
            }
            sx={{ p: 0 }}
          ></CardHeader>
        </CardContent>
      </Card>
      <Divider sx={{ ml: '68px' }} />
      <LabelValuePair
        label={t('transfers:list_table.opportunities.title')}
        labelProps={{
          variant: 'subtitle2',
          letterSpacing: '0.13px',
        }}
        sx={{ marginLeft: '68px' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginLeft: '-52px',
          }}
        >
          <OpportunitiesCell
            transfer={transfer ?? undefined}
            showOpportunityLabel
            sx={{ gap: '14px' }}
          />
        </Box>
      </LabelValuePair>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
        <Button
          disableElevation
          variant="contained"
          sx={{
            py: '20px',
            color: '#2D3B4E',
            backgroundColor: '#F4F5F6',
            width: '50%',
          }}
        >
          <CallOutlinedIcon
            sx={{ width: '20px', height: '20px', marginRight: '10px' }}
          />
          <Typography
            variant="body2"
            textTransform="capitalize"
            fontWeight={600}
          >
            {t('common:call')}
          </Typography>
        </Button>
        <Button
          disableElevation
          variant="contained"
          sx={{
            py: '20px',
            color: '#2D3B4E',
            backgroundColor: '#F4F5F6',
            width: '50%',
          }}
        >
          <SmsOutlinedIcon
            sx={{ width: '20px', height: '20px', marginRight: '10px' }}
          />
          <Typography
            variant="body2"
            textTransform="capitalize"
            fontWeight={600}
          >
            {t('common:message')}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
