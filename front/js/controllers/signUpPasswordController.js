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
            this.finalizarConta()
            
        })
        
    }
    
    async finalizarConta(){
        
        
        let password = document.querySelector("#password").value;
        
        let bodyData= {
          
            password:password
        }
        await fetch("http://localhost:3000/users/update-account",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "token": sessionStorage.getItem("token")
        },
        body:JSON.stringify(bodyData)
    })
    
    
    
    new Navegacao().irParaMainApp();
}

}