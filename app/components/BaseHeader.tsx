'use client';
import React from 'react';
import { AppBar, Toolbar, IconButton, Box, useMediaQuery } from '@mui/material';
import { useSidebarStore } from '@/stores/sidebarStore';

import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WpIcon from '@/app/components/WpIcon';

export default function BaseHeader() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const { openDrawer } = useSidebarStore();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#fff',
        color: '#555',
      }}
    >
      <Toolbar sx={{ justifyContent: isMobile ? 'space-between' : 'flex-end' }}>
        {isMobile && (
          <Box>
            <IconButton
              size="medium"
              edge="end"
              color="inherit"
              onClick={openDrawer}
              sx={{ marginInlineEnd: '12px' }}
            >
              <WpIcon name="menu" />
            </IconButton>
          </Box>
        )}
        <Box sx={{ justifyContent: 'flex-end' }}>
          {!isMobile ? (
            <>
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
            </>
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
