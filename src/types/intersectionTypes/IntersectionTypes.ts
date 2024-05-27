export interface element {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
}

export interface Section {
  name: string;
  ref: React.RefObject<HTMLDivElement>;
}
