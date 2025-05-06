import { ReactNode } from 'react';
import type { TransferItem } from '@/app/components/transfers-list/TransfersListTableBody';
import OpportunityIcon from '@/app/components/transfers-list/partials/OpportunityIcon';
import WpIcon, { WpIconProps } from '@/app/components/WpIcon';

export const opportunityKeys = [
  'babies',
  'return_transfer',
  'early_checkin',
  'late_checkout',
] as const;

interface OpportunitiesProps {
  transfer: TransferItem;
}

export const Opportunities = ({ transfer }: OpportunitiesProps): ReactNode => {
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
      <OpportunityIcon key={key}>
        <WpIcon name={key as WpIconProps['name']} />
      </OpportunityIcon>
    ) : null
  );
};

export default Opportunities;
