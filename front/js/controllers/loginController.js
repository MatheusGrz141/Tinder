
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
        let bodyData = {
            email:email,
        };
        
        let existeEmail  =  await fetch("http://localhost:3000/users/find-account", {
        method:"POST",
        headers:  {"Content-Type": "application/json"},
        body:JSON.stringify(bodyData)  
        
    })
    console.log(existeEmail)
    
    let existeEmailJson = await existeEmail.json()
    
    sessionStorage.setItem("emailCadastro" , email)
    
    if(existeEmailJson){
        new Navegacao().irParaloginPassword();
        
    }else{
        alert("Email Não cadastrado , crie sua conta !")
        new Navegacao().irParaSignUp()
    } 
    
}


   
}
