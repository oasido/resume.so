import { Store, Section } from 'types/store';
import create from 'zustand';

export const useStore = create<Store>((set) => ({
  sections: [
    { title: 'Heading', text: '' },
    { title: 'About', text: '' },
    { title: 'Work Experience', text: '' },
    { title: 'Projects', text: '' },
    { title: 'Education', text: '' },
  ],
  setSections: (data: Section[]) => set(() => ({ sections: [...data] })),
  selected: 0,
  setSelected: (idx) => set(() => ({ selected: idx })),
  addSectionModalOpened: false,
  setAddSectionModalOpened: (bool) => set(() => ({ addSectionModalOpened: bool })),
  newSection: '',
  setNewSection: (value) => set(() => ({ newSection: value })),
}));
