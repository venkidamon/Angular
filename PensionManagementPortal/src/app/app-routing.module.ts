import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { HomeComponent } from './home/home.component';
import { PensionerCreateComponent } from './Pensioner/pensioner-create/pensioner-create.component';
import { PensionerDetailComponent } from './Pensioner/pensioner-detail/pensioner-detail.component';
import { PensionerHomeComponent } from './Pensioner/pensioner-home/pensioner-home.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path: '',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      {path:'pensionerHome', component:PensionerHomeComponent},
      {path:'pensionerDetailByAadhar/:aadharNumber', component:PensionerCreateComponent},
      {path:'penionerDetailDisplay/:aadharNumber', component:PensionerDetailComponent}

    ]
  },
  {path:'home', component:HomeComponent},
  {path:'not-found', component:NotFoundComponent},
  {path:'server-error', component:ServerErrorComponent},
  {path:'**', component:NotFoundComponent, pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
