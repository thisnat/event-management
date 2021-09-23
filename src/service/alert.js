import Swal from "sweetalert2";
import { toast } from 'react-toastify';

import { patchWithToken } from "./api"
import Cookies from "js-cookie";

export const successAlertRedirect = (msg) => {
    Swal.fire({
        icon: 'success',
        title: msg,
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.replace("/");
        }
    });
}

export const logOut = () => {
    Swal.fire({
        icon: 'success',
        title: "ออกจากระบบแล้ว",
        allowOutsideClick: false
    }).then((result) => {
        if (result.isConfirmed) {
            Cookies.remove("token");
            localStorage.removeItem('userData');
            window.location.replace("/");
        }
    });
}

export const changePasswordAlert = () => {
    Swal.fire({
        title: "เปลี่ยน Password",
        html: `<input id="swal-input1" class="swal2-input" type="password" placeholder="password เก่า" required> 
              <input id="swal-input2" class="swal2-input" type="password" placeholder="password ใหม่" required>
             `
    }).then((result) => {
        if (result.isConfirmed) {
            let oldPassword = document.getElementById("swal-input1");
            let newPassword = document.getElementById("swal-input2");

            if (oldPassword.value && newPassword.value) {
                patchWithToken("/user/password", { oldPassword: oldPassword.value, newPassword: newPassword.value })
                    .then(() => {
                        Swal.fire("เปลี่ยน Password แล้ว");
                    })
                    .catch(err => {
                        Swal.fire(err.response.data.msg);
                    });
            } else {
                Swal.fire("กรุณากรอกข้อมูลให้ครบถ้วน");
            }
        }
    });
}

export const successToast = msg => {
    toast.success(msg);
}