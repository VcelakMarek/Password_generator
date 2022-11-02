document.getElementById("password-length-range").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #A4FFAF 0% ' + value + '%,  ' + value + '%, #18171F 100%)'
  };