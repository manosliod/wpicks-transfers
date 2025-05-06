import type { WpIconProps } from '@/app/components/WpIcon';

export function mapTransferCategoryToIconName(
  category: string
): WpIconProps['name'] {
  const slug = category.trim().toLowerCase();

  switch (slug) {
    case 'in city':
      return 'transfer';
    // add more special cases here if needed:
    // case 'airport pickup': return 'airport';
    default:
      return slug as WpIconProps['name'];
  }
}
