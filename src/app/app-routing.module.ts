import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {RegFormComponent} from './reg-form/reg-form.component';
import {StartComponent} from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'onePage', component: PageOneComponent},
  {path: 'twoPage', component: PageTwoComponent},
  {path: 'registration-status', component: RegFormComponent},
  {path: '**', component: PageOneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
