import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { CartComponent } from './components/cart/cart.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ReducPipe } from './reduc.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { productReducer } from './components/store/reducers/product.reducer';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    CartComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ReducPipe,
    ProductListComponent,
    ShippingComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      products: productReducer,
    }),
  ],

  // Injection ici, car l'interceptor doit être actif tout le temps
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
