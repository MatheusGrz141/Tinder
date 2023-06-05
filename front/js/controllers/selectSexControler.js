class selectSexController{
    init(){
        document.querySelector("#main").innerHTML = new selectSexView().template()
        
        document.querySelector("#continue").addEventListener("click" , ()=>{
            this.selectInterests()
        })
    }
    selectInterests(){
        new Navegacao().irParaSelectInterests();
    }
}