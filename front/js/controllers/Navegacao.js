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
     
      loginPassword: {
        controller: new loginPasswordController()
      },
      continueToEmail:{
        controller: new continueToEmailController()
      },
      profile:{
        controller: new profileController()
      },
      itsAMAtch:{
        controller: new itsAMAtchController()
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
  irParaSignUpPassword(){
    this.irPara(this.rotas.signUpPassword)
  }
  irParaloginPassword(){
    this.irPara(this.rotas.loginPassword)
  }
  irParaMatches(){
    this.irPara(this.rotas.matches);
  }
  irParaContinueToEmail(){
    this.irPara(this.rotas.continueToEmail)
  }
  irParaProfile(){
    this.irPara(this.rotas.profile)
  }
  irParaItsAMAtch(){
    this.irPara(this.rotas.itsAMAtch)
  }
  irParaMainApp(){
    this.irPara(this.rotas.mainApp);
  }
  
  
  irPara(rota) {
    rota.controller.init();
  }
}