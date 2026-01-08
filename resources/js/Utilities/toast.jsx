import Swal from "sweetalert2";
import '../../css/toast.css'

const baseToast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseleave = Swal.resumeTimer;
        toast.onmouseenter = Swal.stopTimer;
    }
});

const Toast = {
    success(message) {
        baseToast.fire({
            icon: "success",
            title: message,
        });
    },

    error(message) {
        baseToast.fire({
            icon: "error",
            title: message,
        });
    },

    warning(message) {
        baseToast.fire({
            icon: "warning",
            title: message,
        });
    },

    info(message) {
        baseToast.fire({
            icon: "info",
            title: message,
        });
    },
};

export default Toast;
