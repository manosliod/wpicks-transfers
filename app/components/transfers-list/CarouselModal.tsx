import React, { Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';
import {
  Dialog,
  DialogContent,
  Avatar,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useCarouselModalStore } from '@/app/shared/stores/useStore';
import type { FormattedTransfers } from '@/app/components/transfers-list/TransfersListTableBody';
import { useStopPropagation } from '@/app/shared/hooks/useStopPropagation';

interface TransfersDetailsType {
  id: number;
  from_location_title: string;
  from_location_address: string;
  from_datetime: string;
  to_location_title: string;
  to_location_address: string;
  to_datetime: string;
  passengers: number;
  babyseats: number;
  luggage: number;
  hand_luggage: number;
  flight_status: {
    flight_number: string;
    flight_time: string;
    flight_status: string;
  };
  traveler: {
    phone_number: string;
    email: string;
    country: string;
  };
}

interface CarouselModalProps {
  transfersList: FormattedTransfers[];
  transfersDetails: TransfersDetailsType[];
}

const CarouselModal: React.FC<CarouselModalProps> = ({
  transfersList,
  transfersDetails,
}) => {
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
            p: 3,
            my: 6,
            maxWidth: 'calc(100% - 208px)',
            height: '100%',
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
          disableRipple
          onClick={stopPropagationAndGoPrev}
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
            pointerEvents: currentIndex === 0 ? 'none' : null,
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
          disableRipple
          onClick={stopPropagationAndGoNext}
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
            pointerEvents:
              currentIndex === transfersList.length ? 'none' : null,
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
            transfers.map((item) => (
              <DialogContent
                key={item.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: '300px',
                  justifyContent: 'center',
                }}
              >
                <Avatar
                  src={item.traveler_photo}
                  sx={{ width: 100, height: 100, mb: 2 }}
                />
                <Typography variant="h6">{item.traveler_first_name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Additional info about {item.traveler_last_name}
                </Typography>
              </DialogContent>
            ))
          )}
        </SwipeableViews>
      </Dialog>
    </Fragment>
  );
};

export default CarouselModal;
