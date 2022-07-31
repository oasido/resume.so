import { UserData } from 'types/user_data';
import create from 'zustand';

export const useUserData = create<UserData>((set) => ({
  name: '',
  setName: (value) => set(() => ({ name: value })),

  // sections: ['Heading', 'About', 'Work Experience', 'Projects', 'Education'],
  // setSections: (value) => set(() => ({ sections: value })),
  // selected: 0,
  // setSelected: (idx) => set(() => ({ selected: idx })),
  // addSectionModalOpened: false,
  // setAddSectionModalOpened: (bool) => set(() => ({ addSectionModalOpened: bool })),
  // newSection: '',
  // setNewSection: (value) => set(() => ({ newSection: value })),
}));
