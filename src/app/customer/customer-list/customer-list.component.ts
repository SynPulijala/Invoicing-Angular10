import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  userList: any = [];
  constructor(public commonService: CommonService) {
    this.getUserList();
  }
  ngOnInit() {

  }
  getUserList() {
    this.commonService.callApi('https://reqres.in/api/users/', {}, 'get').then((response: any) => {
      console.log(response, 'response')
      this.userList = response.data;
    })
  }
}
