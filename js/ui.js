import {
    THEMES
} from './constants.js'

import {
    state
} from './state.js'

import {
    byId,
    qsa
} from './helpers.js'

export function initThemeSystem() {

    renderThemePanel()

    applyTheme(
        state.currentTheme
    )

    byId('themeButton')
        .addEventListener(
            'click',
            toggleThemePanel
        )
}

function renderThemePanel() {

    byId('themePanel')
        .innerHTML = `

      <div class="tp-title">
        Tema
      </div>

      <div class="tp-opts">

        ${THEMES.map(theme => `

            <button
              class="tp-opt"
              data-theme="${theme.id}"
            >

              ${theme.label}

            </button>

          `).join('')
        }

      </div>
    `

    qsa('.tp-opt')
        .forEach(button => {

            button.addEventListener(
                'click',
                () => {

                    applyTheme(
                        button.dataset.theme
                    )
                }
            )
        })
}

function toggleThemePanel() {

    byId('themePanel')
        .classList
        .toggle('open')
}

function applyTheme(theme) {

    state.currentTheme = theme

    document.body.dataset.theme =
        theme

    localStorage.setItem(
        'theme',
        theme
    )
}