import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, ReplaySubject, zip } from 'rxjs';
import { map} from 'rxjs/operators';
import { PensionerDetails } from '../_models/pensionerDetails';
import { ProcessPension } from '../_models/processPension';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})


export class AccountService {
  baseUrl = 'https://btauthorizationapi.azurewebsites.net/api/'
  pensionerDetailsUrl = 'https://btpensionersdetailapi.azurewebsites.net/api/'
  processPensionUrl = 'https://btprocesspensionapi.azurewebsites.net/api/'
  processPensionDetails: ProcessPension = {
    aadharNumber: '',
    name: '',
    dateOfBirth: undefined,
    panCardNumber: '',
    salary: 0,
    allowance: 0,
    pensionType: '',
    bankName: '',
    accountNumber: '',
    bankType: '',
    amount: 0,
    bankServiceCharge: 0
  }
  private currentUserSource = new ReplaySubject<User>(1);

  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }



  login(model:User){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response : User) => {
        const user = response;
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any){
    return this.http.post<User>(this.baseUrl + 'account', model).pipe(
      map((user : User) => {
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }

      })
    );
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  getPensioner(aadharNumber: string){
    return this.http.get<ProcessPension>(this.processPensionUrl+'ProcessPension/'+aadharNumber);
  }

  lookPensioner(aadharNumber: string){
    return this.http.get<PensionerDetails>(this.pensionerDetailsUrl+'pensionerDetailByAadhar/'+aadharNumber).pipe(
      map((response) => {
        if(response){
          return true
        }
        return false
      })
    )
  }

  storeProcessPension(model){
    this.processPensionDetails = {
      aadharNumber: model.aadharNumber,
      name: model.name,
      dateOfBirth: model.dateOfBirth,
      panCardNumber: model.panCardNumber,
      salary: model.salary,
      allowance: model.allowance,
      pensionType: model.pensionType,
      bankName: model.bankName,
      accountNumber: model.accountNumber,
      bankType: model.bankType,
      amount: 0,
      bankServiceCharge: 0
      }
      return this.http.post<ProcessPension>(this.processPensionUrl + 'ProcessPension', this.processPensionDetails).pipe(
        map((response => {
          console.log(response)
        }))
      )
  }
  storePensioner(model:PensionerDetails){

    return this.http.post<PensionerDetails>(this.pensionerDetailsUrl + 'pensionerDetailByAadhar', model).pipe(
      map((response => {
        if(response == null){
          console.log(response)
        }
        else{
          console.log(response)
        }
      }))
    )



  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
