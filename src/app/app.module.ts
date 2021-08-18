import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ControlsComponent } from './controls/controls.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    BannerComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FormsModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
