class matchesController{
    async init(){
        
        await this.buscaOsMatchs();
        this.imgUserLogado = sessionStorage.getItem("iconAvatar");
        this.nome =sessionStorage.getItem("firstName");
        document.querySelector("#main").innerHTML = new matchesView(this.matchs, this.imgUserLogado ).template()
        this.bind()
    }
    bind(){
        
        document.querySelector("#home").addEventListener('click',()=>{
            new Navegacao().irParaMainApp();
        })
        document.querySelector("#iconProfile").addEventListener("click",()=>{
            
            new Navegacao().irParaProfile()
        })
        document.querySelectorAll(".heart").forEach((button)=>{
            button.addEventListener("click" ,(e)=>{
                
                let imgItsAMatch =  document.getElementById(e.target.dataset.index)
                sessionStorage.setItem("imgItsAMatch" ,imgItsAMatch.src ) 
                let id =  e.target.dataset.index
                this.removeMatch(id)
               
                new Navegacao().irParaItsAMAtch({imgItsAMatch: imgItsAMatch.src, imgUserLogado:this.imgUserLogado,nome:this.nome }) 
            })
        })
        document.querySelectorAll(".cross").forEach((button)=>{
            button.addEventListener("click" ,(e)=>{
                let id =  e.target.dataset.index
                this.removeMatch(id)
                new Navegacao().irParaMatches()
            })
        })
    }
    async buscaOsMatchs(){
      
        let resposta = await fetch("http://localhost:3000/users/matchs" ,{
        headers:{
            "Content-Type":"application/json",
            "token": sessionStorage.getItem("token")
        } })
        
        this.matchs = await resposta.json() 

    }
    async removeMatch(id){
        
        let bodyData={
            id ,
            
        }
        await fetch ("http://localhost:3000/users/remove-match" ,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            'token':sessionStorage.getItem("token")
        },
        body:JSON.stringify(bodyData)}
        )
        
    }
}    