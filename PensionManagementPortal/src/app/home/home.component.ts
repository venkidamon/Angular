import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false

  constructor(private accountService:AccountService, private router: Router) { }

  ngOnInit(): void {
    var value1 = localStorage.getItem('user');
    if(value1 == null){

    }
    else{
      var value2 = JSON.parse(value1)
      console.log(value2)
      this.router.navigateByUrl('penionerDetailDisplay/' + value2.userName)
    }

  }

  registerModeToggle(){
    this.registerMode = !this.registerMode;
  }

}
