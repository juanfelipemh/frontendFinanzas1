export const formatearMoneda = (valor) => {
    return Number(valor).toLocaleString(
        'es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }
    )
}