let menuGeneral = prompt(
    'Seleccione una opción: \n1. Ingresar reserva \n2. Listar reservas \n3. Buscar reserva \n4. Salir'
);
// let menuBusquedaReserva = prompt(
//     'Seleccione una opción: \n1. Busqueda por tipo de vehiculo \n2. Busqueda por fecha'
// );

let reservas = [];

const tiposDeVehiculos = [
    {
        id: 1,
        nombre: 'Auto',
    },
    {
        id: 2,
        nombre: 'Moto',
    },
    {
        id: 3,
        nombre: 'Camioneta',
    },
];

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

const iniciarMenu = (menuGeneral) => {
    while (
        menuGeneral !== '1' &&
        menuGeneral !== '2' &&
        menuGeneral !== '3' &&
        menuGeneral !== '4'
    ) {
        alert('La opción ingresada no existe. Reintente');
        menuGeneral = prompt(
            'Seleccione una opción: \n1. Ingresar reserva \n2. Listar reservas \n3. Buscar reserva \n4. Salir'
        );
    }

    if (menuGeneral === '4') {
        alert('Hasta luego.');
        console.log(reservas);
        return;
    }

    switch (menuGeneral) {
        case '1':
            const fecha = prompt('Ingrese fecha en formato MM/DD/YYYY:');
            let tipoVehiculo = prompt(
                'Ingrese tipo de vehiculo \n1. Auto \n2. Moto \n3. Camioneta'
            );

            if (tipoVehiculo === '1') {
                tipoVehiculo = 'Auto';
            } else if (tipoVehiculo === '2') {
                tipoVehiculo = 'Moto';
            } else if (tipoVehiculo === '3') {
                tipoVehiculo = 'Camioneta';
            } else {
                tipoVehiculo = prompt(
                    'Ingrese tipo de vehiculo \n1. Auto \n2. Moto \n3. Camioneta'
                );
                return;
            }

            const reserva = {
                fecha: fecha,
                tipo: tipoVehiculo,
            };
            reservas.push(reserva);

            menuGeneral = prompt(
                'Seleccione una opción: \n1. Ingresar reserva \n2. Listar reservas \n3. Buscar reserva \n4. Salir'
            );
            iniciarMenu(menuGeneral);
            break;
        case '2':
            let dataReservas = '';
            reservas.forEach((reserva) => {
                dataReservas += `Fecha: ${reserva.fecha} - Tipo: ${reserva.tipo}\n`;
            });
            alert(dataReservas);
            menuGeneral = prompt(
                'Seleccione una opción: \n1. Ingresar reserva \n2. Listar reservas \n3. Buscar reserva \n4. Salir'
            );
            iniciarMenu(menuGeneral);
            break;
        case '3':
            let menuBusquedaReserva = prompt(
                'Seleccione una opción: \n1. Busqueda por tipo de vehiculo \n2. Busqueda por fecha'
            );
            if (menuBusquedaReserva === '1') {
                let tipoVehiculo = prompt(
                    'Ingrese tipo de vehiculo \n1. Auto \n2. Moto \n3. Camioneta'
                );
                let dataReservas = '';
                if (tipoVehiculo === '1') {
                    reservas.filter((f) => f.id === tipoVehiculo);
                    reservas.forEach((reserva) => {
                        dataReservas += `Fecha: ${reserva.fecha} - Tipo: ${reserva.tipo}\n`;
                    });
                    console.log(dataReservas);
                    alert(reservas);
                    menuGeneral = prompt(
                        'Seleccione una opción: \n1. Ingresar reserva \n2. Listar reservas \n3. Buscar reserva \n4. Salir'
                    );
                    iniciarMenu(menuGeneral);
                } else if (tipoVehiculo === '2') {
                } else if (tipoVehiculo === '3') {
                }
            }
            break;
    }
};
iniciarMenu(menuGeneral);
