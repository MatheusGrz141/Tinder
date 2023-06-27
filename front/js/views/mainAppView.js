class mainAppView{
    constructor(mainModel,imgUserLogado){
        console.log("    this.mainModel" ,    mainModel," this.imgUserLogado ", imgUserLogado )
        this.mainModel = mainModel;
        this.imgUserLogado = imgUserLogado;
        
    }
    
    template(){
        if( !this.mainModel ){
            return `<div class="head"> 
            <a id="TurnBack" href="#"><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
            <div class="city-and-name"> 
            <h1>Discover</h1>
            <p>Chicago ,II</p>
            </div>
            
            
            <a class="skip" href="#"><img src="./js/imgs/iconConfig.svg" alt="Profile"></a>
            </div>
            <img class="img-user" src="./js/imgs/iconProfile.svg" alt="imagem de um usuário">
            
            <p>Nenhum perfil que se encaixe com seus gostos</p>
            
            <footer class="footer">
            <button id="home"><img src="./js/imgs/iconHomeSelect.svg" alt=""></button>
            <button id="matches"><img src="./js/imgs/iconMatchs.svg" alt=""></button>
            <button><img id="iconProfile" src="${this.imgUserLogado}" alt=""></button>
            </footer>
            
            `
        }
        return ` 
        <div class="head"> 
        <a id="TurnBack" href="#"><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
        <div class="city-and-name"> 
        <h1>Discover</h1>
        <p>Chicago ,II</p>
        </div>
        <a class="skip" href="#"><img src="./js/imgs/iconConfig.svg" alt="Profile"></a>
        </div>
        
        <img class="img-user"src="${ this.mainModel.avatar} " alt="imagem de um usuário">
        ${ this.mainModel.firstName} ${ this.mainModel.lastName} 
        <div class="interactions"> 
        <button class="cross interaction " data-userid="${this.mainModel.id}"  ><img data-userid="${this.mainModel.id}" src="./js/imgs/iconCros.svg" alt="iconCros"></button>
        <button class="heart" data-userid="${this.mainModel.id}" ><img data-userid="${this.mainModel.id}" src="./js/imgs/iconHeart.svg" alt="iconHeart"></button>
        <button class="interaction" data-userid="${this.mainModel.id}" ><img data-userid="${this.mainModel.id}" src="./js/imgs/iconStar.svg" alt="iconStar"></button>
        
        </div>
        
        <footer class="footer">
        <button id="home"><img src="./js/imgs/iconHomeSelect.svg" alt=""></button>
        <button id="matches"><img src="./js/imgs/iconMatchs.svg" alt=""></button>
        <button><img id="iconProfile" src="${this.imgUserLogado}" alt=""></button>
        </footer>`
    }
    
}