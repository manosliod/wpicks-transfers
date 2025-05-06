import type { WpIconProps } from '@/app/components/WpIcon';

export function mapTransferCategoryToIconName(
  category: string
): WpIconProps['name'] {
  const slug = category.trim().toLowerCase().replace(' ', '-');

  return slug as WpIconProps['name'];
}
