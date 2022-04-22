let rasp                   = ['b', 'c', 'c', 'c', 'a'];
let nota                   = 0;
let raspunsUtilizator      = new Array;

function verifica(intrebare, raspuns) { 
  raspunsUtilizator[intrebare] = raspuns;
  console.log(raspuns); 
}

function refresh() {
  raspunsUtilizator = new Array;
  rasp = ['b', 'c', 'c', 'c', 'a'];
  nota = 0;
  location.reload();
}

function eval() {
  for(i=0;i<=4;i++) {
    if(!raspunsUtilizator[i]) {
        alert("Nu ai raspuns la intrebarea #" + i);
        return refresh();
    }
    if(rasp[i] === raspunsUtilizator[i]) nota += 2;
  }
  if(nota === 0) return document.getElementById("quiz").innerHTML = `<br><br><br><h3>Din pacate ai ales raspunsul gresit pentru fiecare intrebare.</h3><br><button class="button" onclick="refresh()">Reincarca</button>`;
  document.getElementById("quiz").innerHTML = "<br><br><br><h3>Felicitari! Ai finalizat testul, iar nota ta este: " + nota + `.</h3><br><button class="button" onclick="refresh()">Reincarca</button>`;
  /*alert("Nota ta de astăzi este: " + nota);
  refresh();*/
}