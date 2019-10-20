  /* Details zu Allgemeine Checkliste holen */
  function allgemeinfunction() {
    var x = document.getElementById("detailallgemein");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      newFunction();
      x.style.display = "block";
    }
      /* Wenn schon andere Details angezeigt, diese nicht mehr anzeigen*/
      function newFunction() {
          document.getElementById("detailfruehling").style.display = "none";
          document.getElementById("detailsommer").style.display = "none";
          document.getElementById("detailherbst").style.display = "none";
          document.getElementById("detailwinter").style.display = "none";
      }
  }

/* ----------------------------------------------------------------------------- */

/* Details zu Fruehlings-Ferien holen */
  function fruehlingfunction() {
    var x = document.getElementById("detailfruehling");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      newFunction();
      x.style.display = "block";
    }
      /* Wenn schon andere Details angezeigt, diese nicht mehr anzeigen*/
      function newFunction() {
          document.getElementById("detailallgemein").style.display = "none";
          document.getElementById("detailsommer").style.display = "none";
          document.getElementById("detailherbst").style.display = "none";
          document.getElementById("detailwinter").style.display = "none";
      }
  }

/* ----------------------------------------------------------------------------- */

  /* Details zu Sommer-Ferien holen */
    function sommerfunction() {
    var x = document.getElementById("detailsommer");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      newFunction();
      x.style.display = "block";
    }
      /* Wenn schon andere Details angezeigt, diese nicht mehr anzeigen*/
      function newFunction() {
          document.getElementById("detailallgemein").style.display = "none";
          document.getElementById("detailfruehling").style.display = "none";
          document.getElementById("detailherbst").style.display = "none";
          document.getElementById("detailwinter").style.display = "none";
      }
  }
  
/* ----------------------------------------------------------------------------- */

  /* Details zu Herbst-Ferien holen */
    function herbstfunction() {
    var x = document.getElementById("detailherbst");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      newFunction();
      x.style.display = "block";
    }
      /* Wenn schon andere Details angezeigt, diese nicht mehr anzeigen*/
      function newFunction() {
          document.getElementById("detailallgemein").style.display = "none";
          document.getElementById("detailsommer").style.display = "none";
          document.getElementById("detailfruehling").style.display = "none";
          document.getElementById("detailwinter").style.display = "none";
      }
  }
  
/* ----------------------------------------------------------------------------- */

  /* Details zu Winter-Ferien holen */
    function winterfunction() {
    var x = document.getElementById("detailwinter");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      newFunction();
      x.style.display = "block";
    }
      /* Wenn schon andere Details angezeigt, diese nicht mehr anzeigen*/       
      function newFunction() {
          document.getElementById("detailallgemein").style.display = "none";
          document.getElementById("detailsommer").style.display = "none";
          document.getElementById("detailherbst").style.display = "none";
          document.getElementById("detailfruehling").style.display = "none";
      }
  }