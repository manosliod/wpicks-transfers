import React from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  Box,
  Typography,
  Chip,
  TableCellProps,
} from '@mui/material';
import { useTranslation } from 'next-i18next';

interface CustomHeaderCellProps extends TableCellProps {
  label: string;
  showNewBadge?: boolean;
  width?: number | string;
}

const CustomHeaderCell: React.FC<CustomHeaderCellProps> = ({
  label,
  showNewBadge = false,
  width,
  ...props
}) => {
  const { t } = useTranslation('common');

  return (
    <TableCell
      {...props}
      width={width}
      sx={{
        padding: '12px 8px',
        border: 'unset',
        color: '#858c96',
        backgroundColor: '#dededf',
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
      <Box sx={{ display: 'flex', position: 'relative', width: '100%' }}>
        <Typography
          variant="caption"
          sx={{ fontSize: '11px', fontWeight: 600 }}
        >
          {label}
        </Typography>

        {showNewBadge && (
          <Chip
            label={t('common.new')}
            size="small"
            sx={{
              position: 'absolute',
              top: '50%',
              right: '0',
              transform: 'translate(-6px, -50%)',
              backgroundColor: '#fbbf24',
              color: '#fff',
              fontWeight: 600,
              height: 20,
              fontSize: 10,
              borderRadius: 1,
              padding: '6px 8px',
              '& .MuiChip-label': {
                padding: 0,
              },
            }}
          />
        )}
      </Box>
    </TableCell>
  );
};

const TransfersListTableHead: React.FC = () => {
  const { t } = useTranslation(['transfers', 'common']);

  return (
    <TableHead sx={{ border: 'unset' }}>
      <TableRow>
        <CustomHeaderCell
          label={t('transfers.list_table.status')}
          width={'70px'}
        />
        <CustomHeaderCell
          label={t('transfers.list_table.traveller')}
          width={'200px'}
        />
        <CustomHeaderCell
          label={t('transfers.list_table.property')}
          width={'170px'}
        />
        <CustomHeaderCell
          label={`${t('transfers.list_table.arrive.noun')}/${t('transfers.list_table.depart.noun')}`}
          width={'180px'}
        />
        <CustomHeaderCell
          label={`${t('common:common.from')}/${t('common:common.to')}`}
          width={'150px'}
        />
        <CustomHeaderCell
          label={t('transfers.list_table.opportunities')}
          width={'170px'}
          showNewBadge
        />
      </TableRow>
    </TableHead>
  );
};

export default TransfersListTableHead;
