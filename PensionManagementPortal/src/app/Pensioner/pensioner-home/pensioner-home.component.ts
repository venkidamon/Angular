import { Component, OnInit } from '@angular/core';
import { PensionerDetails } from 'src/app/_models/pensionerDetails';

@Component({
  selector: 'app-pensioner-home',
  templateUrl: './pensioner-home.component.html',
  styleUrls: ['./pensioner-home.component.css']
})
export class PensionerHomeComponent implements OnInit {
  aadharNumber:string;
  constructor() { }

  ngOnInit(): void {
  }

  passRequest(){

  }

}
