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
        document.querySelectorAll(".heart").forEach((button)=>{
            button.addEventListener("click" ,(e)=>{
                
                
                let imgItsAMatch =  document.getElementById(e.target.dataset.index)
                console.log( imgItsAMatch.src)
                sessionStorage.setItem("imgItsAMatch" ,imgItsAMatch.src ) 
                new Navegacao().irParaItsAMAtch() 
            })
        })
        document.querySelectorAll(".cross").forEach((button)=>{
            button.addEventListener("click" ,(e)=>{
                
                
                let id =  e.target.dataset.index
                console.log(id)
                this.clickCross(id)
                /* new Navegacao().irParaMatches()   */
            })
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
    async clickCross(id){
       
        let bodyData={
            id
        }
        await fetch ("http://localhost:3000/users/cross" ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            token:sessionStorage.getItem("token")
        },
        body:JSON.stringify(bodyData)
    }).then(()=>{
        
        console.log("deu certo em clicar no X e adicionar o cabra no Array")
    }).catch((err)=>{
        console.log("erro ",err)
    })
}
}