class selectSexController{
    init(){
        document.querySelector("#main").innerHTML = new selectSexView().template()
        
        document.querySelector("#continue").addEventListener("click" , ()=>{
            this.selectInterests()
        })
        document.querySelector(".skip").addEventListener('click', ()=>{
            new Navegacao().irParaLogin()
        })
        document.querySelector("#TurnBack").addEventListener('click', ()=>{
            new Navegacao().irParaSignUp()
        })
        
        let buttons= document.querySelectorAll(".secundary-buttons");
        
        buttons.forEach((botao,index)=>{
            botao.addEventListener("click" , ()=>{
                this.changeSelect(index)
            })
        })
    }
    selectInterests(){
        new Navegacao().irParaSelectInterests();
    }
    changeSelect(index){
        let buttons= document.querySelectorAll(".selectSex");
        buttons.forEach((botao)=>{
            if(botao.classList.contains("principal-buttons")) {
                botao.classList.remove("principal-buttons") 
                botao.classList.add("secundary-buttons")
            }
            
            
        })
        
        if(buttons[index].classList.contains("principal-buttons")) {
            buttons[index].classList.remove("principal-buttons") 
            buttons[index].classList.add("secundary-buttons")
        } else{
            buttons[index].classList.remove("secundary-buttons") 
            buttons[index].classList.add("principal-buttons")
        }
        
        
        
        
        
        
        
    }
}