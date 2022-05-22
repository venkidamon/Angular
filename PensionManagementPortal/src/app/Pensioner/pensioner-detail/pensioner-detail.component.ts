import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PensionerDetails } from 'src/app/_models/pensionerDetails';
import { ProcessPension } from 'src/app/_models/processPension';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-pensioner-detail',
  templateUrl: './pensioner-detail.component.html',
  styleUrls: ['./pensioner-detail.component.css']
})
export class PensionerDetailComponent implements OnInit {
  pensionerDetail : ProcessPension
  aadharNumber:string = this.route.snapshot.paramMap.get('aadharNumber')
  total:number;
  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadPensionerDetails()

  }

  loadPensionerDetails(){

    this.accountService.getPensioner(this.route.snapshot.paramMap.get('aadharNumber')).subscribe(member => {
      this.pensionerDetail = member
      console.log(this.pensionerDetail)
      if(this.pensionerDetail){
        this.total = this.pensionerDetail.amount + this.pensionerDetail.bankServiceCharge
      }
      if(this.pensionerDetail == undefined){

        this.router.navigateByUrl('pensionerDetailByAadhar/' + this.aadharNumber )
      }
    }, error => {
      console.log(error)
    })
  }

}
