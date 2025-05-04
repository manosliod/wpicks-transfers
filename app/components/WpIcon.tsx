import {
  DoubleChevronRightIcon,
  PowerIcon,
  RevenueIcon,
  CalendarIcon,
  StatisticsIcon,
  SupportIcon,
  SettingsIcon,
} from './icons/useIcons';

// import  BurgerIcon from '@/assets/icons/burger.svg';
// import  BabyFaceIcon from '@/assets/icons/baby-face.svg';
// import  CarIcon from '@/assets/icons/car.svg';
// import  SunIcon from '@/assets/icons/sun.svg';
// import  MoonIcon from '@/assets/icons/moon.svg';
// import  EntranceIcon from '@/assets/icons/entrance.svg';
// import  ExitIcon } from '@/assets/icons/exit.svg';
// import  BuildingIcon } from '@/assets/icons/building.svg';

import { SvgIcon, SvgIconProps } from '@mui/material';

const icons = {
  'double-chevron-right': DoubleChevronRightIcon,
  power: PowerIcon,
  calendar: CalendarIcon,
  statistics: StatisticsIcon,
  revenue: RevenueIcon,
  settings: SettingsIcon,
  support: SupportIcon,
  // burger: BurgerIcon,
  // 'baby-face': BabyFaceIcon,
  // car: CarIcon,
  // sun: SunIcon,
  // moon: MoonIcon,
  // entrance: EntranceIcon,
  // exit: ExitIcon,
  // building: BuildingIcon,
};

interface WpIconProps extends SvgIconProps {
  name: keyof typeof icons;
}

export default function WpIcon({ name, ...props }: WpIconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null; // or fallback icon
  }

  return <SvgIcon component={IconComponent} inheritViewBox {...props} />;
}
