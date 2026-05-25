import {
    initTabs
} from './tabs.js'

import {
    initThemeSystem
} from './ui.js'

import {
    initModals
} from './modals.js'

import {
    renderHeaderKPIs,
    renderMSIList
} from './renderers.js'

import {
    loadLocalData
} from './storage.js'

function bootstrap() {

    loadLocalData()

    initThemeSystem()

    initTabs()

    initModals()

    renderHeaderKPIs()

    renderMSIList()
}

bootstrap()