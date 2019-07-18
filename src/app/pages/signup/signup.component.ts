import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../../services/apicall.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private data: any;
  public name:any;
  public surname: any;
  public othernames: any;
  public email: any;
  public password: any;
  public checkbox: any;


  constructor(private fff:ApicallService) { }

  Signupaction(){
    this.data = {'name' : this.name , 'surname':this.surname, 'othernames':this.othernames , 'email':this.email,'password' : this.password ,'checkbox':this.checkbox ,"key":"A347"}
    this.fff.postData(this.data).subscribe(ans=>{ alert(JSON.stringify(ans));}) //fff is used to call the service..the service is making the apicall
    //alert(JSON.stringify(this.data));

  }

  ngOnInit() {
    
  }

}
