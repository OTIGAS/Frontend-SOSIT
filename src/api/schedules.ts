// export const API_URL = 'http://localhost:3333';
export const API_URL = 'https://api-sosit.onrender.com';

interface Body {
    query: string;
}

export function GET_ID_SCHEDULE(token: string, id: string) {
    return {
        url: API_URL + '/schedule/' + id,
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    }
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

export function HISTORY_COMMITMENTS_SCHEDULE(token: string, id: string) {
    return {
        url: API_URL + '/commitment/schedules/history-schedule/' + id,
        options: {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    }
}

export function DELETE_COMMITMENTS_SCHEDULE(token: string, id: string) {
    return {
        url: API_URL + '/commitment/' + id,
        options: {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        }
    }
}