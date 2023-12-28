import React, { KeyboardEvent } from 'react'

export type PageTemplates = 'one-col' | 'two-col' | 'three-col';

export type ContainerProps = {
  children: React.ReactNode;
  page: string;
  pageTemplate?: PageTemplates;
}

export type AsideProps = {
  page: string;
}

export type ImageProps = {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export type UIDProps = {
  uid: string | undefined;
}

export type IconNames = 'back' | 'next' | 'email' | 'phone' | 'facebook' | 'linkedin' | 'dashboard' | 'analysis' | 'coding' | 'list' | 'translate' | 'review' | 'notes'

export type IconTypes = 'bg' | 'img' | 'icn'

export type SvgProps = {
  name: IconNames;
  type: IconTypes;
  width?: number;
  height?: number;
  className?: string;
  styles?: any;
  role?: string;
}

export type NavProps = {
  uid: string;
  label: string;
  url: string;
  icn: SvgProps;
  displayHeading?: string;
  displayBody?: string;
}

export type ContactNavProps = {
  uid: string;
  url: string;
  label: string;
  icn: SvgProps;
  targetBlank?: boolean;
}

export type LinkProps = {
  url: string;
  target?: string;
}

export type CardProps = {
  children: React.ReactNode;
  isLinked: boolean;
  link?: LinkProps;
  customClass?: string;
}

export type ErrorProps = {
  input: string;
  message: string;
}

export type FormValuesProps = {
  [key: string]: string;
}

export type InputElementTypes = HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement

export type TextInputTypes = 'textarea' | 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url'

export type InputProps = {
  name: string;
  value: string;
}

export type TextInputProps = {
  type: TextInputTypes;
  name: string;
  value: string;
  error: ErrorProps | undefined;
  label: string;
  handleOnChange: (input: InputProps, isRequired?: boolean, feedback?: string, override?: boolean) => void;
  handleOnBlur: (input: InputProps, isRequired?: boolean, feedback?: string, isEmail?: boolean, isURL?: boolean) => void;
  handleOnKeyUp?: (event: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>) => void;
  handleResetInput?: (inputName: string) => void;
  feedbackMessage?: string;
  isRequired?: boolean;
  helperText?: string;
  isEmail?: boolean;
  isURL?: boolean;
  suggestions?: React.ReactElement | null;
  rows?: number;
  min?: number;
  max?: number;
}

export interface PromiseWithCancel<T> extends Promise<T> {
  cancel: () => void;
}

export type ApiMethods = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type AWSCredentials = {
  accessKeyId: string,
  secretAccessKey: string,
  sessionToken: string
}

export type CohereRequestBody = {
  prompt: string,
  temperature: number,
  p: number
  k: number,
  max_tokens: number
}
