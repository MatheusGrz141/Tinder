

class loginView{
    
    template(){
        return`
        <div class="carrosel">
        <img class="imagem ativa" src="./js/imgs/img1.png" alt="Imagem representando um usuário do aplicativo" >
        <img class="imagem " src="./js/imgs/img2.png" alt="Imagem representando um usuário do aplicativo" >
        <img class="imagem" src="./js/imgs/img3.png" alt="Imagem representando um usuário do aplicativo" >
       
    </div>
        
        <h1 class="onboardin-title">Algorithm</h1>
        
            <p class="onboardin-description">Users going through a vetting process to </p>
            <p class="onboardin-description">ensure you
        never match with bots.</p>
       
    <div class="botoes-carrossel">
        <button class="botao selecionado" ></button>
        <button class="botao" ></button>
        <button class="botao" ></button>
    </div> 
        
        <button class="principal-buttons" id="create-an-account">Create an account</button>
        
        <p class="onboardin-signin">Already have an account?<a id="sign-in" href="#">Sign in</a></p>
        
        `
    }
    
}