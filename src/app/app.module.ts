import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import 'hammerjs';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { LibraryComponent } from './library/library.component';
import { LocatorComponent } from './locator/locator.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ViewListComponent } from './view-list/view-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { NotificationsComponent } from './notifications/notifications.component';

const myFirebaseConfig = {
    apiKey: 'AIzaSyCHEIyUXYy0ZpJdG5N8bH2mAZd52xZZRZA',
    authDomain: 'l0crs-7c288.firebaseapp.com',
    databaseURL: 'https://l0crs-7c288.firebaseio.com',
    storageBucket: 'l0crs-7c288.appspot.com',
    messagingSenderId: '85179573049'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const routes: Routes =[
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: UserComponent },
  { path: 'card_travel', component: CompanyComponent },
  { path: 'perm_identity', component: StudentComponent },
  { path: 'person', component: AdminComponent },
  { path: 'notifications', component: NotificationsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    BookComponent,
    AddToCartComponent,
    FavoriteComponent,
    BookShelfComponent,
    StudentComponent,
    LibraryComponent,
    LocatorComponent,
    AdminComponent,
    CompanyComponent,
    SignupComponent,
    SigninComponent,
    ViewListComponent,
    AddCompanyComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }