export function signIn(email: string, password: string): Promise<{}> {
    return new Promise(resolve => setTimeout(resolve, 100))
}

export const postData = (url: string, data: {}) => {
    return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
    }).then(response => response.json()) // parses response to JSON
}