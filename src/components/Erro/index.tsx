import { Erro } from "./styles";

interface ErrorMessageProps {
  error: string | Error | null | undefined;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  const errorMessage = typeof error === "string" ? error : error.message;

  return <Erro>{errorMessage}</Erro>;
}
