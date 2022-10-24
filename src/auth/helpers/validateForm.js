export const mailValidate = (email) => {
    let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (validateEmail.test(email)) {
      return true
    }else{
      return false
    }
}

export const passwordValidate = (password) => {
    if(password.length > 6){
        return true;
    }else{
        return false;
    }
}