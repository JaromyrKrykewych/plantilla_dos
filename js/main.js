const openMenu = (e) => {
    const menu = e.target.parentNode.children[1]
    menu.classList.toggle('active')
    //console.log()
}

let animateDivOne = document.getElementById('animate-div-one')

const animating = (entradas, observador) => {
    entradas.forEach( (entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('animating')
        }
    })
}

const observador = new IntersectionObserver (animating, {
    root: null,
    rootMargin: '500px 0px 0px 0px',
    threshold: 0.5
})

observador.observe(animateDivOne)