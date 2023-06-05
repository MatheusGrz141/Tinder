class loginController{
    init(){
        let view = new loginView().template();
        let main = document.querySelector("#main")
        main.innerHTML = view;
        
        document.querySelector("#create-an-account").addEventListener("click" , ()=>{
            this.CreateAnAccount()
        });
        let botoesCarrosel =  document.querySelectorAll('.botao');
        botoesCarrosel.forEach((botao , index)=>{
            botao.addEventListener('click' ,() =>{
                this.removerBotaoSelecionado();
                this.selecionarBotao(botao);
                this.esconderImagemAtiva(); 
                this.mudarImagemDeFundo(index);  
            })
        })
    }   
    CreateAnAccount(){
        new Navegacao().irParaSignUp()  
    }
    mudarImagemDeFundo(index) {
        const imagens = document.querySelectorAll('.imagem');
        imagens[index].classList.add('ativa');
    }
    esconderImagemAtiva() {
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
    }
    selecionarBotao(botao) {
        botao.classList.add('selecionado');
    }
    removerBotaoSelecionado() {
        const selecionado = document.querySelector('.selecionado');
        selecionado.classList.remove('selecionado');
    }
    
}
