(function () {
    
    var actualizarhora = function () {
        var fecha = new Date(),
            horas = fecha.getHours(), ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diasemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();
        
        // revisar algo por posible error
        
        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diasemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');
        
        // revisar si es pdiasemana o pDiaSemana
            
        var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diasemana];

        pDia.textContent = dia;
        

        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];
        
        pYear.textContent = year;

        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
    }
        
    if (horas == 0) {
        horas = 12;

        // Solo porque no le coloque la 
    };
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;


        if (minutos < 10) { minutos = "0" + minutos };
        if (segundos < 10) { segundos = "0" + segundos };
            

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
        
};

// JAJA bastante curioso lo que sucedio acá
    actualizarhora();
    var intervalo = setInterval(actualizarhora, 1000);
}())