'use client';
import '@/lib/i18n';
import WpLogo from '@/assets/logos/Logo.png';
import { useTranslation } from 'next-i18next';

import CloseIcon from '@mui/icons-material/Close';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  Divider,
  Card,
  CardHeader,
  Button,
  Typography,
  IconButton,
} from '@mui/material';

import WpIcon from '@/app/components/WpIcon';
import { useSidebarStore } from '@/stores/useStore';
import React from 'react';

export default function BaseLayout({ children }: any) {
  const { t } = useTranslation(['side_menu']);
  const isMobile = useMediaQuery('(max-width:768px)');

  const {
    selectedKey,
    setSelectedKey,
    isLocked,
    setLocked,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  } = useSidebarStore();

  const isExpanded = isMobile ? isDrawerOpen : isLocked;

  const toggleSidebar = () => {
    if (isExpanded) closeSidebar();
    else openSidebar();
  };
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
      label: t('side_menu.live_view'),
      icon: <WpIcon name="power" />,
    },
    {
      label: t('side_menu.scheduled'),
      icon: <WpIcon name="calendar" />,
      key: 'scheduled',
    },
    {
      label: t('side_menu.statistics'),
      icon: <WpIcon name="statistics" />,
    },
    {
      label: t('side_menu.revenue'),
      icon: <WpIcon name="revenue" />,
    },
    {
      label: t('side_menu.settings'),
      icon: <WpIcon name="settings" />,
      key: 'settings',
    },
  ];

  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isExpanded}
        onClick={openSidebar}
        onClose={closeSidebar}
        PaperProps={{
          sx: {
            color: '#2D3B4E7A',
            fontWeight: 'semibold',
            width: isExpanded ? 260 : 82,

            transition: 'width 0.3s',
            overflowX: 'hidden',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
            boxShadow: '0px 0px 8px rgba(45, 59, 78, 0.1)',
            border: 0,
          },
        }}
      >
        <Card
          sx={{
            paddingBlock: '16px',
            paddingInline: isExpanded ? '12px' : '16px',
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
                <img src={WpLogo.src} alt="Logo" className="" />
              </Box>
            }
            title={
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {t('side_menu.title')}
              </Typography>
            }
            subheader={
              <Typography
                variant="body2"
                sx={{
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.9px',
                }}
              >
                {t('side_menu.subtitle')}
              </Typography>
            }
            action={
              isMobile ? (
                <IconButton
                  size="small"
                  edge="end"
                  color="inherit"
                  onClick={closeSidebar}
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
            paddingInline: isExpanded ? '12px' : '16px',
          }}
        >
          <List disablePadding>
            {menuItems.map((item, index) => (
              <Box key={index}>
                <ListItemButton
                  onClick={() => {
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
                      justifyContent: 'center',
                      marginInlineEnd: '16px',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {isExpanded && <ListItemText primary={item.label} />}
                </ListItemButton>
              </Box>
            ))}
          </List>
          <Divider />

          <Box sx={{ flexGrow: 1 }} />

          {!isMobile ? (
            <List>
              <ListItemButton
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSidebar();
                }}
                sx={{
                  padding: isExpanded ? '12px 16px' : '8px',
                  borderRadius: '4px',
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, padding: 0 }}>
                  {isExpanded ? (
                    <WpIcon name="double-chevron-left" />
                  ) : (
                    <WpIcon name="double-chevron-right" />
                  )}
                </ListItemIcon>
                {isExpanded && <ListItemText primary="Collapse menu" />}
              </ListItemButton>
            </List>
          ) : (
            <Button variant="contained">{t('side_menu.logout')} </Button>
          )}
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        flexGrow={1}
        onClick={closeSidebar}
        sx={{
          ml: isMobile ? 0 : isExpanded ? '260px' : '82px',
          transition: 'margin-left 0.3s',
          p: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
