export type Fields = {
  name: string;
  email: string;
  location?: string;
  phone?: string;
  linkedin?: string;
  [key: string]: string;
};

export interface UserData {
  fields: Fields;
  setFields: (data: Partial<Fields>) => void;
}
