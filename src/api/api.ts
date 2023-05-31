// export const API_URL = 'http://localhost:3333';
export const API_URL = 'https://api-sosit.onrender.com';

interface tokenPostBody {
    email: string;
    senha: string;
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