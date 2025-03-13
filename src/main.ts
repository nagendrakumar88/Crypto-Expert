import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent,{
  providers: [
    provideAnimations(),
    importProvidersFrom(MatMenuModule)
  ]})
  .catch((err) => console.error(err));
