class mainAppController{
    async init(){
        this.index = 0
        this.users= []
        await this.fetchUsers();    
        this.mainModel = await this.users.json()   
        document.querySelector("#main").innerHTML =  await new  mainAppView( this.mainModel[0]).template();
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
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "token": sessionStorage.getItem("token")}
        })
    }
    async clickMatch(id){
        
        let bodyData ={
            id:id
        }
        
        await fetch("http://localhost:3000/users/match" , {
        method:"POST",
        headers:{
            "Content-Type":"application/json" ,
            "token":sessionStorage.getItem("token")
        },
        body:JSON.stringify(bodyData)}
        ) 
        
    }
    async clickCross(id){
        let indexAchado ;
        this.mainModel.forEach((element,index) => {
            if(element.id ==id){
                indexAchado = index;
                
            }
        }); 
        this.mainModel.splice(indexAchado ,1)
        console.log("Achou " ,indexAchado )
        let bodyData = {
            id,
            
        }
        await fetch ("http://localhost:3000/users/cross" ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            'token':sessionStorage.getItem("token")
        },
        body:JSON.stringify(bodyData)}).catch((err)=>{
            console.log("erro ao clicar no X ",err)
        })
    }
    async proximoCadastro(){
        
        this.index = (this.index + 1) % this.mainModel.length;
        document.querySelector("#main").innerHTML = await new mainAppView( this.mainModel[this.index]).template();
        this.bind()
        
    }
}
