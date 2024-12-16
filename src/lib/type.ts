export type reduxState = {
  theme: "light" | "dark";
  isMobile: boolean;
  tooltip: TTooltip;
};

export type TTooltip = {
  isVisible: boolean;
  text: string;
};
