let reservas = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        vehiculo: 'Auto',
        fecha: '17/01/2024',
        monto: '19362.23',
    },
    {
        id: 2,
        nombre: 'Ana',
        apellido: 'Gomez',
        vehiculo: 'Moto',
        fecha: '25/02/2024',
        monto: '24821.52',
    },
    {
        id: 3,
        nombre: 'Luis',
        apellido: 'Martinez',
        vehiculo: 'Camioneta',
        fecha: '12/03/2024',
        monto: '9373.28',
    },
    {
        id: 4,
        nombre: 'Maria',
        apellido: 'Rodriguez',
        vehiculo: 'Camioneta',
        fecha: '03/04/2024',
        monto: '1312.75',
    },
    {
        id: 5,
        nombre: 'Carlos',
        apellido: 'Lopez',
        vehiculo: 'Auto',
        fecha: '09/05/2024',
        monto: '17462.93',
    },
];

const calcularPrecio = (vehiculo) => {
    let tarifa;
    switch (vehiculo) {
        case 'Auto':
            tarifa = 100;
            break;
        case 'Moto':
            tarifa = 50;
            break;
        case 'Camioneta':
            tarifa = 250;
            break;
        default:
            tarifa = 0;
            break;
    }
    return tarifa;
};

const deleteReserva = (id) => {
    const isValid = reservas.find((f) => f.id === id);
    if (isValid) {
        const updateDataReserva = reservas.filter((f) => f.id !== id);
        reservas = updateDataReserva;
        localStorage.setItem('reservas', JSON.stringify(reservas));
        renderReservas(reservas);
        toast('success', 'Reserva eliminada');
    } else {
        toast('error', 'Error al cancelar');
    }
};

const renderReservas = (reservas) => {
    const containerReservas = document.querySelector('#dataReservas');
    containerReservas.innerHTML = '';

    if (reservas.length > 0) {
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
                        <p class="mb-3 font-normal text-gray-200">${
                            reserva.fecha
                        }</p>
                    </div>
                </div>
                <div class="flex justify-between">
                    <button onclick=updateReserva(${reserva.id}) type="button"
                        class="bg-green-400 text-center text-gray-700 font-bold rounded-bl-lg w-full hover:bg-green-500 ">
                        <span>ACTUALIZAR</span>
                    </button>
                    <button onclick=deleteReserva(${reserva.id}) type="button"
                        class="bg-red-400 text-center text-gray-700 font-bold rounded-br-lg w-full hover:bg-red-500 ">
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

    renderReservas(reservas);

    btnSearch.addEventListener('click', () => {
        if (inputSearch.value) {
            const searchQuery = inputSearch.value.toLowerCase();
            const filteredReservas = reservas.filter((reserva) => {
                return (
                    reserva.nombre.toLowerCase().includes(searchQuery) ||
                    reserva.apellido.toLowerCase().includes(searchQuery) ||
                    reserva.vehiculo.toLowerCase().includes(searchQuery) ||
                    reserva.fecha.includes(searchQuery) ||
                    reserva.monto.includes(searchQuery)
                );
            });

            console.log('Reservas filtradas:', filteredReservas);
            renderReservas(filteredReservas);
        } else {
            renderReservas(reservas);
        }
    });

    btnClear.addEventListener('click', () => {
        inputSearch.value = '';
        renderReservas(reservas);
    });
});
