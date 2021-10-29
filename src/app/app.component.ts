import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insurance';
  username: String =""
  password:any;
  confirmpassword:any;

  submit(){
     if(this.password==this.confirmpassword){
        alert("success")
     }
     else{
       alert("password not matched")
     }
  }
}
