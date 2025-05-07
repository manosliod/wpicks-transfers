import React from 'react';
import { Table, Box } from '@mui/material';
import TransfersListTableHead from '@/app/components/transfers-list/TransfersListTableHead';
import TransfersListTableBody from '@/app/components/transfers-list/TransfersListTableBody';
import type { FormattedTransfers } from '@/app/components/transfers-list/TransfersListTableBody';

interface TransfersListTableProps {
  transfersList: FormattedTransfers[];
}

export default function TransfersListTable({
  transfersList,
}: TransfersListTableProps) {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
      }}
    >
      <Table
        sx={{
          maxWidth: '1070px',
          marginBlockStart: '36px',
          borderSpacing: '0 6px',
          borderCollapse: 'separate',
          tableLayout: 'fixed',
        }}
      >
        <TransfersListTableHead />
        <TransfersListTableBody transfersList={transfersList} />
      </Table>
    </Box>
  );
}
