import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ajustement-des-stock',
        loadComponent: () => import('./ajustement-des-stock/ajustement-des-stock.component')
      },
      {
        path: 'suivi-inventaire',
        loadComponent: () => import('./suivi-inventaire/suivi-inventaire.component')
      },
      {
        path: 'seuil-des-stocks',
        loadComponent: () => import('./seuil-des-stocks/seuil-des-stocks.component')
      },
      {
        path: 'deplacements-des-stocks',
        loadComponent: () => import('./deplacements-des-stocks/deplacements-des-stocks.component')
      },
      {
        path: 'planning-deplacement',
        loadComponent: () => import('./planning-deplacement/planning-deplacement.component')
      },
      {
        path: 'transfert-des-stock',
        loadComponent: () => import('./transfert-des-stock/transfert-des-stock.component')
      },
      {
        path: 'planning-transfert',
        loadComponent: () => import('./planning-transfert/planning-transfert.component')
      },
      {
        path: 'emplacements-des-stocks',
        loadComponent: () => import('./emplacements-des-stocks/emplacements-des-stocks.component')
      },
      
      // Cote achats 
      
      {
        path: 'mes-commande',
        loadComponent: () => import('./achats/mes-commande/mes-commande.component')
      },
      {
        path: 'factures-des-clients',
        loadComponent: () => import('./achats/factures-des-clients/factures-des-clients.component')
      },
      {
        path: 'paiements-recus',
        loadComponent: () => import('./achats/paiements-recus/paiements-recus.component')
      },
      {
        path: 'retour-des-ventes',
        loadComponent: () => import('./achats/retour-des-ventes/retour-des-ventes.component')
      },
      {
        path: 'achat-des-reaprovisionnements',
        loadComponent: () => import('./achats/achat-des-reaprovisionnements/achat-des-reaprovisionnements.component')
      },
      {
        path: 'commande-des-clients',
        loadComponent: () => import('./achats/commande-des-clients/commande-des-clients.component')
      },
      
      // Cote Comptes 
      
      {
        path: 'utilisateur',
        loadComponent: () => import('./comptes/utilisateur/utilisateur.component')
      }, 
      {
        path: 'controleur',
        loadComponent: () => import('./comptes/controleur/controleur.component')
      },
      {
        path: 'administrateur',
        loadComponent: () => import('./comptes/administrateur/administrateur.component')
      },
      {
        path: 'changements-de-role',
        loadComponent: () => import('./comptes/changements-de-role/changements-de-role.component')
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
