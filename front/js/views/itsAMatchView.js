class itsAMAtchView {
    constructor(params){
      this.params = params
    }
    template(){
        return `
        <div class="imgs-matchs ">
      
        <img class="img-user left" src="${this.params.imgItsAMatch}" alt="">
        
        
        
        <img class="img-user rigth" src="${this.params.imgUserLogado}" alt="">
        
        
      </div>
      
      <h1 class="skip">It's a match, ${ this.params.nome}!</h1>
      <p>Start a conversation now with each other</p>
      
      <button id="say-hello" class="principal-buttons">Say hello</button>
      <button id="keep-swiping" class="principal-buttons keep-swiping ">Keep swiping</button>
      `
    }
}