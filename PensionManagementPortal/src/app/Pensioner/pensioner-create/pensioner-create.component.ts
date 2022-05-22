import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-pensioner-create',
  templateUrl: './pensioner-create.component.html',
  styleUrls: ['./pensioner-create.component.css']
})
export class PensionerCreateComponent implements OnInit {
  pensionerForm:FormGroup;
  aadharNumber:string = this.route.snapshot.paramMap.get('aadharNumber')
  constructor(private fb:FormBuilder, private route:ActivatedRoute, private accountService: AccountService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {

    this.initializeForm();

  }
  createPensioner(){
    this.accountService.storePensioner(this.pensionerForm.value).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    });

    this.accountService.storeProcessPension(this.pensionerForm.value).subscribe(response => {
      this.toastr.success('Pensioner Saved')

      this.router.navigateByUrl('penionerDetailDisplay/' + this.pensionerForm.value.aadharNumber)
    }, error => {
      console.log(error)
    });



  }

  initializeForm(){
    this.pensionerForm = this.fb.group({
      aadharNumber: [this.aadharNumber, Validators.required],
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      panCardNumber: ['', Validators.required],
      salary: ['', Validators.required],
      allowance:['', Validators.required],
      pensionType: ['', Validators.required],
      bankName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      bankType: ['', Validators.required],
    }
    )
  }

}
