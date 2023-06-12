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
        
        let password =   document.querySelector("#password").value;
        let email = localStorage.getItem("emailCadastro")
        let bodyData  = {
            email:email,
            password:password
        }
        
        let token=  await fetch("http://localhost:3000/users/sign-in",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            token: sessionStorage.getItem("token")
        },
        body: JSON.stringify(bodyData)
        
        
    }).catch(()=>{
        
        alert("senha incorreta")
        new Navegacao().irParaloginPassword(); 
    })
    let token2 = await token.json();
    sessionStorage.setItem("token" ,token2)
    
    console.log("logou")
    
    new Navegacao().irParaMainApp()  
    
    
    
    
    
    
    
}
}