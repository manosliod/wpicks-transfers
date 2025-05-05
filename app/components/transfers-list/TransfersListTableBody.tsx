import React from 'react';
import {
  TableRow,
  TableCell,
  Box,
  Typography,
  TableBody,
  TableCellProps,
  Avatar,
} from '@mui/material';
import { format } from 'date-fns';
import type { WpIconProps } from '@/app/components/WpIcon';
import WpIcon from '@/app/components/WpIcon';
import OpportunityIcon from '@/app/components/transfers-list/partials/OpportunityIcon';

interface CustomBodyCellProps extends TableCellProps {
  label?: string;
  children?: React.ReactNode;
}

const CustomBodyCell: React.FC<CustomBodyCellProps> = ({
  label,
  children,
  ...props
}) => {
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
          <Typography variant="subtitle1">{label}</Typography>
        )}
      </Box>
    </TableCell>
  );
};

interface TransferItem {
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

interface FormattedTransfer {
  formattedDate: string;
  items: TransferItem[];
}

const TransfersListTableBody: React.FC<{
  formattedTransfersList: FormattedTransfer[];
}> = ({ formattedTransfersList }) => {
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

  const getWpIconName = (category: string): WpIconProps['name'] => {
    const lowerCaseCategory = category.toLowerCase();
    if (lowerCaseCategory === 'in city') {
      return 'transfer' as WpIconProps['name'];
    } else {
      return lowerCaseCategory as WpIconProps['name'];
    }
  };

  return (
    <TableBody>
      {formattedTransfersList.map(({ formattedDate, items }, index) => (
        <>
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
                sx={{ fontWeight: 600, color: '#858c96' }}
              >
                {formattedDate}
              </Typography>
            </CustomBodyCell>
          </TableRow>

          {items.map((item, index) => (
            <TableRow key={index}>
              <CustomBodyCell>
                <WpIcon name={getWpIconName(item?.category || '')} />
              </CustomBodyCell>
              <CustomBodyCell>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    src={item?.traveler_photo}
                    sx={{ marginInlineEnd: '12px' }}
                  />
                  <Typography variant="subtitle1">
                    {item?.traveler_first_name} {item?.traveler_last_name}
                  </Typography>
                </Box>
              </CustomBodyCell>
              <CustomBodyCell label={item?.property_title} />
              <CustomBodyCell label={format(item?.datetime, 'iiii, d MMMM')} />
              <CustomBodyCell label={item?.location_title} />
              <CustomBodyCell>
                <Box display="flex" gap={1}>
                  {opportunityKeys.some((key) => item[key]) ? (
                    opportunityKeys.map((key) =>
                      item[key] ? (
                        <OpportunityIcon key={key}>
                          <WpIcon name={key as WpIconProps['name']} />
                        </OpportunityIcon>
                      ) : null
                    )
                  ) : (
                    <OpportunityIcon key="dash">
                      <WpIcon name="dash" />
                    </OpportunityIcon>
                  )}
                </Box>
              </CustomBodyCell>
            </TableRow>
          ))}
        </>
      ))}
    </TableBody>
  );
};

export default TransfersListTableBody;
