export type Section = {
  title: string;
  text: string;
};

export interface Store {
  sections: Section[];
  setSections: (data: Section[]) => void;
  selected: number;
  setSelected: (idx: number) => void;
  addSectionModalOpened: boolean;
  setAddSectionModalOpened: (bool: boolean) => void;
  newSection: string;
  setNewSection: (newSection: string) => void;
}
