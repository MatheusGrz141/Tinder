
class profileController{
    constructor(model){
        this.model = model
    }
    init(){
        
        document.querySelector("#main").innerHTML =  new profileView(this.model).template()
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
        console.log(sessionStorage.getItem('token'))
       let token = sessionStorage.getItem('token')
        let bodyData ={
            token
        }
        await fetch("http://localhost:3000/users/delete-account" ,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(bodyData) 
        
    }).then(()=>{
        alert("Conta deletada Com sucesso !!!")
        new Navegacao().irParaInicio()
    })
}

}