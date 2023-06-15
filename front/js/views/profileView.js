class profileView{
    
    constructor(model){
        this.model =model
    }

    template(){
        
        return` 
        <form action="#">
        <div class="head"> 
        <a href="#" id="TurnBack"><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
            <a class="skip" href=""></a>
        </div>
            
        </div>
        <img id="logoProfile" src="${ sessionStorage.getItem("iconAvatar")}" alt="">
        <h1 id="logosigninup-h1" >Profile</h1>
        
        
        <button type="submit" class="principal-buttons" id="deleteAccount">Delete You Account</button>
        </form>
        <footer>
        <p  class="skip">Terms of use
        Privacy Policy</p>
        </footer>
        `
    }
}