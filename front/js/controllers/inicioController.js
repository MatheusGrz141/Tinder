class inicioController{
    init(){
        document.querySelector("#main").innerHTML =new  inicioView().template()
        this.bind()
    }
    bind(){
     
        document.querySelector("#TurnBack").addEventListener('click',()=>{
            new Navegacao().irParaLogin()
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
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(bodyData)  
    }).catch((e)=>{
        console.log("erro no fetch: "+e)
    })
    
    let existeEmailJson = await existeEmail.json()
    
    if(existeEmailJson){
        new Navegacao().irParaMainApp();
    }else{
        alert("Email Não cadastrado , crie sua conta !")
        sessionStorage.setItem("emailCadastro" , email)
        new Navegacao().irParaSignUp()
    } 
    
}
}