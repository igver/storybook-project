export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  enabled: boolean;
  buttonLabel: string;
  onButtonClick?: Function;
  stockButton?: boolean;
  cartButton?: boolean;
}
