class selectInterestsView{
    template(){
        return `    
        <div class="head"> 
        <a href=""><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
            <a class="skip" href="">skip</a>
        </div>
        <h1>Your interests</h1>
        <p>Select a few of your interests and let everyone know what you’re passionate about.</p>
        <div class="interests">
            <div class=" interests-buttons">
                <button class="interests-options selectInterests">Photography</button>
                <button class="interests-options selectInterests">Karaoke</button>
                <button class="interests-options selectInterests" >Cookin</button>
                <button class="interests-options selectInterests">Run</button>
                <button class="interests-options selectInterests">Art</button>
                <button class="interests-options selectInterests ">Extreme</button>
                <button class="interests-options selectInterests">Drink</button>
            </div>
            <div class=" interests-buttons">
                <button class="interests-options selectInterests">Shopping</button>
                <button class="interests-options selectInterests" >Yoga</button>
                <button class="interests-options selectInterests">Tennis</button>
                <button class="interests-options selectInterests">Swimming</button>
                <button class="interests-options selectInterests">Traveling</button>
                <button class="interests-options selectInterests">Music</button>
                <button class="interests-options selectInterests">Video Games</button>
            </div>
        
        
        </div>
        <button class="principal-buttons" id="continue">Continue</button>`
    }
}