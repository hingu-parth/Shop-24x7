import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { applicationRoutes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { DepartmentsComponent } from './departments/departments.component';
import { OffersComponent } from './offers/offers.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ModalComponent } from './modal/modal.component';
import { CartService } from './services/cart.service';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './services/admin.service';
import { AuthGuard } from './services/auth-guard.service';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminGuard } from './services/admin-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';
import { AdminEditUserComponent } from './admin-edit-user/admin-edit-user.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminEditOrderComponent } from './admin-edit-order/admin-edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryListingComponent,
    CartComponent,
    ProfileComponent,
    DepartmentsComponent,
    OffersComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
    ProductListingComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    DashboardComponent,
    OrdersComponent,
    EditProfileComponent,
    UsersComponent,
    AdminEditUserComponent,
    AdminAddUserComponent,
    AdminEditOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(applicationRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CartService, UserService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
