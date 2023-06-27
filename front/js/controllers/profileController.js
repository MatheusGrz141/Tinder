class profileController{
    init(){
        this.imgUserLogado ={
            avatar:sessionStorage.getItem("iconAvatar"),
            firstName:sessionStorage.getItem("firstName") ,
            lastName:sessionStorage.getItem("lastName")
        } 
        document.querySelector("#main").innerHTML =  new profileView(this.imgUserLogado).template()
        this.bind()
    }
    bind(){
        document.querySelector("#TurnBack").addEventListener('click', ()=>{
            new Navegacao().irParaMainApp()
        })
        document.querySelector("#deleteAccount").addEventListener("click" ,()=>{
            this.deletarConta();
        })
    }
    async deletarConta(){
        
        let token = sessionStorage.getItem('token')
        let bodyData ={
            token
        }
        await fetch("http://localhost:3000/users/delete-account" ,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            "token":sessionStorage.getItem("token")
        },
        body: JSON.stringify(bodyData) 
        
    }).then(()=>{
        alert("Conta deletada Com sucesso !!!")
        new Navegacao().irParaInicio()}
        )
    }
    
}