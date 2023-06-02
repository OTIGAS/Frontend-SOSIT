import { ErrorMessage } from "../Erro";
import { InputStyled } from "./styles";

interface PropsInput {
    id?: string;
    placeholder?: string;
    Etype?: string;
    value?: string;
    error?: string | null;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export function Input({ id, placeholder, Etype, value, onChange, error, onBlur}: PropsInput) {
    return(
        <>
            <InputStyled
                id={id} 
                type={Etype}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <ErrorMessage error={error} />
        </>
    )
}   