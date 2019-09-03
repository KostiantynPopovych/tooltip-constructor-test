interface ITooltip {
  text: string;
  position: string;
  backgroundColor: string;
}

export interface IImage {
  id: string;
  url: string;
  altText: string;
  tooltip?: ITooltip;
}
