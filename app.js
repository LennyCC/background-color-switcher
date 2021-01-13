/*const buttons = document.querySelectorAll('.button')
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if(button.classList.contains('grey')){
                document.body.style.backgroundColor: grey
            }
            if(button.classList.contains('white')){
                background-color: white
            }
            if(button.classList.contains('blue')){
                background-color: blue
            }
            if(button.classList.contains('yellow')){
                background-color: yellow
            }
        })
    })*/
    const buttons = document.querySelectorAll('.button');
    const body = document.querySelector('body');
    
    buttons.forEach(addButtonListener);
    
    function addButtonListener(button) {
        button.addEventListener('click', (e) => {
    
            body.style.backgroundColor = e.target.id
            //body.style.backgroundColor = e.target.backgroundColor
            
        })
    }