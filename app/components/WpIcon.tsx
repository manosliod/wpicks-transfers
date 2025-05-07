import {
  DashIcon,
  MenuIcon,
  DoubleChevronLeftIcon,
  DoubleChevronRightIcon,
  PowerIcon,
  RevenueIcon,
  ScheduledIcon,
  StatisticsIcon,
  SupportIcon,
  SettingsIcon,
  ArrivingIcon,
  DepartingIcon,
  InCityIcon,
  BabyIcon,
  CarIcon,
  EarlyCheckInIcon,
  LateCheckOutIcon,
  CalendarIcon,
  ArrowDottedIcon,
  PeopleIcon,
  BabySeatIcon,
  LuggageIcon,
  HandLuggageIcon,
  TakeOffIcon,
  TimeIcon,
} from './icons/useIcons';

import { SvgIcon, SvgIconProps } from '@mui/material';

const icons = {
  dash: DashIcon,
  menu: MenuIcon,
  calendar: CalendarIcon,
  'double-chevron-left': DoubleChevronLeftIcon,
  'double-chevron-right': DoubleChevronRightIcon,
  power: PowerIcon,
  scheduled: ScheduledIcon,
  statistics: StatisticsIcon,
  revenue: RevenueIcon,
  settings: SettingsIcon,
  support: SupportIcon,
  arrival: ArrivingIcon,
  departure: DepartingIcon,
  'in-city': InCityIcon,
  babies: BabyIcon,
  return_transfer: CarIcon,
  early_checkin: EarlyCheckInIcon,
  late_checkout: LateCheckOutIcon,
  'arrow-dotted': ArrowDottedIcon,
  passengers: PeopleIcon,
  babyseats: BabySeatIcon,
  luggage: LuggageIcon,
  hand_luggage: HandLuggageIcon,
  take_off: TakeOffIcon,
  time: TimeIcon,
};

export interface WpIconProps extends SvgIconProps {
  name: keyof typeof icons;
}

export default function WpIcon({ name, ...props }: WpIconProps) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null; // or fallback icon
  }

  return <SvgIcon component={IconComponent} inheritViewBox {...props} />;
}
