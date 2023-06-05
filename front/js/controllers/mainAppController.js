class mainAppController{
    init(){
        document.querySelector("#main").innerHTML = new mainAppView().template();
        this.bind()
    }
    
    bind(){
      
        document.querySelector("#matches").addEventListener('click', ()=>{
          alert("hipsfhsp")
        })
    }
}