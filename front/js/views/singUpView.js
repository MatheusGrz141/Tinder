class cadastroView{
    
    template(){
        return`
        <div class="head"> 
            <a class="skip" href="">skip</a>
        </div>
        <h1>Profile Details</h1>
       
        <input  id="image" type="file">
        <input class="text-input" id="firstName" type="text" placeholder="Primeiro Nome:">
        <input class="text-input" id="lastName" type="text" placeholder="Segundo Nome:"> 
        
        <input class="text-input" id="date" type="date">
        
        
        <button class="principal-buttons" type="submit" id="confirm">Confirm</button>
       
        
        
        `
    }
    
}