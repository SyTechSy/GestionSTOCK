// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
// import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil',
        loadComponent: () => import('./demo/dashboard/accueil/accueil.component')
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'produits',
        loadComponent: () => import('./demo/produits/produits.component')
      },
      {
        path: 'reservation-produit',
        loadComponent: () => import('./demo/reservation-produit/reservation-produit.component')
      },
      {
        path: 'fournisseur',
        loadComponent: () => import('./demo/fournisseur/fournisseur.component')
      },
      {
        path: 'rapport',
        loadComponent: () => import('./demo/rapport/rapport.component')
      },
      {
        path: 'abonnement',
        loadComponent: () => import('./demo/abonnement/abonnement.component')
      },
      {
        path: 'notification',
        loadComponent: () => import('./demo/notification/notification.component')
      },
      {
        path: 'profil',
        loadComponent: () => import('./demo/profil/profil.component')
      },
      {
        path: 'parametre',
        loadComponent: () => import('./demo/parametre/parametre.component')
      },

      // {
      //   path: 'sample-page',
      //   loadComponent: () => import('./demo/sample-page/sample-page.component')
      // }
      
      // {
      //   path: 'analytics',
      //   loadComponent: () => import('./demo/dashboard/dash-analytics/dash-analytics.component')
      // },
      
      // {
      //   path: 'forms',
      //   loadComponent: () => import('./demo/forms & tables/form-elements/form-elements.component')
      // },
      // {
      //   path: 'tables',
      //   loadComponent: () => import('./demo/forms & tables/tbl-bootstrap/tbl-bootstrap.component')
      // },
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
        // {
        //   path: 'auth/signup',
        //   loadComponent: () => import('./demo/authentication/sign-up/sign-up.component')
        // },
        // {
        //   path: 'auth/signin',
        //   loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
        // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
