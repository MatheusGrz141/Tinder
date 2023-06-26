class loginController{
    
    init(){
        document.querySelector("#main").innerHTML =new  inicioView().template()
        this.bind()
    }
    bind(){
        
        document.querySelector("#TurnBack").addEventListener('click',()=>{
            new Navegacao().irParaContinueToEmail()
        }) 
        document.querySelector("#continue").addEventListener("click",()=>{
            this.buscarEmail() 
        })
    }
    
    async buscarEmail(){
        let email= document.querySelector("#email").value
        
        if(!email){
            alert ("Digite um email antes de continuar")
            return
        }
      
        
        let existeEmail  =  await fetch(`http://localhost:3000/users/find-account?email=${email}`, {
        headers:  {"Content-Type": "application/json"},}
        )
        
        let existeEmailJson = await existeEmail.json()
        
        sessionStorage.setItem("emailCadastro" , email)
        
        if(existeEmailJson){
            sessionStorage.setItem("firstName" ,  existeEmailJson.firstName)
            sessionStorage.setItem("lastName" ,  existeEmailJson.lastName)
            sessionStorage.setItem("iconAvatar" ,  existeEmailJson.avatar)
            new Navegacao().irParaloginPassword();
            
        }else{
            alert("Email Não cadastrado , crie sua conta !")
            new Navegacao().irParaSignUp()
        } 
        
    }
    
}
