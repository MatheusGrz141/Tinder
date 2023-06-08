class inicioController{
    init(){
        document.querySelector("#main").innerHTML =new  inicioView().template()
        this.bind()
    }
    bind(){
        document.querySelector("#continue").addEventListener("click",()=>{
            this.buscarEmail()
            
        })
        document.querySelector("#TurnBack").addEventListener('click',()=>{
            new Navegacao().irParaLogin()
        })
    }
    
    
    async buscarEmail(){
        let email= document.querySelector("#email").value
        let bodyData = {
            email:email,
            
        };
        let sessao  =  await fetch("http://localhost:3000/users/find-account", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(bodyData)  
    }     ).catch((e)=>{
        console.log("erro no fetch: "+e)
    })
   
    let sessaoFeita = await sessao.json()
    
    if(sessaoFeita){
        new Navegacao().irParaMainApp();
    }else{
        new Navegacao().irParaSignUp(this.email)
    } 
    
}
}