import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  validationErrors:string[] = [];
  constructor(private accountService : AccountService,
     private router: Router, private toastr:ToastrService,
     private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    })
    this.registerForm.controls['password'].valueChanges.subscribe(() => {
      this.registerForm.controls['confirmPassword'].valueChanges
    })
  }
  register(){
    // console.log(this.registerForm)
    this.accountService.register(this.registerForm.value).subscribe(response => {
      this.toastr.success('Registered Successfully')

      this.router.navigateByUrl('penionerDetailDisplay/' + this.registerForm.value.username)
    }, error => {

     this.validationErrors = error
    });

  }

  matchValues(matchTo: string): ValidatorFn{
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null:{isMatching:true}
    }
  }

  // cancel(){
  //   this.router.navigateByUrl('/home');
  //   console.log('cancelled');
  // }

}
