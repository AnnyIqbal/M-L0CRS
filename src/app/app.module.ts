import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes =[
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'person', component: UserComponent },
  { path: 'book', component: BookComponent },
  { path: 'add_shopping_cart', component: AddToCartComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'shopping_cart', component: BookShelfComponent },
  { path: 'account_balance', component: LibraryComponent },
  { path: 'location_on', component: LocatorComponent }
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }