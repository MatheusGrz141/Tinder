class selectInterestsController{
    init(){
        document.querySelector("#main").innerHTML = new selectInterestsView().template();
        
        document.querySelector("#continue").addEventListener("click", ()=>{
            this.mainApp()
        })  
        document.querySelector(".skip").addEventListener('click', ()=>{
            new Navegacao().irParaLogin()
        })
        
        document.querySelector("#TurnBack").addEventListener('click', ()=>{
            new Navegacao().irParaSelectSex()
        })
        let buttons= document.querySelectorAll(".selectInterests");
        
        buttons.forEach((botao,index)=>{
            botao.addEventListener("click" , ()=>{
                this.changeSelect(index)
            })
        })
    }
    
    async mainApp(){
        let arrayIntereces= []
        arrayIntereces = document.querySelectorAll(".interests-options-select")
        
        let interests = []
        arrayIntereces.forEach((interest)=>{
            interests.push(interest.value)
        })
        let bodyData = {  
            interests:interests
        };
        
        await fetch("http://localhost:3000/users/update-account", {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
            "token": sessionStorage.getItem("token")
        },
        body:JSON.stringify(bodyData) }).then(()=>{
            new Navegacao().irParaMainApp()  
        }).catch(()=>{
            alert("erro ao cadastrar interesses,tente novamente")
            new Navegacao().irParaSelectInterests(); 
        })
    }

    changeSelect(index){
        let buttons= document.querySelectorAll(".selectInterests");
 
        if(buttons[index].classList.contains("interests-options-select")) {
            buttons[index].classList.remove("interests-options-select") 
            buttons[index].classList.add("interests-options")
        } else{
            buttons[index].classList.remove("interests-options") 
            buttons[index].classList.add("interests-options-select")
        }
    }
}