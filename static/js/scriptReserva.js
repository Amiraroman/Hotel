function editarCliente(idReserva, fechaReserva, fechaLlegada, fechaSalida, estadoReserva, idCliente, idHabitacion) {
    document.getElementById('editarIdReserva').value = idReserva;
    document.getElementById('editarFechaReserva').value = fechaReserva;
    document.getElementById('editarFechaLlegada').value = fechaLlegada;
    document.getElementById('editarFechaSalida').value = fechaSalida;
    document.getElementById('editarEstadoReserva').value = estadoReserva;
    document.getElementById('editarIdCliente').value = idCliente;
    document.getElementById('editarIdHabitacion').value = idHabitacion;
    document.getElementById('editarReservaForm').action = '/reserva/editar/' + idReserva;
    var modal = new bootstrap.Modal(document.getElementById('modalEditarReserva'));
    modal.show();
}
