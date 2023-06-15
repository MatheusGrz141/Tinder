class matchesView{
    template(){
        return `  
        
        <h1>Matches</h1>
        
        
        <p>This is a list of people who have liked you and your matches.</p>
        
        <p>today</p>
        
        <div>
        <div class="yourMatchs">
        
        <div class="metch-container">
        <img class="img-user"src="./js/imgs/img1.png" alt="imagem de um usuário">
        <div class="matchs-interactions"> 
        <button class="interaction"><img src="./js/imgs/iconCros.svg" alt=""></button>
        <button class="interaction"><img src="./js/imgs/iconHeart.svg" alt=""></button>
        </div>
        
        </div>
        <div class="metch-container">
        <img class="img-user"src="./js/imgs/img1.png" alt="imagem de um usuário">
        <div class="matchs-interactions"> 
        <button class="interaction"><img src="./js/imgs/iconCros.svg" alt=""></button>
        <button class="interaction"><img src="./js/imgs/iconHeart.svg" alt=""></button>
        </div>
        </div>
        </div>
        
        </div>
        
        <footer class="footer">
        <button id="home"><img src="./js/imgs/iconHome.svg" alt=""></button>
        <button id="matches"><img src="./js/imgs/iconMatchsSelect.svg" alt=""></button>
        <button id ="iconProfile" ><img src="${ sessionStorage.getItem("iconAvatar")}" alt=""></button>
    </footer>
    `
    }
}