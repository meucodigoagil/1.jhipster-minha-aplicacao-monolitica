import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'minhaAplicacaoMonoliticaApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'produto',
    data: { pageTitle: 'minhaAplicacaoMonoliticaApp.produto.home.title' },
    loadChildren: () => import('./produto/produto.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
