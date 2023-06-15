class continueToEmailController{
    
    init(){
        document.querySelector("#main").innerHTML =new  continueToEmailView().template()
        this.bind()
    }
    bind(){
        
        document.querySelector("#TurnBack").addEventListener('click',()=>{
            new Navegacao().irParaInicio()
        }) 
        document.querySelector("#continue").addEventListener("click",()=>{
            new Navegacao().irParaLogin()
            
        })
    }
}