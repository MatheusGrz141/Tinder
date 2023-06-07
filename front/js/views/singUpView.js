class cadastroView{
    
    template(){
        return`
        <div class="head"> 
            <a class="skip" href="">skip</a>
        </div>
        <h1>Profile Details</h1>
        <img id="imagem"src="./js/imgs/iconProfile.svg" alt="">
        <input type="hidden" id="selectImage" type="file">
        <input value= "as" class="text-input" id="firstName" type="text" placeholder="Primeiro Nome:">
        <input value= "as" class="text-input" id="lastName" type="text" placeholder="Segundo Nome:"> 
        
        <input class="text-input" id="date" type="date">
        
        
        <button class="principal-buttons" type="submit" id="confirm">Confirm</button>
       
        
        
        `
    }
    
}