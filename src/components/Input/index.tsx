import { InputStyled } from "./styles";

interface PropsInput {
    placeholder: string;
    type: string;
    value: string;
    error: string | null;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, type, value, onChange, error, onBlur}: PropsInput) {
    return(
        <>
            <InputStyled 
                type={type}
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error ? <p>{error}</p> : null} 
        </>
    )
}   