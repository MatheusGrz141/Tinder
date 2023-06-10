

class selectSexController{
    init(){
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
        
        
        let email =  sessionStorage.getItem("emailCadastro")
        let iAm = document.querySelector(".principal-buttons ").value;
        
        
        
        
        let bodyData = {
            email:email,
            iAm:iAm,
        }
        
        
        
        await fetch("http://localhost:3000/users/update-account", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
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
    
    if(buttons[index].classList.contains("principal-buttons")) {
        buttons[index].classList.remove("principal-buttons") 
        buttons[index].classList.add("secundary-buttons")
    } else{
        buttons[index].classList.remove("secundary-buttons") 
        buttons[index].classList.add("principal-buttons")
    }
    
    
    
    
    
    
    
}
}