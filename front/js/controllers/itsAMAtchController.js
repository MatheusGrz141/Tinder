class itsAMAtchController {
    init(params){
        document.querySelector("#main").innerHTML = new itsAMAtchView(params).template()
        this.bind()
    }
    bind(){
        document.querySelector("#say-hello").addEventListener("click" ,()=>{
            new Navegacao().irParaMainApp()
        })
        document.querySelector("#keep-swiping").addEventListener("click" ,()=>{
            new Navegacao().irParaMainApp()
        })
    }
}