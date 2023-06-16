class mainAppController{
    async init(){
        
        this.users= []
        await this.fetchUsers();    
        this.mainModel = await this.users.json()  
        this.index = 0
        
        
        
        document.querySelector("#main").innerHTML = await new mainAppView( this.mainModel[0]).template();
        this.bind()
    }
    
    bind(){
        
        document.querySelector("#matches").addEventListener('click', ()=>{
            new Navegacao().irParaMatches()
        })
        document.querySelector('.interaction').addEventListener('click',()=>{
            this.proximoCadastro()
        }) 
        document.querySelector(".heart").addEventListener("click",  (e)=>{
            let userId = e.target.dataset.userid;
            console.log(userId)
            /*  this.clickMatch(userId) */
            /*  this.proximoCadastro()  */
        })
        document.querySelector("#iconProfile").addEventListener("click",()=>{
            
            new Navegacao().irParaProfile()
        })
        document.querySelector(".skip").addEventListener("click",()=>{
            
            new Navegacao().irParaProfile()
        })
        document.querySelector("#TurnBack").addEventListener('click',()=>{s
            new Navegacao().irParaInicio();
            
        })
        
    }
    
    async fetchUsers(){
        this.users =   await fetch('http://localhost:3000/users/get-accounts' ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "token": sessionStorage.getItem("token")
        }
    })}
    async clickMatch(){
        
        /*  let user = document.querySelector("data-id")
        await fetch("http://localhost:3000/users/match" , {
        method:"POST",
        headers:{
            "Content-Type":"application/json" ,
            "token":sessionStorage.getItem("token")
        },
        
    }) */
    
}
async proximoCadastro(){
    this.index = (this.index + 1) % this.mainModel.length;
    
    
    document.querySelector("#main").innerHTML = await new mainAppView( this.mainModel[this.index]).template();
    this.bind()
    
}
}
