import { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
import { Typography, Box } from '@mui/material';
import WpIcon, { WpIconProps } from '@/app/components/WpIcon';
import OpportunityIcon from '@/app/components/transfers-list/partials/OpportunityIcon';
import type { TransferItem } from '@/app/components/transfers-list/TransfersListTableBody';

export const opportunityKeys = [
  'babies',
  'return_transfer',
  'early_checkin',
  'late_checkout',
] as const;

interface OpportunitiesProps {
  transfer: TransferItem;
  showOpportunityLabel?: boolean;
}

export const Opportunities = ({
  transfer,
  showOpportunityLabel,
}: OpportunitiesProps): ReactNode => {
  const { t } = useTranslation();
  const hasOpportunities = opportunityKeys.some((key) => transfer[key]);

  if (!hasOpportunities) {
    return (
      <OpportunityIcon key="dash">
        <WpIcon name="dash" />
      </OpportunityIcon>
    );
  }

  return opportunityKeys.map((key) =>
    transfer[key] ? (
      <Box key={key} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <OpportunityIcon>
          <WpIcon name={key as WpIconProps['name']} />
        </OpportunityIcon>
        {showOpportunityLabel && (
          <Typography variant="subtitle1">
            {t(`transfers:list_table.opportunities.${key}`)}
          </Typography>
        )}
      </Box>
    ) : null
  );
};

export default Opportunities;
