import { IUser } from 'src/app/interface/iuser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  results:any;
  listUser:any;
  constructor(private Datalisting:DataService,private router: Router,private toastr: ToastrService) { }

  getListing(){
    return this.Datalisting.ListingUser().subscribe(res => {
      this.results = res;
      this.listUser = this.results.data
    })
  }
  dataUser:any;
  getSingleUser(id:Number){
    return this.Datalisting.SingleUser(id).subscribe(res => {
      this.dataUser = res;
      const myJSON = JSON.stringify(this.dataUser.data);
      localStorage.setItem("User", myJSON);
      this.router.navigateByUrl('singleUser');
    })
  }
  DeleteUserList(id:number){
    return this.Datalisting.DeleteUser(id).subscribe(res =>{
      this.listUser = this.listUser.filter((item:any) => item.id !== id);
    })
  }
  ngOnInit(): void {
    this.getListing()
  }

}
