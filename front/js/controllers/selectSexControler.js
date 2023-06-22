class selectSexController{
    init(){
        console.log("Entrou no select SEx controller token: "+sessionStorage.getItem("token"))
        document.querySelector("#main").innerHTML = new selectSexView().template()
        
        document.querySelector("#continue").addEventListener("click" , ()=>{
            this.selectInterests()
        })
        document.querySelector(".skip").addEventListener('click', ()=>{
            new Navegacao().irParaLogin()
        })
        document.querySelector("#TurnBack").addEventListener('click', ()=>{
            new Navegacao().irParaSignUp()
        })
        
        let buttons= document.querySelectorAll(".secundary-buttons");
        
        buttons.forEach((botao,index)=>{
            botao.addEventListener("click" , ()=>{
                this.changeSelect(index)
            })
        })
    }
    async selectInterests(){
        
        let iAm = document.querySelector(".principal-buttons ").value;
        if(!iAm){
            alert("Selecione uma Opção antes de continuar!")
            return
        }
        console.log("iAm" ,iAm)
        let bodyData = {
            iAm:iAm
        }
        
        await fetch("http://localhost:3000/users/update-account", {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
            "token": sessionStorage.getItem("token")
        },
        body: JSON.stringify(bodyData) 
    })
   
    .then(()=>{
        console.log("editou de boa")
    }).catch((e)=>{
        console.log("erro no fetch "+e)
    })
    
    
    new Navegacao().irParaSelectInterests(); 
}



changeSelect(index){
    let buttons= document.querySelectorAll(".selectSex");
    buttons.forEach((botao)=>{
        if(botao.classList.contains("principal-buttons")) {
            botao.classList.remove("principal-buttons") 
            botao.classList.add("secundary-buttons")
        } 
    })    
    buttons[index].classList.toggle("principal-buttons") 
    buttons[index].classList.toggle("secundary-buttons")
    
    
} 
}