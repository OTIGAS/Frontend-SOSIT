import { OptionsContent } from "./styles";

interface PropsOptions {
  nome_servico: string;
  nome_agenda: string;
  dias_semana: string[];
}

export function OptionsSchedule({ nome_servico, nome_agenda, dias_semana }: PropsOptions) {
  return (
    <>
      <OptionsContent>
        <strong>{nome_servico}</strong>
        <strong>{nome_agenda}</strong>
        <div>
          {dias_semana.map((dia, index) => (
            <span key={index}>{dia}</span>
          ))}
        </div>
      </OptionsContent>
    </>
  );
}