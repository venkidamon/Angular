import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PensionerDetailComponent } from './Pensioner/pensioner-detail/pensioner-detail.component';
import { ToastrModule } from 'ngx-toastr';

import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { PensionerHomeComponent } from './Pensioner/pensioner-home/pensioner-home.component';
import { PensionerCreateComponent } from './Pensioner/pensioner-create/pensioner-create.component';

import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    PensionerDetailComponent,
    TestErrorsComponent,
    ServerErrorComponent,
    PensionerHomeComponent,
    PensionerCreateComponent,
    DateInputComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    NgxSpinnerModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
