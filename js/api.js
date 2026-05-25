const API_URL =
    window.CONFIG.API_URL

export async function getData() {

    const response =
        await fetch(API_URL)

    return response.json()
}

export async function saveData(
    payload
) {

    const response =
        await fetch(API_URL, {

            method: 'POST',

            headers: {
                'Content-Type':
                    'application/json'
            },

            body:
                JSON.stringify(payload)
        })

    return response.json()
}