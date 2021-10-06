import { patchWithToken } from './api'

export function confirmPayment(id) {
    patchWithToken(`/payment/confirm/${id}`).then(() => {
        window.location.replace(window.location.pathname + window.location.search + window.location.hash);
        return true
    }).catch(() => {
        return false
    })
}

export function cancelPayment(id) {
    patchWithToken(`/payment/cancel/${id}`).then(() => {
        window.location.replace(window.location.pathname + window.location.search + window.location.hash);
        return true
    }).catch(() => {
        return false
    })
}