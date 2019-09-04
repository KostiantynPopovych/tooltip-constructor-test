interface IPosition {
  x: number;
  y: number;
}

interface ITooltip {
  text: string;
  position: IPosition;
  backgroundColor: string;
}

export interface IImage {
  id?: string;
  source: string;
  altText: string;
  tooltip: ITooltip;
}
