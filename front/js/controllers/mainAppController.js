class mainAppController{
    async init(){
        
        this.users= []
        await this.fetchUsers();    
        this.mainModel = await this.users.json()  
        
        this.index = 0
        
        
        
        document.querySelector("#main").innerHTML = new mainAppView( this.mainModel[0]).template();
        this.bind()
    }
    
    bind(){
        
        document.querySelector("#matches").addEventListener('click', ()=>{
            new Navegacao().irParaMatches()
        })
        document.querySelector('.interaction').addEventListener('click',()=>{
            this.proximoCadastro()
        }) 
        document.querySelector(".heart").addEventListener("click",()=>{
            this.proximoCadastro()
        })
        document.querySelector("#iconProfile").addEventListener("click",()=>{
          
            new Navegacao().irParaProfile()
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
    
    proximoCadastro(){
        this.index = (this.index + 1) % this.mainModel.length;
        
        
        document.querySelector("#main").innerHTML = new mainAppView( this.mainModel[this.index]).template();
        this.bind()
        
    }
}
