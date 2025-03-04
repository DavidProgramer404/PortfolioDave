function actualizarRelojDigital() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');
    document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos}`;
}
setInterval(actualizarRelojDigital, 1000);
actualizarRelojDigital();