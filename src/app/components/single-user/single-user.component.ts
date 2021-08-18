import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  getlocalStorage:any;
  detailsNews:any;
  constructor(private Datalisting:DataService) { }

  getSingleUser(){
    this.getlocalStorage = localStorage.getItem("User");
    this.detailsNews = JSON.parse(this.getlocalStorage  || '{}')
    console.log(this.detailsNews)
    // return this.Datalisting.SingleUser(id).subscribe(res => {
    //   // console.log(res)
    // })
  }
  ngOnInit(): void {
    this.getSingleUser()
  }

}
