import { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';
import { Typography, Box, SxProps } from '@mui/material';
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
  transfer?: TransferItem;
  showOpportunityLabel?: boolean;
  sx?: SxProps;
}

export const OpportunitiesCell = ({
  transfer,
  showOpportunityLabel,
  sx,
}: OpportunitiesProps): ReactNode => {
  const { t } = useTranslation();

  const hasOpportunities = transfer
    ? opportunityKeys.some((key) => !!transfer[key])
    : false;

  if (!hasOpportunities) {
    return (
      <Box
        className="oppertunity-box"
        sx={{ display: 'flex', alignItems: 'center', gap: 1, ...sx }}
      >
        <OpportunityIcon key="dash">
          <WpIcon name="dash" />
        </OpportunityIcon>
        {showOpportunityLabel && (
          <Typography variant="subtitle1">{t('common:none')}</Typography>
        )}
      </Box>
    );
  }

  return opportunityKeys.map((key) =>
    transfer && transfer[key] ? (
      <Box
        key={key}
        className="oppertunity-box"
        sx={{ display: 'flex', alignItems: 'center', gap: 1, ...sx }}
      >
        <OpportunityIcon className="oppertunity-icon">
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

export default OpportunitiesCell;
