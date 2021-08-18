import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/iuser';
import { DataService } from 'src/app/service/data.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  User:IUser = {};
  validBtn:boolean = false;
  IDval:number = 0;
  constructor(private Datalisting:DataService,private toastr: ToastrService) { }

  SendData(){
    return this.Datalisting.createUser(this.User).subscribe((res:any) => {
      if (this.User.name == undefined && this.User.job == undefined) {
        this.showError();
      }else{
        this.showSuccess();
        this.UpdateVal();
        this.IDval = res.id
      }

    })
  }
  UpdateUserList(){
    return this.Datalisting.UpdateUser(this.IDval,this.User).subscribe(res => {
      console.log(res)
      if (this.User.name == '' && this.User.job == '') {
        this.showError();
        this.validBtn = true
      }else{
        this.showSuccess()
      }
    });
  }
  UpdateVal(){
    this.validBtn = !this.validBtn;
    if ( this.validBtn === false) {
      this.UpdateUserList()
    }
  }
  showSuccess() {
    this.toastr.success(`User:${this.User.name} , Job:${this.User.job}`);
  }
  showError() {
    this.toastr.error(`Please Add User Name And User Job`);
  }

  ngOnInit(): void {
  }

}
