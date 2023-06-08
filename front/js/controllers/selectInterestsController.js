class selectInterestsController{
    init(){
        document.querySelector("#main").innerHTML = new selectInterestsView().template();
        
        document.querySelector("#continue").addEventListener("click", ()=>{
            this.mainApp()
        })  
        document.querySelector(".skip").addEventListener('click', ()=>{
            new Navegacao().irParaLogin()
        })

        document.querySelector("#TurnBack").addEventListener('click', ()=>{
            new Navegacao().irParaSelectSex()
        })
        let buttons= document.querySelectorAll(".selectInterests");
        
        buttons.forEach((botao,index)=>{
            botao.addEventListener("click" , ()=>{
                this.changeSelect(index)
            })
        })
        
    }
    
    mainApp(){
        new Navegacao().irParaMainApp()
    }
    
    
    changeSelect(index){
        let buttons= document.querySelectorAll(".selectInterests");
        
        
        if(buttons[index].classList.contains("interests-options-select")) {
            buttons[index].classList.remove("interests-options-select") 
            buttons[index].classList.add("interests-options")
        } else{
            buttons[index].classList.remove("interests-options") 
            buttons[index].classList.add("interests-options-select")
        }
    }
}