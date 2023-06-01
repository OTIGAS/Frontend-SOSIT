import { TDComponent } from "./styles";

interface Props {
  children: string;
  className: string;
}

export function TD({children, className}:Props) {
  return <TDComponent className={className}>
     {children}
  </TDComponent>
}