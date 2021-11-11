import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'parts-modal',
    loadChildren: () => import('./parts-modal/parts-modal.module').then( m => m.PartsModalPageModule)
  },
  {
    path: 'ratings-modal',
    loadChildren: () => import('./ratings-modal/ratings-modal.module').then( m => m.RatingsModalPageModule)
  },
  {
    path: 'banktransfer-modal',
    loadChildren: () => import('./banktransfer-modal/banktransfer-modal.module').then( m => m.BanktransferModalPageModule)
  },
  {
    path: 'pos-modal',
    loadChildren: () => import('./pos-modal/pos-modal.module').then( m => m.PosModalPageModule)
  },
  {
    path: 'billpaid',
    loadChildren: () => import('./billpaid/billpaid.module').then( m => m.BillpaidPageModule)
  },
  {
    path: 'machine',
    loadChildren: () => import('./machine/machine.module').then( m => m.MachinePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
