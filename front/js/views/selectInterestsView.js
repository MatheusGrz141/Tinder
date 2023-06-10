class selectInterestsView{
    template(){
        return `    
        <div class="head"> 
        <a href="#" id="TurnBack"><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
        <a class="skip" href="">skip</a>
        </div>
        <form action="#">
        <h1>Your interests</h1>
        <p>Select a few of your interests and let everyone know what you’re passionate about.</p>
        <div class="interests">
        <div class=" interests-buttons">
        <button class="interests-options selectInterests" value="Photography">Photography</button>
        <button class="interests-options selectInterests" value="Karaoke">Karaoke</button>
        <button class="interests-options selectInterests" value="Cookin">Cookin</button>
        <button class="interests-options selectInterests" value="Run">Run</button>
        <button class="interests-options selectInterests" value="Art">Art</button>
        <button class="interests-options selectInterests" value="Extreme">Extreme</button>
        <button class="interests-options selectInterests" value="Drink">Drink</button>
        </div>
        <div class=" interests-buttons">
        <button class="interests-options selectInterests" value="Shopping">Shopping</button>
        <button class="interests-options selectInterests" value="Yoga">Yoga</button>
        <button class="interests-options selectInterests" value="Tennis">Tennis</button>
        <button class="interests-options selectInterests" value="Swimming">Swimming</button>
        <button class="interests-options selectInterests" value="Traveling">Traveling</button>
        <button class="interests-options selectInterests" value="Music">Music</button>
        <button class="interests-options selectInterests" value="VideoGames">Video Games</button>
        </div>
        </form>
        
        </div>
        <button class="principal-buttons" id="continue">Continue</button>`
    }
}