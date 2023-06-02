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

export function COMPANY_POST(body: Customer) {
    return {
        urlCustomer: API_URL + '/company',
        optionsCustomer: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        }
    }
}

interface Body {
    query: string;
}

export function SCHEDULE_POST_SERVICE(body: Body, token: string) {
    return {
        url: API_URL + '/schedules/get-by-service',
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify(body),
        }
    }
}

export function HISTORY_COMMITMENTS_CUSTOMER(token: string) {
    return {
        url: API_URL + '/commitment/schedules/history-customer',
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    }
}