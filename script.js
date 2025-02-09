function evaluarDepresion() {
    let total = 0;
    for (let i = 1; i <= 20; i++) {
        const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
        if (respuesta) {
            total += parseInt(respuesta.value);
        }
    }

    let resultado = "";
    if (total <= 10) {
        resultado = "Tu nivel de depresión es bajo. Sin embargo, si te sientes mal, no dudes en contactarnos.";
    } else if (total <= 20) {
        resultado = "Tu nivel de depresión es moderado. Te recomendamos buscar ayuda profesional.";
    } else {
        resultado = "Tu nivel de depresión es alto. Por favor, contacta a un profesional lo antes posible.";
    }

    document.getElementById("resultado").innerText = resultado;
}

document.getElementById("form-contacto").addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const celular = document.getElementById("celular").value;

    // Simulación de envío de correo
    const mensaje = `Nombre: ${nombre}\nCorreo: ${correo}\nCelular: ${celular}`;
    alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.\n\n" + mensaje);

    // Limpiar el formulario
    document.getElementById("form-contacto").reset();
});