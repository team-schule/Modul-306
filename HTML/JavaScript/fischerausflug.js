//
// Scripts für Zielfisch Hecht
//

// JavaScript Hechtbild
function hechtdivfunction() {
    var x = document.getElementById("hechtdiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
// JavaScript Hecht Bottons
  function rutefunction() {
    var x = document.getElementById("hechtrute");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function rollefunction() {
    var x = document.getElementById("hechtrolle");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function schnurfunction() {
    var x = document.getElementById("hechtschnur");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function vorfachfunction() {
    var x = document.getElementById("hechtvorfach");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function hackenfunction() {
    var x = document.getElementById("hechthacken");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function koederfunction() {
    var x = document.getElementById("hechtkoeder");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function zubehoerfunction() {
    var x = document.getElementById("hechtzubehoer");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  //
  // Scripts für den Zielfisch Karpfe
  //

  // Karpfenbild
  function karpfendivfunction() {
    var x = document.getElementById("karpfendiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function karpfenrutefunction() {
    var x = document.getElementById("karpfenrute");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function karpfenrollefunction() {
    var x = document.getElementById("karpfenrolle");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function karpfenschnurfunction() {
    var x = document.getElementById("karpfenschnur");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function karpfenvorfachfunction() {
    var x = document.getElementById("karpfenvorfach");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function karpfenkoederfunction() {
    var x = document.getElementById("karpfenkoeder");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function karpfenzubehoerfunction() {
    var x = document.getElementById("karpfenzubehoer");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

//
// Scripts on Page Load
//
// Text animation
window.onload = function start() {
  var string = "Wähle deinen Zielfisch";
  var str = string.split("");
  var el = document.getElementById('str2');
  (function animate() {
  str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
  var running = setTimeout(animate, 150);
  setTimeout(color,4500);
  setTimeout(bild,5500);
  setTimeout(bild2,6500);
  })();
  };
 
  // Wechselt die H2 überschrift von Schwarz nach Grün plus Schriftgrösse auf 2.5 em
  function color(){
    var element = document.getElementById('str2');
    element.style.color = 'green';
    element.style.fontSize = '2.5em';
  }
  // Zeigt das Hechrbild nach 5.5 Sekunden an 
  function bild(){
    document.getElementById('hechtbild').style.display = 'block';
  }
  // Zeigt das Karpfenbild nach 6.5 Sekunden an
  function bild2(){
    document.getElementById('karpfenbild').style.display = 'block';
  }