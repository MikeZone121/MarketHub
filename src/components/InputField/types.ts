export interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  type: InputFieldTypesEnum;
  placeholder: string;
  value: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export enum InputFieldTypesEnum {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  DATE = 'date',
  TIME = 'time',
  DATE_TIME = 'datetime-local'
}