import React from 'react';
import { useTranslation } from 'next-i18next';
import { Sheet } from 'react-modal-sheet';
import { useTransferBottomSheetStore } from '@/app/shared/stores/transferBottomSheetStore';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GuestTransfers from '@/app/components/transfers-list/partials/GuestTransfers';
import GuestCardMobile from '@/app/components/transfers-list/partials/GuestCardMobile';
import { useUnmount } from '@/app/shared/hooks/useHooks';

export default function BottomSheet() {
  const { t } = useTranslation();
  const { transfer, transferDetails, open, closeSheet } =
    useTransferBottomSheetStore();

  useUnmount(() => (open ? closeSheet() : undefined));

  return (
    <>
      <Sheet isOpen={open} onClose={closeSheet}>
        <Sheet.Container>
          <Sheet.Content>
            <Box
              sx={{
                backgroundColor: '#2D3B4E0A',
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  sx={{ color: '#2D3B4E80', marginRight: '4px' }}
                >
                  {transfer?.traveler_first_name}
                  {"'"}
                  {t('guest:suffix')}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  textTransform="lowercase"
                  sx={{ color: '#2D3B4E80' }}
                >
                  {t('transfers:details.trip')}
                </Typography>
              </Box>
              <IconButton
                onClick={closeSheet}
                sx={{
                  backgroundColor: '#2D3B4E0D',
                  width: 34,
                  height: 34,
                  '&:hover': {
                    backgroundColor: '#2D3B4E0D',
                  },
                  '& svg': {
                    fontSize: 20,
                    color: '#2D3B4E80',
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ px: '20px' }}>
              <GuestTransfers transferDetails={transferDetails ?? undefined} />
              <Divider sx={{ my: '32px' }} />
              <GuestCardMobile
                transfer={transfer ?? undefined}
                transferDetails={transferDetails ?? undefined}
              />
            </Box>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop style={{ background: 'rgba(76, 88, 104, 0.9)' }} />
      </Sheet>
    </>
  );
}
