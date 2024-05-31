let string = " " ;
let buttons = document.querySelectorAll('.button') ;
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            if(string.includes('%')){
                string = string.replace('%','*') ;
                string = `(${string}) / 100` ;
                console.log(string) ;
            }
            string = eval(string) ;
            document.querySelector('input').value = string ;
        }
        else if(e.target.innerHTML == 'AC'){
            string = " " ;
            document.querySelector('input').value = string ;
        }
        // else if(e.target.innerHTML == '%'){
        //     string ="" ;
        //     document.querySelector('input').value = string ;
        // }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML ;
            document.querySelector('input').value = string ;
        }
    })
})
