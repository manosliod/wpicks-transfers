import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Typography,
  Chip,
  SxProps,
  Theme,
  TableBody,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import TransfersListTableHead from '@/app/components/transfers-list/TransfersListTableHead';
import TransfersListTableBody from '@/app/components/transfers-list/TransfersListTableBody';

interface CustomHeaderCellProps {
  label: string;
  showNewBadge?: boolean;
  sx?: SxProps<Theme>;
  maxWidth?: number | string;
}

const CustomHeaderCell: React.FC<CustomHeaderCellProps> = ({
  label,
  showNewBadge = false,
  sx,
  maxWidth,
}) => {
  const { t } = useTranslation('common');

  return (
    <TableCell
      width={maxWidth}
      sx={{
        padding: '12px 16px',
        border: 'unset',
        color: '#858c96',
        backgroundColor: '#dededf',
        '&:first-of-type': {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        '&:last-of-type': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
        ...sx,
      }}
    >
      <Box sx={{ display: 'flex', position: 'relative', maxWidth: maxWidth }}>
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
              transform: 'translate(-8px, -50%)',
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

interface FormattedTransferList {
  formattedDate: string;
  items: [];
}

const TransfersListTable: React.FC<{
  formattedTransfersList: FormattedTransferList[];
}> = ({ formattedTransfersList }) => {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
      }}
    >
      <Table
        sx={{
          minWidth: '1070px',
          maxWidth: '1070px',
          marginBlockStart: '36px',
          borderSpacing: '0 6px',
          borderCollapse: 'separate',
        }}
      >
        <TransfersListTableHead />
        <TransfersListTableBody
          formattedTransfersList={formattedTransfersList}
        />
      </Table>
    </Box>
  );
};

export default TransfersListTable;
