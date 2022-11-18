window.onload = function() {
    var minutos = 00;
    var segundos = 00;
    var decimas = 00;

    var appendMinutos = document.getElementById("minutos");
    var appendSegundos = document.getElementById("segundos");
    var appendDecimas = document.getElementById("decimas");

    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    var Interval;

    buttonStart.onclick = function() {
    clearInterval(Interval); 
    // quando carregamos no botao de start 
    // função set interval , chama a funçao startTimer a cada 10 milisegundos (que equivale a 0.01 segundos)
   
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
       
     clearInterval(Interval);
    }

    buttonReset.onclick = function() {
        clearInterval(Interval);
    minutos = "00";
    segundos = "00";
  	decimas = "00";
    appendDecimas.innerHTML = decimas;
  	appendSegundos.innerHTML = segundos;
    appendMinutos.innerHTML = minutos;
    }

    function startTimer() {
        decimas++; 
        if(decimas <= 9){
            appendDecimas.innerHTML = "0" + decimas;
        }

        if(decimas > 9){
            appendDecimas.innerHTML =  decimas;
        }

        if(decimas > 99){
            segundos++;
            appendSegundos.innerHTML = "0" + segundos;
            decimas = 0;
            appendDecimas.innerHTML = "0" + 0;
        }

        if(segundos > 9){
            appendSegundos.innerHTML = segundos;
        }

        if(segundos > 59){
            minutos++;
            appendMinutos.innerHTML = "0" + minutos;
            decimas = 0;
            segundos = 0;
            appendDecimas.innerHTML = "0" + 0;
            appendSegundos.innerHTML = "0" + 0;
        }
        if(minutos > 9){
            appendMinutos.innerHTML = minutos;
        }
    }
}