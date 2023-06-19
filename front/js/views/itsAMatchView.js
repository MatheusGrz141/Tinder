class itsAMAtchView {
    constructor(){

    }
    template(){
        return `
        <div class="imgs-matchs ">
      
        <img class="img-user left" src="${ sessionStorage.getItem("iconAvatar")}" alt="">
        
        
        
        <img class="img-user rigth" src="${sessionStorage.getItem("imgItsAMatch")}" alt="">
        
        
      </div>
      
      <h1 class="skip">It's a match, ${ sessionStorage.getItem("firstName")}!</h1>
      <p>Start a conversation now with each other</p>
      
      <button id="say-hello" class="principal-buttons">Say hello</button>
      <button id="keep-swiping" class="principal-buttons keep-swiping ">Keep swiping</button>
      `
    }
}