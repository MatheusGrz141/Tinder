class cadastroView{
    
    template(){
        return`
        
        <div class="head"> 
        <a href="#" id="TurnBack"></a>
            <a class="skip" href="">skip</a>
        </div>
        
        
        <form action="#">
        <h1>Profile Details</h1>
        <input style="display: none" type="file" id="avatar" name="avatar">
        
        <div class="mb-2 text-center avatar-content">
        <img id="avatar-preview"  width="100px" height="100px" src="./js/imgs/iconProfile.svg">
        </div>
        <input type="hidden" id="selectImage" type="file">
        <input  class="text-input" id="firstName" type="text" placeholder="Primeiro Nome:">
        <input  class="text-input" id="lastName" type="text" placeholder="Segundo Nome:"> 
        
        <input class="text-input" id="date" type="date">
        
        
        <button type = "submit" class="principal-buttons"  id="confirm">Confirm</button>
        </form>
        
        
        `
    }
    
}