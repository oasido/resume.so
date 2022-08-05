import { UserData, Fields } from 'types/user_data';
import create from 'zustand';

export const useUserData = create<UserData>((set) => ({
  fields: {
    name: '',
    email: '',
    linkedin: '',
  },
  setFields: (data: Partial<Fields>) =>
    set(({ fields }: any) => ({ fields: { ...fields, ...data } })),
}));
