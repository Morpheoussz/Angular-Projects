import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public elo : string;
  public username : any;
  public password : any;
  private data : any;
  
  constructor() { }
  goHome(x){
    this.elo = x;
  }

  Loginaction(){
    this.data = {'username' : this.username , 'password' : this.password}
    alert(JSON.stringify(this.data));
  }


  ngOnInit() {
    //alert('elo');
    //this.elo = 'i am here';
    //alert(this.elo);
    this.goHome('my name is elo');
  }
  
}
