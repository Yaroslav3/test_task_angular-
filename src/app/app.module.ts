import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {RegFormComponent} from './reg-form/reg-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PhotoService} from './shared/service/photo.service';
import {CommitService} from './shared/service/commit.service';

import { StartComponent } from './start/start.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RatingModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    RegFormComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RatingModule.forRoot()
  ],
  providers: [
    PhotoService,
    CommitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
