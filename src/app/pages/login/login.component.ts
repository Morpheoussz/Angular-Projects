import { Component, OnInit } from '@angular/core';
import { ApicallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public elo : string;
  public email : any;
  public password : any;
  private data : any;
  
  constructor(private fff: ApicallService) { }
  goHome(x){
    this.elo = x;
  }

  Loginaction(){
    this.data = {'email' : this.email , 'password' : this.password , "key" : "A346"}
    //alert(JSON.stringify(this.data));
    this.fff.postData(this.data).subscribe(ans=>{ alert(JSON.stringify(ans));})
    //alert(JSON.stringify(this.data));
  }


  ngOnInit() {
    //alert('elo');
    //this.elo = 'i am here';
    //alert(this.elo);
    this.goHome('my name is elo');
  }
  
}
