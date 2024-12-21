const king = document.querySelector('.king'),
              squares = document.querySelectorAll('.square'),
              info = document.querySelector('p');
        
        let beingDragged;

        king.addEventListener('drag', (e)=>{
            beingDragged = e.target;
            info.textContent = `${e.target.classList} is being dragged...`
        })

        king,addEventListener('dragend', (e)=>{
            info.textContent = `${e.target.classList} has been dropped`
        })
        
        squares.forEach(square =>{
            square.addEventListener('dragover', (e)=>{
                e.preventDefault()
            });
            square.addEventListener('dragenter', ()=>{
                square.classList.add('highlight')
            })
            square.addEventListener('dragleave', ()=>{
                square.classList.remove('highlight')
                square.classList.remove('target')
            })
            square.addEventListener('drop', (e)=>{
                e.target.append(beingDragged)
                square.classList.remove('highlight')
                square.classList.add('target')
                setTimeout(() => {
                square.classList.remove('target')
                }, 700);
            });
        })



// A mini darg drop project using a chess peice and 3 boxes