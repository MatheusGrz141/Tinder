class signUpPasswordController{
    init(){
        document.querySelector("#main").innerHTML =new  signUpPasswordView().template()
        this.bind()
    }
    bind(){
        
        document.querySelector("#TurnBack").addEventListener('click',()=>{
            new Navegacao().irParaLogin()
        }) 
        document.querySelector("#continue").addEventListener("click",()=>{
 
             alert("sign up password ")
        })
        
    }

}

