class matchesController{
    async init(){
        
        await this.buscaOsMatchs();
        console.log("this.matchs ",this.matchs)
        
        
        document.querySelector("#main").innerHTML = new matchesView(this.matchs).template()
        this.bind()
    }
    bind(){
        
        document.querySelector("#home").addEventListener('click',()=>{
            new Navegacao().irParaMainApp();
        })
        document.querySelector("#iconProfile").addEventListener("click",()=>{
            
            new Navegacao().irParaProfile()
        })
        
    }
    async buscaOsMatchs(){
        let resposta = await fetch("http://localhost:3000/users/matchs" ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "token": sessionStorage.getItem("token")
        } })
        
        this.matchs = await resposta.json() 
        
       
        
    }
}