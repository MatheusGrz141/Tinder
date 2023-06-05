class selectSexController{
    init(){
        document.querySelector("#main").innerHTML = new selectSexView().template()
        
        document.querySelector("#continue").addEventListener("click" , ()=>{
            this.selectInterests()
        })
        let buttons= document.querySelectorAll(".secundary-buttons");
        
        buttons.forEach((botao,index)=>{
            botao.addEventListener("click" , ()=>{
                this.changeSelect(index)
            })
        })
    }
    selectInterests(){
        new Navegacao().irParaSelectInterests();
    }
    changeSelect(index){
         let buttons= document.querySelectorAll(".secundary-buttons");
        console.log(buttons)
        buttons.forEach((botao)=>{
            botao.classList.remove("principal-buttons"); 
            
            buttons[index].classList.add("principal-buttons")
         }) 
        
        console.log(buttons[index])
    }
}