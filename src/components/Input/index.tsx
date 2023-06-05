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
    className?: string;
}

export function Input({ id, placeholder, Etype, value, onChange, error, onBlur, className}: PropsInput) {
    return(
        <>
            <InputStyled
                id={id} 
                type={Etype}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                className={className}
                placeholder={placeholder} 
            />
            <ErrorMessage error={error} />
        </>
    )
}   