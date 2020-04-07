const nightTheme = document.getElementById('nightTheme');
const removeNightTheme = document.getElementById('removeNightTheme');
const day = document.getElementById('day');

/* if (selectedTheme.className.includes("nightTheme")) {
  .navbar__brand-container.src = "./assets/gifOF_logo.png";
} else if (selectedTheme.className.includes("removeNightTheme")) {
  .navbar__brand-container.src = "./assets/gifOF_logo_dark.png";
} */

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

/*   applyTheme: selectedTheme => {
    const $S_SPAN_DAY = document.querySelector("#day-theme");
    const $S_SPAN_NIGHT = document.querySelector("#night-theme");
    const $GIFOS_LOGO = document.querySelector("#gifos-img");
    if (selectedTheme.className.includes("theme-day")) {
      $S_SPAN_DAY.className = "underlined";
      $S_SPAN_NIGHT.classList.remove("underlined");
      $GIFOS_LOGO.src = "./assets/gifOF_logo.png";
    } else if (selectedTheme.className.includes("theme-night")) {
      $S_SPAN_NIGHT.className = "underlined";
      $S_SPAN_DAY.classList.remove("underlined");
      $GIFOS_LOGO.src = "./assets/gifOF_logo_dark.png";
    }
  }, */