import { Store } from 'types/store';
import create from 'zustand';

export const useStore = create<Store>((set) => ({
  sections: ['Heading', 'About', 'Work Experience', 'Projects', 'Education'],
  setSections: (value) => set(() => ({ sections: value })),
  selected: 0,
  setSelected: (idx) => set(() => ({ selected: idx })),
  addSectionModalOpened: false,
  setAddSectionModalOpened: (bool) => set(() => ({ addSectionModalOpened: bool })),
  newSection: '',
  setNewSection: (value) => set(() => ({ newSection: value })),
}));
