class matchesController{
    init(){
        document.querySelector("#main").innerHTML = new matchesView().template()
        this.bind()
    }
    bind(){
        
        document.querySelector("#home").addEventListener('click',()=>{
            new Navegacao().irParaMainApp();
        })
        document.querySelector("#iconProfile").addEventListener("click",()=>{
    
            new Navegacao().irParaProfile()
        })
        
    }
}