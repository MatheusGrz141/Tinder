class singUpController{
    
    init(){ 
        
        
        document.querySelector("#main").innerHTML = new cadastroView().template()
        this.setInputFile = document.querySelector("#avatar");
        this.setAvatarPreview = document.querySelector("#avatar-preview");
        this.bind();
    } 
    
    bind(){
        
        document.querySelector("#confirm").addEventListener('click', (e)=>{
            e.preventDefault()
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
        let birthday  = document.querySelector("#birthday").value;
        let email =  localStorage.getItem("emailCadastro");
        
        
        
        
        let formData = new FormData();
        formData.append("firstName" ,firstName)
        formData.append("lastName",lastName)
        formData.append("avatar", this.inputFile.files[0]);   
        formData.append("birthday",birthday)
        formData.append("email",email)
        
       let signUp= await fetch("http://localhost:3000/users/sign-up", {
        method:"POST",
        
        body:  formData })

         if(signUp){
              new Navegacao().irParaSelectSex(); 
        }

        
       
        
        
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

