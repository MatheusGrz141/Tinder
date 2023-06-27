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
        
        let iAm = document.querySelector(".principal-buttons ").value;
        if(!iAm){
            alert("Selecione uma Opção antes de continuar!")
            return
        }
     
        let bodyData = {
            iAm:iAm
        }
        
        await fetch("http://localhost:3000/users/update-account", {
        method:"PUT",
        headers: {
            "Content-Type":"application/json",
            "token": sessionStorage.getItem("token")
        },
        body: JSON.stringify(bodyData)}
        ).then(()=>{
            new Navegacao().irParaSelectInterests(); 
            
        }).catch((e)=>{
            alert("erro ao salvar , tente novamente!")
            new Navegacao().irParaSelectSex(); 
        })
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
        buttons[index].classList.toggle("secundary-buttons")} 
    }