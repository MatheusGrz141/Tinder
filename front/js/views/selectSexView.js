class selectSexView{
    template(){
        return`  
        <div class="head"> 
        <a href="#" id="TurnBack"><img src="./js/imgs/iconTurnBack.svg" alt="Turn Back"></a>
        <a class="skip" href="">skip</a>
        </div>
        <h1>I am a </h1>
        <form action="#">
        
        
        <button value="Woman"  class="secundary-buttons selectSex">Woman</button>
        <button value="Man" class="secundary-buttons selectSex">Man</button>
        <input placeholder="custom gender" class="secundary-buttons selectSex" ></input>
        
        <button class="principal-buttons" id="continue">Continue</button>
        </form>`
    }
}