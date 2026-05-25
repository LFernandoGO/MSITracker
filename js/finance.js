export function calcularMensualidad(
    total,
    meses
) {

    if (!meses) return 0

    return total / meses
}

export function calcularMiParte(msi) {

    if (
        msi.pagoType === 'solo'
    ) {
        return msi.total
    }

    if (
        msi.pagoType === 'compartido'
    ) {

        return (
            msi.total *
            (
                msi.miPorcentaje / 100
            )
        )
    }

    return 0
}

export function calcularUtilizacion(
    deuda,
    linea
) {

    if (!linea) return 0

    return (
        deuda / linea
    ) * 100
}