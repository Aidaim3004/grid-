const squares = document.querySelectorAll('.square')

squares.forEach((square) =>{
    square.addEventListener('click', () =>{
        if(Array.from(square.classList).includes('darken')){
            square.classList.remove('darken')
        } else {

            squares.forEach((item) => {
                item.classList.remove('darken')
            })
            square.classList.add('darken')
        }
    })
})