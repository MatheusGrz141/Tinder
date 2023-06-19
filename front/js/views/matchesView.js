class matchesView{
    constructor(matchs){
        this.matchs = matchs
    }
    template(){
        
        let main = ``
        this.matchs.forEach((element)=> {
            main += ` 
           
            <div class="match-container">
            <h1>${element.match.firstName} ${element.match.lastName}</h1>
            <img id="${element.match._id}" class="img-user"src="${element.match.avatar}" alt="imagem de um usuário">
            <div class="matchs-interactions"> 
            <button class="interaction cross"><img src="./js/imgs/iconCrossMatchs.svg" alt=""></button>
            <img src="./js/imgs/iconDivider.svg" alt="">
            <button class="interaction heart" data-index="${element.match._id}" ><img data-index="${element.match._id}" src="./js/imgs/iconHeart.svg" alt=""></button>
            </div>
            
            </div>`
        });
        
        
        
        return `  
        
        <h1>Matches</h1>          
        <p>This is a list of people who have liked you and your matches.</p>
        
        <p>today</p>
        <div>
        <div class="yourMatchs">
        ${main}
        <footer class="footer">
        <button id="home"><img src="./js/imgs/iconHome.svg" alt=""></button>
        <button id="matches"><img src="./js/imgs/iconMatchsSelect.svg" alt=""></button>
        <button><img id="iconProfile" src="${sessionStorage.getItem("iconAvatar")}" alt=""></button>
        </footer>
        `
    }
    
}