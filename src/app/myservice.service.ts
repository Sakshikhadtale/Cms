import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }
  checkusernameandpassword(uname: string, pwd : string)
  {
if(uname == "sakshi" && pwd =="sakshi123"){
localStorage.setItem('username',"admin");
return true;
}
else{
  return false;
}
  }

}

