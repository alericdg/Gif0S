const api_key = 'vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv'

document.addEventListener('DOMContentLoaded', () => {
function apiCallSearch(query, limit, offset){
  fetch('https://api.giphy.com/v1/gifs/search?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&q=' + query + '&limit=' + limit + '&offset=' + offset)
  .then((response) => {
          return response.json();
      })
  .then((myApiResponse) => {
      myApiResponse.data.forEach(element => {
          console.log(element);
      });
  });
}

function setSrcGif(imgid, gifid) {
  document.getElementById(imgid).src = 'https://i.giphy.com/media/' + gifid + '/giphy.webp'
}

function gifRandom(tag, imgid){
  fetch('https://api.giphy.com/v1/gifs/random?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&tag=' + tag)
  .then((response) => {
      return response.json()
  }).then((json) => {
      setSrcGif(imgid, json.data.id)

  })
}
  const container = document.getElementById("gifsBusqueda")

  document.querySelector(".vermas1").addEventListener("click", () => {
    url = `https://?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&limit=12&q=`
    url += 'random';
    fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data)
            console.log("META", content.meta)
            container.innerHTML = ''
            content.data.forEach(gif => {
                renderGif(gif)
            });
          
  document.getElementById('resultado').innerHTML= "baby"


        })
        .catch(err => {
            console.error(err);
        });

    })

    document.querySelector(".vermas2").addEventListener("click", () => {
    url = `https://api.giphy.com/v1/gifs/search?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&limit=12&q=`
    url += 'kitten';
    fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data)
            console.log("META", content.meta)
            container.innerHTML = ''
            content.data.forEach(gif => {
                renderGif(gif)
            });
            document.getElementById('resultado').innerHTML= "kitten"

        })
        .catch(err => {
            console.error(err);
        });

    })
    document.querySelector(".vermas3").addEventListener("click", () => {
      url = `https://api.giphy.com/v1/gifs/search?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&limit=12&q=`
    url += 'mood';
    fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data)
            console.log("META", content.meta)
            container.innerHTML = ''
            content.data.forEach(gif => {
                renderGif(gif)
            });
            document.getElementById('resultado').innerHTML= "mood"

        })
        .catch(err => {
            console.error(err);
        });

    })
    document.querySelector(".vermas4").addEventListener("click", () => {
      url = `https://api.giphy.com/v1/gifs/search?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&limit=12&q=`
    url += 'shocked';
    fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data)
            console.log("META", content.meta)
            container.innerHTML = ''
            content.data.forEach(gif => {
                renderGif(gif)
            });
            document.getElementById('resultado').innerHTML= "shocked"

        })
        .catch(err => {
            console.error(err);
        });

    })

gifRandom('baby', 'Gif01')
gifRandom('kitten', 'Gif02')
gifRandom('mood', 'Gif03')
gifRandom('shocked', 'Gif04')
})

document.addEventListener('DOMContentLoaded', init)
function init() {
  let trend = `https://api.giphy.com/v1/gifs/trending?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&limit=12&rating=G`
  fetch(trend)
      .then(response => response.json())
      .catch((error) => {
        return error
      })
      .then(content => {
        console.log(content.data)
        console.log('META', content.meta)

        content.data.forEach(gif => {
          renderGif(gif)
      })

  document.getElementById('rectangle-search').addEventListener('click', ev => {
    ev.preventDefault()
  
    let url = `https://api.giphy.com/v1/gifs/search?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&limit=12&q=`
    let str = document.getElementById('input').value.trim()
    url = url.concat(str)
    fetch(url)
      .then(response => response.json())
      .catch((error) => {
        return error
      })
      .then(content => {

        content.data.forEach(gif => {
          renderGif(gif)

      })

        document.getElementById('input').value = ''
  })

  document.getElementById("gifsBusqueda").innerHTML =''
  document.getElementById('resultado').innerHTML=str
})
})
}

function renderGif(gif) {

  let fig = document.createElement('div')
  let img = document.createElement('img')
  let fc = document.createElement('figcaption')
  img.setAttribute("width", "270 ")
  img.setAttribute("height", "270")
  img.src = gif.images.downsized.url
  fig.appendChild(img)
  fig.appendChild(fc)
  let text = document.createTextNode(gif.title)
  let container = document.getElementById("gifsBusqueda")

  container.appendChild(fig)
  fc.appendChild(text)
  fc.classList.add("result-gif")
  fig.classList.add("cuadrado")
}

// Get the input field
var input = document.getElementById("input");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(ev) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("rectangle-search").click();
  }
});