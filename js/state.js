export const state = {

    currentTab: 'hoy',

    currentTheme:
        localStorage.getItem('theme') || 'dusk',

    selectedCard: 'Todos',

    pagoType: 'solo',

    data: {

        msi: [],

        tarjetas: [],

        pagosTDC: [],

        deudas: [],

        personas: [],

        inversiones: [],

        ingresos: [],

        anualidades: [],

        gastosFijos: [],

        suscripciones: []
    }
}