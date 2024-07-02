let tipoVehiculo = prompt(
    'Ingrese tipo de vehiculo \n1. Auto \n2. Moto \n3. Camioneta \n4. Salir'
);

let total = 0;
let tarifa = 0;
const servicio = 50;

const calcularPrecio = (vehiculo) => {
    switch (vehiculo) {
        case 'auto':
            tarifa = 100;
            total = servicio + 100;
            break;
        case 'moto':
            tarifa = 50;
            total = servicio + 50;
            break;
        case 'camioneta':
            tarifa = 250;
            total = servicio + 250;
            break;
        default:
            break;
    }
    return tarifa;
};

const consultarVehiculo = (tipoVehiculo) => {
    if (tipoVehiculo === '1') {
        return 'un auto';
    } else if (tipoVehiculo === '2') {
        return 'una moto';
    } else if (tipoVehiculo === '3') {
        return 'una camioneta';
    }
};

const validarEntrada = (tipoVehiculo) => {
    while (
        tipoVehiculo !== '1' &&
        tipoVehiculo !== '2' &&
        tipoVehiculo !== '3' &&
        tipoVehiculo !== '4'
    ) {
        console.log('La opción ingresada no existe. Reintente');
        tipoVehiculo = prompt(
            'Ingrese tipo de vehiculo \n1. Auto \n2. Moto \n3. Camioneta \n4. Salir'
        );
    }

    if (tipoVehiculo === '4') {
        alert('Hasta luego.');
        return;
    }

    switch (tipoVehiculo) {
        case '1':
            calcularPrecio('auto');
            break;
        case '2':
            calcularPrecio('moto');
            break;
            5;
        case '3':
            calcularPrecio('camioneta');
            break;
    }

    alert(
        `El importe a abonar para ${consultarVehiculo(
            tipoVehiculo
        )} es de: \nServicio: $${servicio} \nTarifa: $${tarifa} \nTotal: $${total}`
    );

    tipoVehiculo = prompt(
        'Ingrese tipo de vehiculo \n1. Auto \n2. Moto \n3. Camioneta \n4. Salir'
    );
    validarEntrada(tipoVehiculo);
};

validarEntrada(tipoVehiculo);
