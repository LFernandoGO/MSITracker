import {
    TABS
} from './constants.js'

import {
    state
} from './state.js'

import {
    byId,
    qsa
} from './helpers.js'

export function initTabs() {

    const container =
        byId('tabs')

    container.innerHTML =
        TABS.map(tab => `

      <button
        class="
          tab
          ${tab.id ===
                state.currentTab
                ? 'active'
                : ''
            }
        "
        data-tab="${tab.id}"
      >

        <span class="tab-icon">
          ${tab.icon}
        </span>

        ${tab.label}

      </button>

    `).join('')

    qsa('.tab').forEach(tab => {

        tab.addEventListener(
            'click',
            () => {

                changeTab(
                    tab.dataset.tab
                )
            }
        )
    })
}

export function changeTab(
    tabId
) {

    state.currentTab = tabId

    qsa('.tab').forEach(tab => {

        tab.classList.toggle(
            'active',
            tab.dataset.tab === tabId
        )
    })
}