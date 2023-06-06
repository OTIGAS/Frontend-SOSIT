import { useCallback, useState } from "react"

interface Options {
    method: string;
    headers: {
        'Content-Type'?: string;
        Authorization?: string;
    };
    body?: string;
}

interface Customer {
	nome: string,
	email: string,
	senha: string,
	cpf: string,
	telefone: string,
	cep: string,
	estado: string,
	cidade: string,
	rua: string,
	numero: string,
	nascimento: string,
}

interface Company {
	nome_fantasia: string,
	razao_social: string,
	email: string,
	senha: string,
	cnpj: string,

	sobre: string,
	img_perfil: string,
	link_google: string,

	telefone: string,
	email_contato: string,
	nome_contato: string,

	cep: string,
	estado: string,
	cidade: string,
	rua: string,
	numero: string,

	banco: string,
	agencia: string,
	digito: string,
	tipo_conta: string,
	conta: string
}

interface UseFetchProps {
    request?: (url: string, options: Options) => Promise<{ 
        response: Response | undefined; 
        json: Customer | Company | null 
    }>;
    error?: string | null;
    loading?: boolean | null;
    data?: Customer | Company | null;
}
  

export function useFetch(): UseFetchProps {
    const [data, setData] = useState<Customer | Company | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<true | false>(false);
    
    const request = useCallback(async (url:string, options: Options) => {
        let response;
        let json;
        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            if (response.status.toString().startsWith('4')) throw new Error(json.message);
        } catch (err) {
            json = null;
            setError((err as Error).message);
        } finally {
            setData(json);
            setLoading(false);
        }
        return { response, json };
    }, [])
    
    return {
        data,
        loading,
        error,
        request
    }

}