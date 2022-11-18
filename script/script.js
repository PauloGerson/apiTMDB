const constainer = document.querySelector('.container');
const linkCategoria = document.querySelector(".action")
const categoriaLink = [];
 linkCategoria.addEventListener('click', categoria => {
    categoria.preventDefault()
     categoriaLink.push =  linkCategoria.childNodes[0].nodeValue
     
})


//console.log(constainer)
const films  = [];

function criarImg(imgs,spans){
    const img = document.createElement('img')
    const span = document.createElement('span')
    const divImg = document.createElement('div');
    divImg.setAttribute('class','divImg')
    img.setAttribute('src', imgs)
    img.setAttribute('class', 'poster-img')
    span.innerHTML = spans
    divImg.append(img)
    divImg.append(span)
    constainer.append(divImg)
    
}

//aumentar time de resposta.
const urlImg = `https://image.tmdb.org/t/p/w500`
const apiKey = `cb4c98f66e1274d26140dd09a17f7a97`;

const urlApi = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then( (resolve) => resolve.json())
    .then((data) => {
        films.push(data.results);
        films.map((el) => {
            console.log(el)
            for(let img of el){
                console.log(`${urlImg}${img.poster_path}`)
                criarImg(`${urlImg}${img.poster_path}`, img.title)
            }
        })
    })

    

