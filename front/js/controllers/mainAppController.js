class mainAppController{
    async init(){
        this.index = 0
        this.users= []
        await this.fetchUsers();    
        this.mainModel = await this.users.json()   
        this.imgUserLogado = sessionStorage.getItem("iconAvatar");
     
        document.querySelector("#main").innerHTML = new  mainAppView(this.mainModel[0],this.imgUserLogado).template();
        this.bind()
    }
    bind(){
        
        if(this.mainModel.length >0){
            
            document.querySelector('.cross').addEventListener('click',(e)=>{
                let userId = e.target.dataset.userid ;
                this.clickCross(userId)
                this.proximoCadastro()
            })
            document.querySelector(".heart").addEventListener("click",  (e)=>{
                
                let userId = e.target.dataset.userid ;
                
                this.clickMatch(userId) 
                this.proximoCadastro()  
            })
        } 
        document.querySelector("#matches").addEventListener('click', ()=>{
            new Navegacao().irParaMatches()
        })
        document.querySelector("#iconProfile").addEventListener("click",()=>{
            new Navegacao().irParaProfile()
        }) 
        document.querySelector(".skip").addEventListener("click",()=>{ 
            new Navegacao().irParaProfile()
        })
        document.querySelector("#TurnBack").addEventListener('click',()=>{
            new Navegacao().irParaInicio(); 
        })  
    }
    
    async fetchUsers(){
        this.users =   await fetch('http://localhost:3000/users/get-accounts' ,{
        
        headers:{
            "Content-Type":"application/json",
            "token": sessionStorage.getItem("token")}
        })
    }
    async clickMatch(id){
        this.removerPerfil(id)
        
        await fetch(`http://localhost:3000/users/match?id=${id}` , {
        method:"POST",
        headers:{
            "Content-Type":"application/json" ,
            "token":sessionStorage.getItem("token")
        }
    }) 
    
}
async clickCross(id){
    this.removerPerfil(id)
    
    await fetch (`http://localhost:3000/users/cross?id=${id}` ,{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        'token':sessionStorage.getItem("token")
    }
})

}
async proximoCadastro(){
    
    this.index = (this.index + 1) % this.mainModel.length;
    document.querySelector("#main").innerHTML = await new mainAppView( this.mainModel[this.index] ,this.imgUserLogado).template();
    this.bind()
    
}
removerPerfil(id){
    this.mainModel.forEach((element,index) => {
        if(element.id ==id){
            this.mainModel.splice(index ,1)  
        }
    });   
}
}
