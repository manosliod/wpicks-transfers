import React from 'react';
import type { FormattedTransfers } from '@/app/components/transfers-list/TransfersListTableBody';

const TransfersListMobile: React.FC<{
  formattedTransfersList: FormattedTransfers[];
}> = ({ formattedTransfersList }) => {
  return formattedTransfersList.map(
    ({ formattedDate, items }, index) => formattedDate
  );
};

export default TransfersListMobile;
