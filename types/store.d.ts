export interface Store {
  sections: string[];
  setSections: (data: string[]) => void;
  selected: number;
  setSelected: (idx: number) => void;
  addSectionModalOpened: boolean;
  setAddSectionModalOpened: (bool: boolean) => void;
  newSection: string;
  setNewSection: (newSection: string) => void;
}
