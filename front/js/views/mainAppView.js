class mainAppView{
    constructor(mainModel){
        this.mainModel = mainModel;
    }
    
    template(){
        return ` 
        
        <div class="head"> 
        <a id="TurnBack" href="#"><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
        <h1>Discover</h1>
        <p>Chicago ,II</p>
        
        <a class="skip" href="#"><img src="./js/imgs/iconConfig.svg" alt="Profile"></a>
        </div>
        
        <img class="img-user"src="${ this.mainModel.avatar} " alt="imagem de um usuário">
        ${ this.mainModel.firstName} ${ this.mainModel.lastName} 
        <div class="interactions"> 
        <button class="interaction" data-userid="${this.mainModel.id}"  ><img src="./js/imgs/iconCros.svg" alt=""></button>
        <button class="heart" data-userid="${this.mainModel.id}" ><img src="./js/imgs/iconHeart.svg" alt=""></button>
        <button class="interaction" data-userid="${this.mainModel.id}" ><img src="./js/imgs/iconStar.svg" alt=""></button>
        
        
        </div>
        
        
        
        
        
        <footer class="footer">
        <button id="home"><img src="./js/imgs/iconHomeSelect.svg" alt=""></button>
        <button id="matches"><img src="./js/imgs/iconMatchs.svg" alt=""></button>
        <button><img id="iconProfile" src="${ sessionStorage.getItem("iconAvatar")}" alt=""></button>
        </footer>`
    }
    
}