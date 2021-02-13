import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhootosModule } from './photos/photos.module';
import { PhotoService } from './photos/photo/photo.service';
import { AppRoutingModule } from './app-routing.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhootosModule,
    ErrorsModule,
    AppRoutingModule,
    HomeModule,
    CoreModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
