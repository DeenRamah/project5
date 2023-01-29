(function(){
    const buttons = document.querySelectorAll('.counterBtn')
    let start = 0


    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            if(button.classList.contains('prevBtn')){
                start--
            }
            else if(button.classList.contains('.nextBtn')){
                start++
            }

            const count = document.querySelector('#count')
            count.textContent = start

            if(start < 0){
                count.style.color ='aqua'
            }
            else if(start > 0){
                count.style.color = 'umber'
            }
            else{
                count.style.color = '#33333'
            }
        })
    })



})