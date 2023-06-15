class profileView{
    
    constructor(model){
        this.model =model
        this.user =  sessionStorage.getItem("iconAvatar")
        this.firstName  = sessionStorage.getItem("firstName")
        this.lastName =  sessionStorage.getItem("lastName")
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
        <img id="logoProfile" src="${this.user}" alt="">
        <h2 id="nameUser" >${this.firstName} ${this.lastName}</h1>
        
        
        
        <button type="submit" class="principal-buttons" id="deleteAccount">Delete You Account</button>
        </form>
        <footer>
        <p  class="skip">Terms of use
        Privacy Policy</p>
        </footer>
        `
    }
}