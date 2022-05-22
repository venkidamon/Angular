import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  isPresent : boolean;




  constructor(public accountService: AccountService,
     private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  login(){
    this.accountService.login(this.model).subscribe(response => {

      this.toastr.success('login Successful');
      this.router.navigateByUrl('penionerDetailDisplay/' + this.model.username)


    }, error => {
      this.toastr.error(error.error)
      console.log(error)
    })



  }

  logout(){
    this.toastr.success('Logout Successful')
    this.accountService.logout();

  }



}
