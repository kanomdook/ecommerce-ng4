import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {APP_CONFIG, AppConfig} from './config/app.config';

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/modules/shared.module';
import {CoreModule} from './core/core.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpLoaderFactory} from './app.translate.factory';
import {HeroTopComponent} from './heroes/hero-top/hero-top.component';
import {HeroService} from './heroes/shared/hero.service';
import { MenuListXComponent } from './menu-list-x/menu-list-x.component';
import { HomeService } from './shared/services/home-service';
import { ProductListXComponent } from './product-list-x/product-list-x.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    HeroTopComponent,
    MenuListXComponent,
    ProductListXComponent,
    ProductDetailComponent
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig},
    HeroService,
    HomeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
