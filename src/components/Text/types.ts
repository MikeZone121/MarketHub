export interface TextProps {
    text?: string;
    variant?: string;
    classNames?: string;
  }

export enum TextVariantEnum {
    SMALL = 'small',
    NORMAL = 'normal',
    QUOTE = 'quote',
    LEAD = 'lead',
}