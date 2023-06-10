class passwordController{
    init(){
        document.querySelector("#main").innerHTML =new  passwordView().template()
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
           email: sessionStorage.getItem("emailCadastro"),
            password:password
        }
        await fetch("http://localhost:3000/users/update-account",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(bodyData)
    })
    
    
    
    new Navegacao().irParaMainApp();
}

}