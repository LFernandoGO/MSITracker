import {
    byId
} from './helpers.js'

export function openModal(id) {

    byId(id)
        ?.classList
        .add('open')
}

export function closeModal(id) {

    byId(id)
        ?.classList
        .remove('open')
}

export function initModals() {

    document.addEventListener(
        'click',
        event => {

            if (
                event.target.classList.contains(
                    'modal-overlay'
                )
            ) {

                event.target
                    .classList
                    .remove('open')
            }
        }
    )
}