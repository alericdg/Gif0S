document.addEventListener("DOMContentLoaded", init)


function init() {
    const bloque_resultados = document.querySelector('#div_busquedas')
    const container = document.getElementById("gifsBusqueda")
    const button_sugerido_uno = document.getElementById('button_busquedas1')
    const button_sugerido_dos = document.getElementById('button_busquedas2')
    const button_sugerido_tres = document.getElementById('button_busquedas3')



    const buscar_search = document.getElementById("rectangle-search")

    buscar_search.addEventListener("click", ev => {
        ev.preventDefault();
        let str = document.getElementById("input").value.trim();
        getGifs(str);

        bloque_resultados.style.display = 'block'


    })






    document.getElementById("input").addEventListener("keydown", () => {
        bloque_resultados.style.display = 'none'
    })
    document.getElementById("input").addEventListener("click", () => {
        bloque_resultados.style.display = 'none'
    })



    document.getElementById("input").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            buscar_search.click();
        }
    });


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
        container.appendChild(fig)

}

      input.addEventListener("keypress", ev => {

    buscar_search.setAttribute('style', 'background: #997D97',
            'border: 1px solid #110038',
            'box-shadow: inset -1px -1px 0 0 #997D97 inset 1px 1px 0 0 #FFFFFF')

        if (event.key === "Enter") {
            event.preventDefault();
            buscar_search.removeAttribute('style')
        }

    })




    button_busquedas1.addEventListener('click', () => {

        url = `https://api.giphy.com/v1/gifs/search?api_key=ov7ynlo25jnTdbgLfZKfNgzbBB77Tfzy&limit=12&q=`
        url += 'simpsons'

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
                console.error(err)
            })

            document.querySelector('.busquedas').style.display='none'


    })
    button_busquedas2.addEventListener('click', () => {

        url = `https://api.giphy.com/v1/gifs/search?api_key=ov7ynlo25jnTdbgLfZKfNgzbBB77Tfzy&limit=12&q=`
        url += 'seinfield'

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
                console.error(err)
            })

            document.querySelector('.busquedas').style.display='none'


    })
    button_busquedas3.addEventListener('click', () => {

        url = `https://api.giphy.com/v1/gifs/search?api_key=ov7ynlo25jnTdbgLfZKfNgzbBB77Tfzy&limit=12&q=`
        url += 'friends'

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
                console.error(err)
            })

            document.querySelector('.busquedas').style.display='none'

    })

    function getGifs(str) {
        let url = ''


        if (str) {


            url = `https://api.giphy.com/v1/gifs/search?api_key=ov7ynlo25jnTdbgLfZKfNgzbBB77Tfzy&limit=12&q=`
            url += str


        } else {
            // reemplaza con url ramdon
            url = `https://api.giphy.com/v1/gifs/trending?api_key=ov7ynlo25jnTdbgLfZKfNgzbBB77Tfzy&limit=12`;
        }
        fetch(url)
            .then(response => response.json())
            .then(content => {
                console.log(content.data)
                console.log("META", content.meta)

                container.innerHTML = ''
                content.data.forEach(gif => {


                    renderGif(gif)


                })

                document.querySelector("input").value = ""

            })
            .catch(err => {
                console.error(err)
            })
    }
}
