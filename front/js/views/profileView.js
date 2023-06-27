class profileView{
    
    constructor(  imgUserLogado){
        this.imgUserLogado = imgUserLogado
    }
    
    template(){
        
        return` 
        <form action="#">
        <div class="head"> 
        <a href="#" id="TurnBack"><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
        <a class="skip" href=""></a>
        </div>
        
        </div>
        <h1 id="logosigninup-h1" >Profile</h1>
        <img id="logoProfile" src="${this.imgUserLogado.avatar}" alt="">
        <h2 id="nameUser" >${this.imgUserLogado.firstName} ${this.imgUserLogado.lastName}</h1>
        
        
        
        <button type="submit" class="principal-buttons" id="deleteAccount">Delete You Account</button>
        </form>
        </form>
        <footer>
        <p  class="skip">Terms of use</p>  <p  class="skip"> Privacy Policy</p>
        </footer>`
    }
}