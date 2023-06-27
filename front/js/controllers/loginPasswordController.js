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
        body: JSON.stringify(bodyData)}
        )  
        let tokenJson = await token.json();
        if(tokenJson){
            
            sessionStorage.setItem("token" ,tokenJson.token)
            

            
            new Navegacao().irParaMainApp() 
        }else{
            alert("senha incorreta")
          
            new Navegacao().irParaloginPassword()  
        }
   
    }
}