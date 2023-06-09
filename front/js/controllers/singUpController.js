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
        let password = document.querySelector("#password").value;
        if(!firstName || !lastName || !password || ! this.inputFile.files[0]){
            alert("Campos Obrigatórios nao esta preenchidos")
            return
        }
        let formData = new FormData();
        formData.append("password",password)
        formData.append("firstName" ,firstName)
        formData.append("lastName",lastName)
        formData.append("avatar", this.inputFile.files[0]);   
        formData.append("birthday",birthday)
        formData.append("email",sessionStorage.getItem("emailCadastro"))
        
        let signUp = await fetch("http://localhost:3000/users/sign-up", {
        method:"POST", 
        body:  formData }
        );
        let signUpJson = await signUp.json()
        if(signUpJson){ 
            sessionStorage.setItem("iconAvatar" ,  signUpJson.avatar)
            sessionStorage.setItem("firstName" ,  signUpJson.firstName)
            sessionStorage.setItem("lastName" ,  signUpJson.lastName)
            sessionStorage.setItem("token",signUpJson.token)
            
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

