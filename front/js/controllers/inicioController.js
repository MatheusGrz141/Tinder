class inicioController{
    init(){
        
        let view = new loginView().template();
        let main = document.querySelector("#main")
        main.innerHTML = view;
        
        document.querySelector("#create-an-account").addEventListener("click" , ()=>{
            new Navegacao().irParaContinueToEmail(); 
        });
        document.querySelector("#sign-in").addEventListener("click",()=>{
     
            new Navegacao().irParaContinueToEmail();
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
             
        document.querySelector('.selecionado').classList.remove('selecionado');
        document.querySelector('.ativa').classList.remove('ativa');
        
        const imagens = document.querySelectorAll('.imagem');
        imagens[i].classList.add('ativa');
       
        let botoesSelecionado = document.querySelectorAll('.botao')
        botoesSelecionado[i].classList.add('selecionado');
        i = (i + 1) % 3;
        
        setTimeout(()=> {
            clearInterval(this.mudarImagemDeFundoAltomatica(i));
        }, 3000);
    }

}

