import Swal from "sweetalert2";
import { toast } from 'react-toastify';

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

export const successToast = msg => {
    toast.success(msg);
}