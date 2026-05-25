export function qs(selector) {

    return document.querySelector(selector)
}

export function qsa(selector) {

    return [
        ...document.querySelectorAll(selector)
    ]
}

export function byId(id) {

    return document.getElementById(id)
}

export function uid() {

    return crypto.randomUUID()
}

export function formatMoney(value = 0) {

    return new Intl.NumberFormat(
        'es-MX',
        {
            style: 'currency',
            currency: 'MXN'
        }
    ).format(Number(value) || 0)
}

export function showToast(message) {

    const toast = byId('toast')

    toast.textContent = message

    toast.classList.add('show')

    clearTimeout(window.toastTimeout)

    window.toastTimeout = setTimeout(() => {

        toast.classList.remove('show')

    }, 2500)
}