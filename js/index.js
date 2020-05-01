function init() {
    const bloque_resultados = document.querySelector('#div_busquedas')
    const container = document.getElementById("gifsBusqueda")

    document.getElementById("rectangle-search").addEventListener("click", buscar_search);
    function buscar_search() {
        document.getElementById("input").value.trim();

        bloque_resultados.style.display = 'block'
    }

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
