class Navegacao{
  constructor(){  
    
    this.rotas=  {
      
      inicio:{
        controller: new inicioController()
      },
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
      matches:{
        controller: new matchesController()
      },
      signUpPassword:{
        controller: new signUpPasswordController()
      },
      loginPassword: {
        controller: new loginPasswordController()
      },
      mainApp:{
        controller: new mainAppController()
      },
    }
  }
  irParaInicio(){
    this.irPara(this.rotas.inicio)
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
  irParaSignUpPassword(){
    this.irPara(this.rotas.signUpPassword)
  }
  irParaloginPassword(){
    this.irPara(this.rotas.loginPassword)
  }
  irParaMatches(){
    this.irPara(this.rotas.matches);
  }
  
  
  
  irPara(rota) {
    rota.controller.init();
  }
}