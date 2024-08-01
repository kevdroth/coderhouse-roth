const toast = (icon, text) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
    });
    Toast.fire({
        icon: icon,
        title: text,
    });
};

const numericMask = (value, currency = 'ARS') => {
    const numericValue = parseFloat(value);

    const formattedValue = numericValue.toLocaleString('es-AR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formattedValue;
};
