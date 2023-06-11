// export const API_URL = 'http://localhost:3333';
export const API_URL = 'https://api-sosit.onrender.com';

interface tokenPostBody {
    email: string;
    senha: string;
}

interface Customer {
    nome: string
    email: string
    senha: string
    cpf: string
    telefone: string
    cep: string
    estado: string
    cidade: string
    rua: string
    numero: string
    nascimento: string
}

interface Company {
    nome_fantasia: string
    razao_social: string
    email: string
    senha: string
    cnpj: string
    sobre: string
    img_perfil: string
    link_google: string
    telefone: string
    email_contato: string
    nome_contato: string
    cep: string
    estado: string
    cidade: string
    rua: string
    numero: string
    banco: string
    agencia: string
    digito: string
    tipo_conta: string
    conta: string
}

export function TOKEN_POST_CUSTOMER(body: tokenPostBody) {
    return {
        urlCustomer: API_URL + '/customers/authenticate',
        optionsCustomer: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}

export function TOKEN_POST_COMPANY(body: tokenPostBody) {
    return {
        urlCompany: API_URL + '/companies/authenticate',
        optionsCompany: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}

export function COMPANY_GET(token: string) {
    return {
        urlCompany: API_URL + '/companies/me',
        optionsCompany: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    }
}

export function CUSTOMER_GET(token: string) {
    return {
        urlCustomer: API_URL + '/customers/me',
        optionsCustomer: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    }
}

export function CUSTOMER_POST(body: Customer) {
    return {
        urlCustomer: API_URL + '/customers',
        optionsCustomer: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}

export function COMPANY_POST(body: Company) {
    return {
        urlCompany: API_URL + '/companies',
        optionsCompany: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}

export function CUSTOMER_PATCH(body: Customer, id: string) {
    return {
        urlCustomer: API_URL + '/customers/' + id,
        optionsCustomer: {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}

export function COMPANY_PATCH(body: Company) {
    return {
        urlCompany: API_URL + '/companies',
        optionsCompany: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}

export function GET_ID_COMPANY(id: string) {
    return {
        url: API_URL + '/companies/get/' + id,
        options: {
            method: 'GET',
        }
    }
}

