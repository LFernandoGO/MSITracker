import { state } from './state.js'

import {
    byId,
    formatMoney
} from './helpers.js'

import {
    calcularMensualidad,
    calcularMiParte
} from './finance.js'

export function renderHeaderKPIs() {

    const totalTarjeta =
        state.data.msi.reduce(
            (acc, item) =>
                acc + item.total,
            0
        )

    const totalMio =
        state.data.msi.reduce(
            (acc, item) =>
                acc +
                calcularMiParte(item),
            0
        )

    const meDeben =
        totalTarjeta - totalMio

    byId('hchipTarjeta')
        .innerHTML = `
      ${formatMoney(totalTarjeta)}
      <span>tarjeta</span>
    `

    byId('hchipMio')
        .innerHTML = `
      ${formatMoney(totalMio)}
      <span>mi parte</span>
    `

    byId('hchipDeben')
        .innerHTML = `
      ${formatMoney(meDeben)}
      <span>me deben</span>
    `
}

export function renderMSIList() {

    const app = byId('app')

    app.innerHTML = `

    <section class="section active">

      ${state.data.msi.map(item => {

        const mensualidad =
            calcularMensualidad(
                item.total,
                item.meses
            )

        return `

            <div class="msi-card">

              <div class="msi-top">

                <div>

                  <div class="msi-desc">
                    ${item.descripcion}
                  </div>

                  <div class="info-pill">
                    ${item.meses} MSI
                  </div>

                </div>

                <div class="msi-amounts">

                  <div class="msi-amount-main">
                    ${formatMoney(item.total)}
                  </div>

                  <div class="msi-amount-mine">
                    ${formatMoney(
            calcularMiParte(item)
        )}
                  </div>

                </div>

              </div>

              <div class="prog-bg">

                <div
                  class="prog-fill"
                  style="width:50%"
                ></div>

              </div>

              <div class="prog-labels">

                <span>
                  ${formatMoney(
            mensualidad
        )}
                </span>

                <span>
                  mensual
                </span>

              </div>

            </div>
          `
    }).join('')
        }

    </section>
  `
}