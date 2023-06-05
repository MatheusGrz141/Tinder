class selectInterestsController{
    init(){
        document.querySelector("#main").innerHTML = new selectInterestsView().template();
        
        document.querySelector("#continue").addEventListener("click", ()=>{
            this.mainApp()
        })
    }
    mainApp(){
        new Navegacao().irParaMainApp()
    }
}