import { Store, Section } from 'types/store';
import create from 'zustand';

export const useStore = create<Store>((set) => ({
  sections: [
    {
      title: 'Heading',
      text: '# Ofek Asido\n### asido.ofek@gmail.com | github.com/oasido | ofekasido.xyz | (012)34567 | Israel\n',
    },
    { title: 'About', text: '## About\nLikes to pet dogs and eat food.\n' },
    {
      title: 'Work Experience',
      text: '## Work Experience\n\n### Company 1 / 2015 - 2022\n_Role_\n* About the role',
    },
    { title: 'Education', text: '## Education\n### List Education here' },
    { title: 'Projects', text: '## Projects\n### Project 1\n* Cool thing about the project' },
  ],
  setSections: (data: Section[]) => set(() => ({ sections: [...data] })),
  selected: 0,
  setSelected: (idx) => set(() => ({ selected: idx })),
  addSectionModalOpened: false,
  setAddSectionModalOpened: (bool) => set(() => ({ addSectionModalOpened: bool })),
  newSection: '',
  setNewSection: (value) => set(() => ({ newSection: value })),
}));
