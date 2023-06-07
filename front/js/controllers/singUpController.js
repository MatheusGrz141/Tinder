
class singUpController{
    
    init(){
        document.querySelector("#main").innerHTML = new cadastroView().template()
        
        document.querySelector("#confirm").addEventListener('click', ()=>{
            this.selectSex()
        })
        document.querySelector(".skip").addEventListener('click', ()=>{
            new Navegacao().irParaLogin()
        })
        document.querySelector("#imagem").addEventListener('click',()=>{
            /*   let baba = document.querySelector("#selectImage")
            baba.click() */
        })
    }
    
    async selectSex(){ 
        
        let firstName =  document.querySelector("#firstName").value;
        let lastName =  document.querySelector("#lastName").value;
       
        let bodyData = {
            firstName,
            lastName  
        };
         console.log(bodyData)
       await fetch("http://localhost:3000/users/sign-up", {
        method: "POST",
        body: JSON.stringify(bodyData)  
    }).then((sessao)=>{
         console.log(sessao) 
    })
  
    
    /*  let sessaoTokenJson = await sessao.json();
    console.log("resposta", sessaoTokenJson);
    
    sessionStorage.setItem("token", sessaoTokenJson.token); */
    
    
    
    /*     new Navegacao().irParaSelectSex(); */
    
    
}


}