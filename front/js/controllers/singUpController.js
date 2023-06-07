
class singUpController{
    
    init(){
        document.querySelector("#main").innerHTML = new cadastroView().template()
        this.setInputFile = document.querySelector("#avatar");
        this.setAvatarPreview = document.querySelector("#avatar-preview");
        
        this.bind();
    } 
    
    bind(){
        
        document.querySelector("#confirm").addEventListener('click', ()=>{
            this.selectSex()
        })
        document.querySelector(".skip").addEventListener('click', ()=>{
            new Navegacao().irParaLogin()
        }) 
        this.avatarPreview.addEventListener("click", () => {
            this.inputFile.click();
        });
        this.inputFile.addEventListener("change", () => {
            this.showPreview();
        })
        
    }
    
    async selectSex(){ 
        
        let firstName =  document.querySelector("#firstName").value;
        let lastName =  document.querySelector("#lastName").value;
        
        let bodyData = {
            firstName:firstName,
            lastName:lastName
        };
        
        let sessao  =  await fetch("http://localhost:3000/users/sign-up", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(bodyData)  
    }     ).catch((e)=>{
        console.log("erro no fetch: "+e)
    })
    let sessaoTokenJson = await sessao.json();
    
    
    sessionStorage.setItem("token", sessaoTokenJson.token); 
    new Navegacao().irParaSelectSex(); 
    
    
}
showPreview() {
    if(this.inputFile.files && this.inputFile.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
            this.avatarPreview.src = e.target.result;
        };
        reader.readAsDataURL(this.inputFile.files[0])
    }
}

set setInputFile(inputFile) {
    this.inputFile = inputFile;
}

set setAvatarPreview(avatarPreview) {
    this.avatarPreview = avatarPreview;
}

}

