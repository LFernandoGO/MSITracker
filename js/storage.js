import { state } from './state.js'

const STORAGE_KEY =
    'msi-tracker'

export function saveLocalData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.data)
    )
}

export function loadLocalData() {

    const saved =
        localStorage.getItem(
            STORAGE_KEY
        )

    if (!saved) return

    try {

        state.data =
            JSON.parse(saved)

    } catch (error) {

        console.error(error)
    }
}