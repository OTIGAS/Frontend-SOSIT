import { ButtonStyled } from "./styles";

interface PropsButton {
  type?: "button" | "submit" | "reset" | undefined;
  children: string;
  loading: boolean | null;
}

export function Button({ type, children, loading }: PropsButton) {
  return (
    <ButtonStyled disabled={loading || false} type={type}>
      {children}
    </ButtonStyled>
  )
}

