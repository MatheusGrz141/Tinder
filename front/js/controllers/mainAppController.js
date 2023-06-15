class mainAppController{
    async init(){
        
        let Users= []
        Users=   await fetch('http://localhost:3000/users/get-accounts' ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        }
    })
    
    this.mainModel = await Users.json()  
    
    this.i = 0
    
    
    
    document.querySelector("#main").innerHTML = new mainAppView( this.mainModel[0]).template();
    await this.bind()
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
}
proximoCadastro(){
    this.i = (this.i + 1) % this.mainModel.length;
    
    document.querySelector("#main").innerHTML = new mainAppView( this.mainModel[this.i]).template();
    this.bind()
    
}
}
