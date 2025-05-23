import React, { Fragment } from 'react';
import {
  TableRow,
  TableCell,
  Box,
  Typography,
  TableBody,
  TableCellProps,
  Avatar,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { formatArrivalDepartureDate } from '@/app/shared/helpers/useHelpers';
import OpportunitiesCell from '@/app/components/transfers-list/partials/OpportunitiesCell';
import StatusBadge from '@/app/components/transfers-list/partials/StatusBadge';
import { useCarouselModalStore } from '@/app/shared/stores/carouselModalStore';

interface CustomBodyCellProps extends TableCellProps {
  label?: string;
  children?: React.ReactNode;
}

const CustomBodyCell = ({ label, children, ...props }: CustomBodyCellProps) => {
  return (
    <TableCell
      {...props}
      sx={{
        padding: '12px 8px',
        border: 'unset',
        color: '#2D3B4E',
        backgroundColor: '#fff',
        '&:first-of-type': {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          paddingInlineStart: '16px',
        },
        '&:last-of-type': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          paddingInlineEnd: '16px',
        },
        ...props?.sx,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        {children ? (
          children
        ) : (
          <Typography
            variant="subtitle1"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {label}
          </Typography>
        )}
      </Box>
    </TableCell>
  );
};

export interface TransferItem {
  id: string;
  category: string;
  traveler_photo: string;
  traveler_first_name: string;
  traveler_last_name: string;
  property_title: string;
  datetime: string; // ISO date string
  location_title: string;
  babies?: boolean;
  return_transfer?: boolean;
  early_checkin?: boolean;
  late_checkout?: boolean;
}

export interface FormattedTransfers {
  formattedDate: string;
  transfers: TransferItem[];
}

interface TransfersListTableBody {
  transfersList: FormattedTransfers[];
}

export default function TransfersListTableBody({
  transfersList,
}: TransfersListTableBody) {
  const { t } = useTranslation();
  const { handleOpenById } = useCarouselModalStore();

  return (
    <TableBody>
      {transfersList.map(({ formattedDate, transfers }, index) => (
        <Fragment key={`transfer-data-group-${index}`}>
          <TableRow key={`formatted-date-${index}`}>
            <CustomBodyCell
              colSpan={6}
              sx={{
                paddingBlock: '6px',
                paddingInline: '0 !important',
                backgroundColor: 'transparent',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  color: '#858c96',
                }}
              >
                {formattedDate}
              </Typography>
            </CustomBodyCell>
          </TableRow>

          {transfers.map((item, index) => (
            <TableRow
              key={index}
              onClick={() =>
                handleOpenById(
                  item.id,
                  transfersList.flatMap((item) => item.transfers)
                )
              }
            >
              <CustomBodyCell>
                <StatusBadge
                  category={item?.category}
                  sx={{ borderRadius: '50%', width: '38px', height: '38px' }}
                />
              </CustomBodyCell>
              <CustomBodyCell>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Avatar
                    src={item?.traveler_photo}
                    sx={{ marginInlineEnd: '12px' }}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item?.traveler_first_name} {item?.traveler_last_name}
                  </Typography>
                </Box>
              </CustomBodyCell>
              <CustomBodyCell label={item?.property_title} />
              <CustomBodyCell
                label={formatArrivalDepartureDate(item?.datetime, t)}
              />
              <CustomBodyCell label={item?.location_title} />
              <CustomBodyCell>
                <Box display="flex" gap={1}>
                  <OpportunitiesCell transfer={item} />
                </Box>
              </CustomBodyCell>
            </TableRow>
          ))}
        </Fragment>
      ))}
    </TableBody>
  );
}
