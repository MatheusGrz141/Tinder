class Navegacao{
  constructor(){
    this.rotas=  {
      login: {
        controller: new loginController()
      },
      
      signUp: {
        controller: new singUpController()
      },
      selectSex: {
        controller: new selectSexController()
      },
      selectInterests:{
        controller: new selectInterestsController()
      },
      mainApp:{
        controller: new mainAppController()
      },
    }
  }
  irParaLogin() {
    this.irPara(this.rotas.login);  
  }
  irParaSignUp() {
    this.irPara(this.rotas.signUp);
  }
  irParaSelectSex() {
    this.irPara(this.rotas.selectSex);   
  }
  irParaSelectInterests() {
    this.irPara(this.rotas.selectInterests);   
  }
  irParaMainApp(){
    this.irPara(this.rotas.mainApp);
  }
  
  
  
  irPara(rota) {
    rota.controller.init();
  }
}