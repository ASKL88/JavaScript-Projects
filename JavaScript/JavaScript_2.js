function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
      alert("Please fill out your name and number");
      return false;
    }
  }