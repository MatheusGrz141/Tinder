class inicioView{
    template(){
        return ` <form action="#">
        <div class="head"> 
        <a href="#" id="TurnBack"><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
            <a class="skip" href=""></a>
        </div>
            
        </div>
        <img id="logosigninup" src="./js/imgs/logoSignInUp.svg" alt="">
        <h1 id="logosigninup-h1" >Sign up to continue</h1>
        <input id="email"placeholder="Continue with email" class="text-input" type="email" required>
        <button type="submit" class="principal-buttons" id="continue">Continue</button>
        
        </form>
        <footer>
        <p  class="skip">Terms of use
        Privacy Policy</p>
        </footer>`
    }
}