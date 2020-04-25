const nightTheme = document.getElementById('nightTheme');
const removeNightTheme = document.getElementById('removeNightTheme');
const day = document.getElementById('day');

nightTheme.addEventListener('click', function (){
day.classList.add('dark');
});

removeNightTheme.addEventListener('click', function (){
day.classList.remove('dark');
});

function desplegar() {
    var x =    document.getElementById("desplegar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
