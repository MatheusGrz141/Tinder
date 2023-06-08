class loginController{
    init(){
        
        let view = new loginView().template();
        let main = document.querySelector("#main")
        main.innerHTML = view;
        
        document.querySelector("#create-an-account").addEventListener("click" , ()=>{
            this.CreateAnAccount()
        });
        document.querySelector("#sign-in").addEventListener("click",()=>{
            /* this.signIn() */
            new Navegacao().irParaInicio();
        })
        let botoesCarrosel =  document.querySelectorAll('.botao');
        botoesCarrosel.forEach((botao , index)=>{
            botao.addEventListener('click' ,() =>{
                this.removerBotaoSelecionado();
                this.selecionarBotao(botao);
                this.esconderImagemAtiva(); 
                this.mudarImagemDeFundo(index);  
            })
        })
        this.mudarImagemDeFundoAltomatica(0)
    }   
    CreateAnAccount(){
        new Navegacao().irParaSignUp();  
    }
    mudarImagemDeFundo(index) {
        
        const imagens = document.querySelectorAll('.imagem');
        imagens[index].classList.add('ativa');
    }
    esconderImagemAtiva() {
        document.querySelector('.ativa').classList.remove('ativa');
        
    }
    selecionarBotao(botao) {
        botao.classList.add('selecionado');
    }
    removerBotaoSelecionado() {
        const selecionado = document.querySelector('.selecionado');
        selecionado.classList.remove('selecionado');
    }
    
    mudarImagemDeFundoAltomatica(i) {
        
        if(!document.querySelector(".carrosel")){
            return
        }
        let RandomN =  i;/* (Math.floor(Math.random() * 3)) */
        
        
        document.querySelector('.selecionado').classList.remove('selecionado');
        document.querySelector('.ativa').classList.remove('ativa');
        
        
        
        const imagens = document.querySelectorAll('.imagem');
        imagens[RandomN].classList.add('ativa');
        
        
        
        let botoesSelecionado = document.querySelectorAll('.botao')
        botoesSelecionado[RandomN].classList.add('selecionado');
        i = (i + 1) % 3;
        
        setTimeout(()=> {
            clearInterval(this.mudarImagemDeFundoAltomatica(i));
        }, 3000);
    }
    async signIn(){
        
        let firstName =  document.querySelector("#firstName").value;
        let lastName =  document.querySelector("#lastName").value;
        
        let bodyData = {
            firstName:firstName,
            lastName:lastName
        };
        
        let sessao  =  await fetch("http://localhost:3000/users/sign-in", {
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
    
    
    
    
    
    new Navegacao().irParaMainApp()
}
}
