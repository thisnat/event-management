import Swal from "sweetalert2";

export const successAlertRedirect = (msg) => {
    Swal.fire({
        icon : 'success',
        title : msg,
        allowOutsideClick : false
    }).then((result) => {
        if(result.isConfirmed) {
            window.location.replace("/");
        }
    });
}