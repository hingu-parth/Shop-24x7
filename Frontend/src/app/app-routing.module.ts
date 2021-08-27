import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddProductComponent } from './admin-add-product/admin-add-product.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { AdminEditOrderComponent } from './admin-edit-order/admin-edit-order.component';
import { AdminEditProductComponent } from './admin-edit-product/admin-edit-product.component';
import { AdminEditUserComponent } from './admin-edit-user/admin-edit-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { CartComponent } from './cart/cart.component';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { AdminGuard } from './services/admin-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const applicationRoutes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path:'home', component: HomeComponent},
  { path:'category-listing/:id', component: CategoryListingComponent},
  { path:'product-listing/:id', component: ProductListingComponent},
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AdminGuard] },
  { path: 'admin/addProduct', component: AdminAddProductComponent, canActivate: [AdminGuard] },
  { path: 'admin/editProduct/:id', component: AdminEditProductComponent, canActivate: [AdminGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: DepartmentsComponent },
  { path: 'products', component: OffersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-register', component: AdminRegisterComponent, canActivate: [AdminGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile/:id', component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
  { path: 'admin/edit-user/:id', component: AdminEditUserComponent, canActivate: [AdminGuard] },
  { path: 'admin/edit-user', component: AdminEditUserComponent, canActivate: [AdminGuard] },
  { path: 'admin/add-user', component: AdminAddUserComponent, canActivate: [AdminGuard] },
  { path: 'admin/edit-order/:id', component: AdminEditOrderComponent, canActivate: [AdminGuard] }
  ];
