let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

const deleteReserva = (id) => {
    const isValid = reservas.find((f) => f.id === id);
    if (isValid) {
        const updateDataReserva = reservas.filter((f) => f.id !== id);
        reservas = updateDataReserva;
        localStorage.setItem('reservas', JSON.stringify(reservas));
        renderReservas(reservas);
        inputSearch.value = '';
        toast('success', 'Reserva eliminada');
    } else {
        toast('error', 'Error al cancelar');
    }
};

const renderReservas = (reservas) => {
    const containerReservas = document.querySelector('#dataReservas');
    containerReservas.innerHTML = '';

    if (reservas.length > 0) {
        reservas.sort((a, b) => b.id - a.id);
        const card = document.createElement('div');
        card.classList.add('grid', 'grid-cols-12', 'gap-5', 'w-full');

        reservas.forEach((reserva) => {
            card.innerHTML += `
            <div class="col-span-12 md:col-span-6 lg:col-span-4">
                <div class="flex flex-col items-center bg-gray-900 rounded-t-lg shadow md:flex-row md:max-w-xl hover:bg-gray-800 hover:shadow-2xl">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                        src="assets/img/${reserva.vehiculo.toLowerCase()}.jpg"
                        alt="imagen ${reserva.vehiculo.toLowerCase()}">
                    <div class="flex flex-col justify-between p-4 leading-normal w-full capitalize">
                        <h5 class="text-2xl font-bold tracking-tight text-white">${
                            reserva.nombre
                        }</h5>
                        <h6 class="mb-2 font-bold tracking-tight text-white">${
                            reserva.apellido
                        }</h6>
                        <p class="font-normal text-gray-200 font-bold">${
                            reserva.vehiculo
                        }</p>
                        <p class="font-normal text-gray-200">${numericMask(
                            reserva.monto
                        )}</p>
                        <p class="font-normal text-gray-200">Desde ${formatDate(
                            reserva.fechaInicio
                        )}</p>
                        <p class="mb-3 font-normal text-gray-200"> Hasta ${formatDate(
                            reserva.fechaFin
                        )}</p>
                    </div>
                </div>
                <div class="flex justify-between">
                    <button onclick=deleteReserva(${reserva.id}) type="button"
                        class="bg-red-400 text-center text-gray-700 font-bold rounded-b-lg w-full hover:bg-red-500 ">
                        <span>CANCELAR</span>
                    </button>
                </div>
            </div>

            `;
            containerReservas.appendChild(card);
        });
    } else {
        const noData = document.createElement('div');
        noData.classList.add('m-5', 'text-center', 'text-gray-500', 'mb-32');

        const img = document.createElement('img');
        img.src = 'assets/img/noData.png';
        img.alt = 'No hay datos para mostrar';
        img.classList.add('mx-auto', 'h-64', 'w-64', 'object-contain');

        const message = document.createElement('p');
        message.textContent = 'No hay reservas para mostrar';
        message.classList.add('text-xl', 'text-center');

        noData.appendChild(img);
        noData.appendChild(message);
        containerReservas.appendChild(noData);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const inputSearch = document.querySelector('#inputSearch');
    const btnSearch = document.querySelector('#btnSearch');
    const btnClear = document.querySelector('#btnClear');
    const addReserva = document.querySelector('#addReserva');

    renderReservas(reservas);

    btnSearch.addEventListener('click', () => {
        if (inputSearch.value) {
            const searchQuery = inputSearch.value.toLowerCase();
            const filteredReservas = reservas.filter((reserva) => {
                return (
                    reserva.nombre.toLowerCase().includes(searchQuery) ||
                    reserva.apellido.toLowerCase().includes(searchQuery) ||
                    reserva.vehiculo.toLowerCase().includes(searchQuery) ||
                    reserva.fechaInicio.includes(searchQuery) ||
                    reserva.fechaFin.includes(searchQuery) ||
                    reserva.monto.includes(searchQuery)
                );
            });
            renderReservas(filteredReservas);
        } else {
            renderReservas(reservas);
        }
    });

    btnClear.addEventListener('click', () => {
        inputSearch.value = '';
        renderReservas(reservas);
    });

    addReserva.addEventListener('click', () => {
        Swal.fire({
            title: 'Agregar nueva reserva',
            html: `
                <div class="flex flex-col space-y-4 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <input id="inpNombre" class="p-3 border rounded-lg transition duration-150 ease-in-out" placeholder="Nombre">
                    <input id="inpApellido" class="p-3 border rounded-lg transition duration-150 ease-in-out" placeholder="Apellido">
                    <input id="inpFechaInicio" class="p-3 border rounded-lg transition duration-150 ease-in-out" placeholder="Fecha de Inicio" type="date">
                    <input id="inpFechaFin" class="p-3 border rounded-lg transition duration-150 ease-in-out" placeholder="Fecha de Fin" type="date">
                    <select id="selVehiculo" class="p-3 border rounded-lg transition duration-150 ease-in-out">
                        <option value="" disabled selected>Seleccione un vehículo</option>
                        <option value="moto">Moto</option>
                        <option value="auto">Auto</option>
                        <option value="camioneta">Camioneta</option>
                    </select>
                    <div class="relative">
                        <input id="inpMonto" class="p-3 w-full border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed transition duration-150 ease-in-out" placeholder="$ 0,00" type="text" disabled>
                    </div>
                </div>
            `,
            focusConfirm: false,
            confirmButtonText: 'Guardar',
            confirmButtonColor: '#4CAF50',
            preConfirm: () => {
                const nombre = document.getElementById('inpNombre').value;
                const apellido = document.getElementById('inpApellido').value;
                const vehiculo = document.getElementById('selVehiculo').value;
                const monto = document.getElementById('inpMonto').dataset.monto;
                const fechaInicio =
                    document.getElementById('inpFechaInicio').value;
                const fechaFin = document.getElementById('inpFechaFin').value;

                if (
                    !nombre ||
                    !apellido ||
                    !vehiculo ||
                    !monto ||
                    !fechaInicio ||
                    !fechaFin
                ) {
                    Swal.showValidationMessage('Complete todos los campos');
                    return false;
                }

                return {
                    nombre,
                    apellido,
                    vehiculo,
                    monto,
                    fechaInicio,
                    fechaFin,
                };
            },
            didOpen: () => {
                const vehiculoSelect = document.getElementById('selVehiculo');
                const montoInput = document.getElementById('inpMonto');
                const fechaInicioInput =
                    document.getElementById('inpFechaInicio');
                const fechaFinInput = document.getElementById('inpFechaFin');

                const calcularPrecio = (vehiculo) => {
                    let tarifa;
                    switch (vehiculo) {
                        case 'auto':
                            tarifa = 15000.5;
                            break;
                        case 'moto':
                            tarifa = 7499.99;
                            break;
                        case 'camioneta':
                            tarifa = 23250.25;
                            break;
                        default:
                            tarifa = 0;
                            break;
                    }
                    return tarifa;
                };

                const calcularMonto = () => {
                    const fechaInicio = new Date(fechaInicioInput.value);
                    const fechaFin = new Date(fechaFinInput.value);
                    const tarifa = calcularPrecio(vehiculoSelect.value);

                    let monto = 0;
                    if (fechaInicio && fechaFin && tarifa) {
                        if (fechaFin > fechaInicio) {
                            const diffTime = Math.abs(fechaFin - fechaInicio);
                            const diffDays = Math.ceil(
                                diffTime / (1000 * 60 * 60 * 24)
                            );
                            monto = tarifa * diffDays;
                        }
                    }
                    montoInput.value = numericMask(monto);
                    montoInput.dataset.monto = monto;
                };

                vehiculoSelect.addEventListener('change', () => {
                    calcularMonto();
                });

                fechaInicioInput.addEventListener('change', () => {
                    fechaFinInput.value = '';
                    montoInput.value = numericMask(0);
                    montoInput.dataset.monto = 0;
                    calcularMonto();
                });

                fechaFinInput.addEventListener('change', () => {
                    const fechaInicio = new Date(fechaInicioInput.value);
                    const fechaFin = new Date(fechaFinInput.value);

                    if (fechaFin <= fechaInicio) {
                        fechaFinInput.value = '';
                        montoInput.value = numericMask(0);
                        montoInput.dataset.monto = 0;
                    } else {
                        calcularMonto();
                    }
                });

                montoInput.value = numericMask(0);
                montoInput.dataset.monto = 0;
            },
        }).then((result) => {
            if (result.isConfirmed) {
                result.value;
                if (reservas.length > 0) {
                    const data = { ...result.value, id: reservas[0].id + 1 };
                    reservas.push(data);
                } else {
                    const data = { ...result.value, id: 1 };
                    reservas.push(data);
                }
                localStorage.setItem('reservas', JSON.stringify(reservas));
                toast('success', 'Reserva agregada');
                renderReservas(reservas);
            }
        });
    });
});
