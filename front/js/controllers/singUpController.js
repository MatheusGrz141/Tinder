let model = [];
class singUpController{
   
    init(){
        document.querySelector("#main").innerHTML = new cadastroView().template()
        
        document.querySelector("#confirm").addEventListener('click', ()=>{
            this.selectSex()
        })
    }
   
    selectSex(){ 
        
        let firstName =  document.querySelector("#firstName").value;
        let lastName =  document.querySelector("#lastName").value;
       
        let User ={firstName,lastName};
        model.push(User)
        

        new Navegacao().irParaSelectSex();
       
        
    }
    
}