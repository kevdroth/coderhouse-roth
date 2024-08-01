// let menuGeneral;

// const mostrarMenuGeneral = () => {
//     menuGeneral = prompt(
//         'Seleccione una opción: \n1. Ingresar reserva \n2. Listar reservas \n3. Buscar reserva \n4. Salir'
//     );
// };

// const mostrarMenuBusquedaReserva = () => {
//     return prompt(
//         'Seleccione una opción: \n1. Busqueda por tipo de vehiculo \n2. Busqueda por fecha'
//     );
// };

// const mostrarPrompt = (mensaje) => {
//     return prompt(mensaje);
// };

// const mostrarAlert = (mensaje) => {
//     alert(mensaje);
// };

// const reservas = [];

// const tiposDeVehiculos = [
//     { id: 1, nombre: 'Auto' },
//     { id: 2, nombre: 'Moto' },
//     { id: 3, nombre: 'Camioneta' },
// ];

// const calcularPrecio = (vehiculo) => {
//     let tarifa;
//     switch (vehiculo) {
//         case 'Auto':
//             tarifa = 100;
//             break;
//         case 'Moto':
//             tarifa = 50;
//             break;
//         case 'Camioneta':
//             tarifa = 250;
//             break;
//         default:
//             tarifa = 0;
//             break;
//     }
//     return tarifa;
// };

// const iniciarMenu = () => {
//     while (true) {
//         mostrarMenuGeneral();
//         if (!menuGeneral) continue;

//         while (
//             menuGeneral !== '1' &&
//             menuGeneral !== '2' &&
//             menuGeneral !== '3' &&
//             menuGeneral !== '4'
//         ) {
//             mostrarAlert('La opción ingresada no existe. Reintente');
//             mostrarMenuGeneral();
//             if (!menuGeneral) continue;
//         }

//         if (menuGeneral === '4') {
//             mostrarAlert('Hasta luego.');
//             return;
//         }

//         switch (menuGeneral) {
//             case '1':
//                 const fecha = mostrarPrompt(
//                     'Ingrese fecha en formato DD/MM/YYYY:'
//                 );
//                 if (!fecha) continue;

//                 let tipoVehiculo = mostrarPrompt(
//                     'Ingrese tipo de vehiculo \n1. Auto \n2. Moto \n3. Camioneta'
//                 );
//                 if (!tipoVehiculo) continue;

//                 switch (tipoVehiculo) {
//                     case '1':
//                         tipoVehiculo = 'Auto';
//                         break;
//                     case '2':
//                         tipoVehiculo = 'Moto';
//                         break;
//                     case '3':
//                         tipoVehiculo = 'Camioneta';
//                         break;
//                     default:
//                         mostrarAlert('Tipo de vehículo no válido. Reintente.');
//                         continue;
//                 }

//                 const reserva = {
//                     fecha: fecha,
//                     tipo: tipoVehiculo,
//                     precio: calcularPrecio(tipoVehiculo),
//                 };
//                 reservas.push(reserva);
//                 break;

//             case '2':
//                 if (reservas.length === 0) {
//                     mostrarAlert('No hay reservas registradas.');
//                 } else {
//                     let dataReservas = '';
//                     reservas.forEach((reserva) => {
//                         dataReservas += `Fecha: ${reserva.fecha} - Tipo: ${reserva.tipo} - Precio: $${reserva.precio}\n`;
//                     });
//                     mostrarAlert(dataReservas);
//                 }
//                 break;

//             case '3':
//                 let menuBusquedaReserva = mostrarMenuBusquedaReserva();
//                 if (!menuBusquedaReserva) continue;

//                 switch (menuBusquedaReserva) {
//                     case '1':
//                         let tipoVehiculoBusqueda = mostrarPrompt(
//                             'Ingrese tipo de vehiculo \n1. Auto \n2. Moto \n3. Camioneta'
//                         );
//                         if (!tipoVehiculoBusqueda) continue;

//                         switch (tipoVehiculoBusqueda) {
//                             case '1':
//                                 tipoVehiculoBusqueda = 'Auto';
//                                 break;
//                             case '2':
//                                 tipoVehiculoBusqueda = 'Moto';
//                                 break;
//                             case '3':
//                                 tipoVehiculoBusqueda = 'Camioneta';
//                                 break;
//                             default:
//                                 mostrarAlert(
//                                     'Tipo de vehículo no válido. Reintente.'
//                                 );
//                                 continue;
//                         }

//                         let resultadosTipo = reservas.filter(
//                             (reserva) => reserva.tipo === tipoVehiculoBusqueda
//                         );
//                         if (resultadosTipo.length > 0) {
//                             let dataResultados = '';
//                             resultadosTipo.forEach((reserva) => {
//                                 dataResultados += `Fecha: ${reserva.fecha} - Tipo: ${reserva.tipo} - Precio: $${reserva.precio}\n`;
//                             });
//                             mostrarAlert(dataResultados);
//                         } else {
//                             mostrarAlert(
//                                 'No se encontraron reservas para el tipo de vehículo seleccionado.'
//                             );
//                         }
//                         break;

//                     case '2':
//                         let fechaBusqueda = mostrarPrompt(
//                             'Ingrese fecha en formato DD/MM/YYYY:'
//                         );
//                         if (!fechaBusqueda) continue;

//                         let resultadosFecha = reservas.filter(
//                             (reserva) => reserva.fecha === fechaBusqueda
//                         );
//                         if (resultadosFecha.length > 0) {
//                             let dataResultados = '';
//                             resultadosFecha.forEach((reserva) => {
//                                 dataResultados += `Fecha: ${reserva.fecha} - Tipo: ${reserva.tipo} - Precio: $${reserva.precio}\n`;
//                             });
//                             mostrarAlert(dataResultados);
//                         } else {
//                             mostrarAlert(
//                                 'No se encontraron reservas para la fecha seleccionada.'
//                             );
//                         }
//                         break;

//                     default:
//                         mostrarAlert(
//                             'Opción de búsqueda no válida. Reintente.'
//                         );
//                         continue;
//                 }
//                 break;

//             default:
//                 mostrarAlert('Opción no válida. Reintente.');
//                 continue;
//         }
//     }
// };

// iniciarMenu();
