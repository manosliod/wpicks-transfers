'use client';
import { Fragment } from 'react';
import { t } from 'i18next';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';
import { usePageStore, useSidebarStore } from '@/app/shared/stores/useStore';

import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WpIcon from '@/app/components/WpIcon';
import { useStopPropagation } from '@/app/shared/hooks/useStopPropagation';

export default function BaseHeader() {
  const { isMobile } = usePageStore();
  const { openDrawer } = useSidebarStore();

  const stopPropagationAndOpenDrawer = useStopPropagation(openDrawer);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        borderBottom: !isMobile ? '2px solid #2D3B4E1A' : 'unset',
        backgroundColor: '#fff',
        color: '#555',
        borderBottomLeftRadius: isMobile ? '8px' : null,
        borderBottomRightRadius: isMobile ? '8px' : null,
        boxShadow: isMobile ? '0px 0px 8px rgba(45, 59, 78, 0.1)' : null,
      }}
    >
      <Toolbar
        sx={{
          '&.MuiToolbar-root': {
            paddingInline: isMobile ? '20px' : '32px',
          },
          justifyContent: isMobile ? 'space-between' : 'flex-end',
        }}
      >
        {isMobile && (
          <Fragment>
            <Box>
              <IconButton
                size="medium"
                edge="end"
                color="inherit"
                onClick={stopPropagationAndOpenDrawer}
                sx={{ marginInlineEnd: '12px' }}
              >
                <WpIcon name="menu" />
              </IconButton>
            </Box>
            <Box>
              <Typography
                variant="body2"
                fontWeight="bold"
                sx={{ color: '#2D3B4E' }}
              >
                {t('common:transfer.plural')} {t('transfers:list')}
              </Typography>
            </Box>
          </Fragment>
        )}
        <Box sx={{ justifyContent: 'flex-end' }}>
          {!isMobile ? (
            <Fragment>
              <IconButton
                size="medium"
                edge="end"
                color="inherit"
                sx={{ marginInlineEnd: '12px' }}
              >
                <PersonOutlineOutlinedIcon sx={{ color: '#2D3B4E80' }} />
              </IconButton>
              <IconButton size="medium" edge="end" color="inherit">
                <PowerSettingsNewIcon sx={{ color: '#2D3B4E80' }} />
              </IconButton>
            </Fragment>
          ) : (
            <IconButton size="medium" edge="end" color="inherit">
              <SearchIcon sx={{ color: '#2D3B4E80' }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
