import { t } from 'i18next';
import React, { Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  Dialog,
  DialogContent,
  Box,
  IconButton,
  Divider,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useCarouselModalStore } from '@/app/shared/stores/useStore';
import type { FormattedTransfers } from '@/app/components/transfers-list/TransfersListTableBody';
import { useStopPropagation } from '@/app/shared/hooks/useStopPropagation';
import GuestCard from '@/app/components/transfers-list/partials/GuestCard';
import type { TransferDetailsItem } from '@/app/shared/types/transferDetails';
import GuestTransfers from '@/app/components/transfers-list/partials/GuestTransfers';
import { useUnmount } from '@/app/shared/hooks/useHooks';

interface CarouselModalProps {
  transfersList: FormattedTransfers[];
  transfersDetails: TransferDetailsItem[];
}

const CarouselModal = ({
  transfersList,
  transfersDetails,
}: CarouselModalProps) => {
  const { open, currentIndex, setOpen, setCurrentIndex } =
    useCarouselModalStore();

  const handleClose = () => setOpen(false);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % transfersDetails?.length);
  const goPrev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + transfersDetails.length) % transfersDetails.length
    );

  const stopPropagationAndGoNext = useStopPropagation(goNext);
  const stopPropagationAndGoPrev = useStopPropagation(goPrev);

  useUnmount(() => handleClose());

  return (
    <Fragment>
      {/* Modal Carousel */}
      <Dialog
        fullWidth
        open={open}
        maxWidth="sm"
        onClose={handleClose}
        PaperProps={{
          sx: {
            px: 4,
            my: 6,
            maxWidth: 'calc(100% - 208px)',
            height: 'auto',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '8px',
          },
        }}
        BackdropProps={{
          sx: {
            backgroundColor: 'rgba(76, 88, 104, 0.9)',
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            alignSelf: 'flex-end',
            top: '32px',
            zIndex: 1310,
            backgroundColor: '#f4f5f7',
            width: 32,
            height: 32,
            '&:hover': {
              backgroundColor: '#e0e0e0',
            },
            '& svg': {
              fontSize: 20,
              color: '#6B7280',
            },
          }}
        >
          <CloseIcon />
        </IconButton>
        {/* Left Arrow */}
        <IconButton
          disableRipple={currentIndex === 0}
          onClick={currentIndex !== 0 ? stopPropagationAndGoPrev : undefined}
          sx={{
            width: '40px',
            height: '40px',
            position: 'fixed',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1310,
            background: 'white',
            boxShadow: '0px 0px 8px rgba(45, 59, 78, 0.1)',
            marginInline: '32px',
            opacity: currentIndex === 0 ? 0.25 : null,
            '&:hover': { backgroundColor: '#fff' },
            '& svg': {
              width: '28px',
              height: '28px',
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          disableRipple={currentIndex === transfersList.length}
          onClick={
            currentIndex !== transfersList.length
              ? stopPropagationAndGoNext
              : undefined
          }
          sx={{
            width: '40px',
            height: '40px',
            position: 'fixed',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1310,
            background: 'white',
            boxShadow: '0px 0px 8px rgba(45, 59, 78, 0.1)',
            marginInline: '32px',
            opacity: currentIndex === transfersList.length ? 0.55 : null,
            '&:hover': { backgroundColor: '#fff' },
            '& svg': {
              width: '28px',
              height: '28px',
            },
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        {/* Swipable Carousel */}
        <SwipeableViews
          index={currentIndex}
          onChangeIndex={(index) => setCurrentIndex(index)}
          enableMouseEvents
        >
          {transfersList.map(({ transfers }) =>
            transfers.map((transfer) => (
              <DialogContent
                key={transfer.id}
                sx={{
                  p: 0,
                  display: 'flex',
                }}
              >
                <Box
                  sx={{ display: 'flex', flexDirection: 'row', pt: 5, pb: 6 }}
                >
                  <GuestCard
                    transfer={transfer}
                    transferDetails={transfersDetails.find(
                      (transfersDetail) => transfer.id === transfersDetail.id
                    )}
                  />
                </Box>
                <Divider
                  orientation="vertical"
                  sx={{ height: 'auto', mx: '38px' }}
                />
                <Box
                  sx={{
                    py: 5,
                    gap: '18px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    {t('common:transfer.plural')}
                  </Typography>
                  <Box>
                    <GuestTransfers
                      transferDetails={transfersDetails.find(
                        (transfersDetail) => transfer.id === transfersDetail.id
                      )}
                    />
                  </Box>
                </Box>
              </DialogContent>
            ))
          )}
        </SwipeableViews>
      </Dialog>
    </Fragment>
  );
};

export default CarouselModal;
