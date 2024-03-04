import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import AccueilComponent from './app/demo/dashboard/accueil/accueil.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

  bootstrapApplication(AccueilComponent, {
    providers: [provideCharts(withDefaultRegisterables())],
    
  }).catch((err) => console.error(err));