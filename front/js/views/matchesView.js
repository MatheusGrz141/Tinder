class matchesView{
    constructor(matchs){
        this.matchs = matchs
    }
    template(){
        if(this.matchs == null){
            return `nenhum match no momento`
        }else{
             let main = ``
            this.matchs.forEach(element => {
                main += ` <div class="metch-container">
                <h1>${element.firstName} ${element.lastName}</h1>
                <img class="img-user"src="${element.avatar}" alt="imagem de um usuário">
                <div class="matchs-interactions"> 
                <button class="interaction"><img src="./js/imgs/iconCros.svg" alt=""></button>
                <button class="interaction"><img src="./js/imgs/iconHeart.svg" alt=""></button>
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
}