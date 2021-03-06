var tot = document.getElementById("tot"),
  burgerName = document.getElementById("input__name"),
  ingredientValue = document.getElementsByClassName("ingredient"),
  coupon = document.getElementById("input__discount"),
  finalPrice = document.getElementById("total"),
  coupons = ["samuele10", "8march", "boolean10"];


tot.addEventListener("click",
  function() {
    if (burgerName.value != "") {
      var tot = 50;
      for (var i = 0; i < ingredientValue.length; i++) {
        if (ingredientValue[i].checked) {
          tot += parseInt(ingredientValue[i].value);
        }
      }
      if (document.getElementById("input__discount").value == "8march") {
        tot -= tot * 0.2;
      } else if (coupons.includes(coupon.value)) {
        tot -= tot * 0.1;
      }
      finalPrice.innerHTML = "$ " + tot;
    } else {
      alert("Insert your burger name first!");
    }
  }
);
