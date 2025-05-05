'use client';

import '@/lib/i18n';
import { ReactNode, useEffect } from 'react';
import { usePageStore } from '@/app/shared/stores/pageStore';
import { useMediaQuery } from '@mui/material';

interface ClientHomeProps {
  children?: ReactNode;
}

export default function ClientHome({ children }: ClientHomeProps) {
  const { setIsMobile } = usePageStore();
  const isMobileQuery = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery, setIsMobile]);

  return <>{children}</>;
}
