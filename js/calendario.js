document.addEventListener('DOMContentLoaded', () => {
    let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

    const eventos = reservas.map((reserva) => ({
        title: `${reserva.nombre} ${reserva.apellido} (${reserva.vehiculo})`,
        start: reserva.fechaInicio,
        end: reserva.fechaFin,
    }));

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: eventos,
        dayMaxEvents: 1,
        locale: 'es',
        customButtons: {
            todayButton: {
                text: 'Hoy',
                click: function () {
                    calendar.today();
                },
            },
        },
        headerToolbar: {
            left: 'prev,next',
            center: 'title',
            right: 'todayButton',
        },
        moreLinkContent: 'Ver más',
        moreLinkClickHandler: function (info) {},
    });
    calendar.render();
});
