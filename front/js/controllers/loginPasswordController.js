class loginPasswordController{
    init(){
        
        document.querySelector("#main").innerHTML = new loginPasswordView().template()
        this.bind()
    }
    
    bind(){
        document.querySelector("#continue").addEventListener("click" , ()=>{
            this.fazerLogin()
        })
    }
    async fazerLogin(){
        let email = sessionStorage.getItem("emailCadastro")
        let password =   document.querySelector("#password").value;
        
        let bodyData  = {
            email:email,
            password:password
        }
        
        let token =  await fetch("http://localhost:3000/users/sign-in",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(bodyData)
        
        
    })  
    let token2 = await token.json();
    if(token2){
        
        sessionStorage.setItem("token" ,token2.token)
        
        console.log("logou")
        
        new Navegacao().irParaMainApp() 
    }else{
        alert("senha incorreta")
        console.log("erro na senha")
        new Navegacao().irParaloginPassword()  
    }
    ; 
    
    
    
    
    
    
    
    
    
}
}