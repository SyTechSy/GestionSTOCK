export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  // C'est pour la navigation 
  {
    id: 'navigation',
    title: 'Tableau de board',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/accueil',
        icon: 'feather icon-home'
      }
    ]
  },

  // C'est pour la page 
  {
    id: 'ui-component',
    title: 'Page',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'basic',
        title: 'Stocks',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'ajustement-des-stock',
            title: 'Ajustement des stocks',
            type: 'item',
            url: '/component/ajustement-des-stock'
          },
          {
            id: 'suivi-inventaire',
            title: 'Suivi des inventaires',
            type: 'item',
            url: '/component/suivi-inventaire'
          },
          {
            id: 'seuil-des-stocks',
            title: 'Seuil des stocks',
            type: 'item',
            url: '/component/seuil-des-stocks'
          },
          {
            id: 'deplacements-des-stocks',
            title: 'Deplacements des stocks',
            type: 'item',
            url: '/component/deplacements-des-stocks'
          },
          {
            id: 'planning-deplacement',
            title: 'Planning de deplacement',
            type: 'item',
            url: '/component/planning-deplacement'
          },
          {
            id: 'transfert-des-stock',
            title: 'Transfert des stocks',
            type: 'item',
            url: '/component/transfert-des-stock'
          },
          {
            id: 'planning-transfert',
            title: 'Planning de transfert',
            type: 'item',
            url: '/component/planning-transfert'
          },


          {
            id: 'emplacements-des-stocks',
            title: 'Emplacements des stocks',
            type: 'item',
            url: '/component/emplacements-des-stocks'
          },
        ]
      },

      // Pour les achats 
      {
        id: 'basic',
        title: 'Achats & Ventes',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'mes-commande',
            title: 'Mes commandes',
            type: 'item',
            url: '/component/mes-commande'
          },
          {
            id: 'factures-des-clients',
            title: 'Factures des clients',
            type: 'item',
            url: '/component/factures-des-clients'
          },
          {
            id: 'paiements-recus',
            title: 'Paiements Reçus',
            type: 'item',
            url: '/component/paiements-recus'
          },
          {
            id: 'retour-des-ventes',
            title: 'Les retours des ventes',
            type: 'item',
            url: '/component/retour-des-ventes'
          },
          {
            id: 'achat-des-reaprovisionnements',
            title: 'Achat des reaprovisionnements',
            type: 'item',
            url: '/component/achat-des-reaprovisionnements'
          },
          {
            id: 'commande-des-clients',
            title: 'Commande des clients',
            type: 'item',
            url: '/component/commande-des-clients'
          },
        ]
      },  
      // Pour les produits 
      {
        id: 'produits',
        title: 'Produits',
        type: 'item',
        url: '/produits',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      // Pour les compte et Gestion de rôle
      {
        id: 'basic',
        title: 'Comptes',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'utilisateur',
            title: 'Utilisateurs',
            type: 'item',
            url: '/component/utilisateur'
          },
          {
            id: 'controleur',
            title: 'Contrôleurs',
            type: 'item',
            url: '/component/controleur'
          },
          {
            id: 'administrateur',
            title: 'Administrateurs',
            type: 'item',
            url: '/component/administrateur'
          },
          {
            id: 'changements-de-role',
            title: 'Changer un rôle',
            type: 'item',
            url: '/component/changements-de-role'
          },
        ]
      },
      // Pour les Abonnements  
      {
        id: 'reservation-produit',
        title: 'Réservation',
        type: 'item',
        url: '/reservation-produit',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      // Pour les Fournisseurs  
      {
        id: 'fournisseur',
        title: 'Fournisseurs',
        type: 'item',
        url: '/fournisseur',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      }, 
      // Pour les rapport
      {
        id: 'rapport',
        title: 'Rapport',
        type: 'item',
        url: '/rapport',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      // Pour mon abonnement
      {
        id: 'abonnement',
        title: 'Mon abonnement',
        type: 'item',
        url: '/abonnement',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      // Pour mon abonnement
      {
        id: 'charts',
        title: 'Mon charts',
        type: 'item',
        url: '/charts',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      // Pour les notifications
      {
        id: 'notification',
        title: 'Notifications',
        type: 'item',
        url: '/notification',
        classes: 'nav-item',
        icon: 'feather icon-bell'
      },
      // Pour les Paramètre
      {
        id: 'parametre',
        title: 'Paramètre',
        type: 'item',
        url: '/parametre',
        classes: 'nav-item',
        icon: 'feather icon-settings'
      }
    ]
  },



  // {
  //   id: 'Authentication',
  //   title: 'Authentication',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'signup',
  //       title: 'Sign up',
  //       type: 'item',
  //       url: '/auth/signup',
  //       icon: 'feather icon-at-sign',
  //       target: true,
  //       breadcrumbs: false
  //     },
  //     {
  //       id: 'signin',
  //       title: 'Sign in',
  //       type: 'item',
  //       url: '/auth/signin',
  //       icon: 'feather icon-log-in',
  //       target: true,
  //       breadcrumbs: false
  //     }
  //   ]
  // },

  // {
  //   id: 'chart',
  //   title: 'Chart',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'apexchart SY',
  //       title: 'ApexChartSYSY',
  //       type: 'item',
  //       url: '/chart',
  //       classes: 'nav-item',
  //       icon: 'feather icon-pie-chart'
  //     }
  //   ]
  // },

  // {
  //   id: 'forms & tables',
  //   title: 'Forms & Tables',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'forms',
  //       title: 'Basic Elements',
  //       type: 'item',
  //       url: '/forms',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-text'
  //     },
  //     {
  //       id: 'tables',
  //       title: 'tables',
  //       type: 'item',
  //       url: '/tables',
  //       classes: 'nav-item',
  //       icon: 'feather icon-server'
  //     }
  //   ]
  // },

  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     {
  //       id: 'menu-level',
  //       title: 'Menu Levels ai',
  //       type: 'collapse',
  //       icon: 'feather icon-menu',
  //       children: [
  //         {
  //           id: 'menu-level-2.1',
  //           title: 'Menu Level 2.1',
  //           type: 'item',
  //           url: 'javascript:',
  //           external: true
  //         },
  //         {
  //           id: 'menu-level-2.2',
  //           title: 'Menu Level 2.2',
  //           type: 'collapse',
  //           children: [
  //             {
  //               id: 'menu-level-2.2.1',
  //               title: 'Menu Level 2.2.1',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             },
  //             {
  //               id: 'menu-level-2.2.2',
  //               title: 'Menu Level 2.2.2',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
];
