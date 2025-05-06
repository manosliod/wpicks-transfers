'use client';

import '@/lib/i18n';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useStopPropagation } from '@/app/shared/hooks/useHooks';
import { usePageStore, useSidebarStore } from '@/app/shared/stores/useStore';

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  Card,
  CardHeader,
  Button,
  Typography,
  IconButton,
} from '@mui/material';

import WpIcon from '@/app/components/WpIcon';
import WpLogo from '@/assets/logos/Logo.png';
import CloseIcon from '@mui/icons-material/Close';

export default function BaseLayout({ children }: any) {
  const { t } = useTranslation();
  const { isMobile } = usePageStore();

  const {
    selectedKey,
    setSelectedKey,
    isLocked,
    setLocked,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  } = useSidebarStore();

  const stopPropagationAndCloseDrawer = useStopPropagation(closeDrawer);

  const isExpanded = React.useMemo(
    () => (isMobile ? isDrawerOpen : isLocked),
    [isMobile, isDrawerOpen, isLocked]
  );

  const openSidebar = () => {
    if (isMobile) openDrawer();
    else setLocked(true);
  };

  const closeSidebar = () => {
    if (isMobile) closeDrawer();
    else setLocked(false);
  };

  const menuItems = [
    {
      label: t('side_menu:live_view'),
      icon: <WpIcon name="power" />,
    },
    {
      label: t('side_menu:scheduled'),
      icon: <WpIcon name="scheduled" />,
    },
    {
      label: t('side_menu:statistics'),
      icon: <WpIcon name="statistics" />,
    },
    {
      label: t('side_menu:revenue'),
      icon: <WpIcon name="revenue" />,
    },
    {
      label: t('side_menu:settings'),
      icon: <WpIcon name="settings" />,
    },
  ];

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isExpanded}
        onClick={openSidebar}
        onClose={stopPropagationAndCloseDrawer}
        PaperProps={{
          sx: {
            color: '#2D3B4E7A',
            fontWeight: 'semibold',
            width: isExpanded ? 260 : 76,
            transition: 'width 0.3s',
            overflowX: 'hidden',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            boxShadow: '0px 0px 8px rgba(45, 59, 78, 0.1)',
            border: 0,
            borderRight: '1px solid #2D3B4E1A',
          },
        }}
      >
        <Card
          sx={{
            paddingBlock: '16px',
            paddingInline: '12px',
            background: isMobile ? '#F4F5F6' : null,
            borderBottomRightRadius: '8px',
            maxWidth: '100%',
            boxShadow: 'none',
            marginBlockEnd: '26px',
          }}
        >
          <CardHeader
            avatar={
              <Box sx={{ marginInline: '2px' }}>
                <Image src={WpLogo.src} alt="Logo" width={48} height={48} />
              </Box>
            }
            title={<Typography variant="h6">{t('side_menu:title')}</Typography>}
            subheader={
              <Typography variant="caption">
                {t('side_menu:subtitle')}
              </Typography>
            }
            action={
              isMobile ? (
                <IconButton
                  size="small"
                  edge="end"
                  color="inherit"
                  onClick={stopPropagationAndCloseDrawer}
                  sx={{
                    padding: 0,
                    minWidth: '34px',
                    minHeight: '34px',
                    display: 'flex',
                    alignSelf: 'center',
                    backgroundColor: '#2D3B4E1A',
                  }}
                >
                  <CloseIcon />
                </IconButton>
              ) : null
            }
            sx={{
              display: 'flex',
              padding: 0,
              color: '#2D3B4E',
              alignItems: 'center',
              '& .MuiCardHeader-action': {
                display: 'flex',
                alignSelf: 'center',
                minWidth: '40px',
                minHeight: '40px',
              },
            }}
          />
        </Card>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            paddingBottom: '16px',
            paddingInline: '12px',
          }}
        >
          <List disablePadding>
            {menuItems.map((item, index) => (
              <Box key={index}>
                <ListItemButton
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedKey(item.label);
                    closeSidebar();
                  }}
                  selected={selectedKey === item.label}
                  sx={{
                    padding: isExpanded ? '12px 16px' : '8px',
                    borderRadius: '4px',
                    marginBlockEnd: '2px',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 32,
                      minHeight: 32,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginInlineEnd: '16px',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {isExpanded && (
                    <ListItemText
                      primary={
                        <Typography
                          variant="subtitle1"
                          sx={{ textWrap: 'nowrap' }}
                        >
                          {item.label}
                        </Typography>
                      }
                    />
                  )}
                </ListItemButton>
              </Box>
            ))}
          </List>
          <Divider />

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile ? (
            <List>
              <ListItemButton
                onClick={stopPropagationAndCloseDrawer}
                sx={{
                  padding: isExpanded ? '12px 16px' : '8px',
                  borderRadius: '4px',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    padding: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {isExpanded ? (
                    <WpIcon name="double-chevron-left" />
                  ) : (
                    <WpIcon name="double-chevron-right" />
                  )}
                </ListItemIcon>
                {isExpanded && (
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle1"
                        sx={{ textWrap: 'nowrap' }}
                      >
                        {t('side_menu:collapse_menu')}
                      </Typography>
                    }
                  />
                )}
              </ListItemButton>
            </List>
          ) : (
            <Button variant="contained">{t('side_menu:logout')} </Button>
          )}
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        flexGrow={1}
        onClick={closeSidebar}
        sx={{
          ml: isMobile ? 0 : isExpanded ? '260px' : '76px',
          transition: 'margin-left 0.3s',
          padding: isMobile ? '16px 20px' : '36px 32px',
          width: !isMobile
            ? `calc(100vw - ${isExpanded ? '275px' : '92px'})`
            : null,
        }}
      >
        <Box
          sx={{
            maxWidth: isMobile ? '320px' : 'fit-content',
            marginInline: 'auto',
            overflowX: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
