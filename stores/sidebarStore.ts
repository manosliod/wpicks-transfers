import { create } from 'zustand';

type SidebarState = {
  selectedKey: string;
  isLocked: boolean;
  isDrawerOpen: boolean;
  setSelectedKey: (key: string) => void;
  setLocked: (locked: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

export const useSidebarStore = create<SidebarState>((set) => ({
  selectedKey: 'Scheduled',
  isLocked: false,
  isDrawerOpen: false,

  setSelectedKey: (key) => set({ selectedKey: key }),
  setLocked: (locked: boolean) => set({ isLocked: locked }),
  openDrawer: () => set({ isDrawerOpen: true }),
  closeDrawer: () => set({ isDrawerOpen: false }),
}));
