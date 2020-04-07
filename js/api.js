
const api_key = 'vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv'

document.addEventListener('DOMContentLoaded', () => {
function apiCallSearch(query, limit, offset){
  fetch('http://api.giphy.com/v1/gifs/search?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&q=' + query + '&limit=' + limit + '&offset=' + offset)
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
  fetch('http://api.giphy.com/v1/gifs/random?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&tag=' + tag)
  .then((response) => {
      return response.json()
  }).then((json) => {
      setSrcGif(imgid, json.data.id)
    
  })
}

const container = document.getElementById("gifsBusqueda")

  document.querySelector(".vermas1").addEventListener("click", () => {
    url = `https://api.giphy.com/v1/gifs/search?api_key=vMCoYeAQt3J5o3NOBYrvuUxTTwn9AGmv&limit=12&q=`
    url += 'baby';
    fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data)
            console.log("META", content.meta)
            container.innerHTML = ''
            content.data.forEach(gif => {
                renderGif(gif)
            });

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

function renderGif(gif) {
  
  let fig = document.createElement('div')
  let img = document.createElement('img')
  let fc = document.createElement('figcaption')
  img.setAttribute("width", "270 ")
  img.setAttribute("height", "270")
  img.src = gif.images.downsized.url
  img.alt = gif.title
  fig.appendChild(img)
  fig.appendChild(fc)
  let container = document.getElementById("gifsBusqueda")

  container.appendChild(fig)

  img.className = "resultGif";

}
