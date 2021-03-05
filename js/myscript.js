var tot = document.getElementById("tot"),
  burgerName = document.getElementById("input__name");


tot.addEventListener("click",
  function() {

    if (burgerName.value != "") {

    } else {
      alert("Inserisci il nome del panino");
    }
  }
);
