import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { MoreSpecificComponent } from './more-specific/more-specific.component';
import { LoopsComponent } from './loops/loops.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: MainViewComponent },
  { path: 'specific/:id', component: MoreSpecificComponent },
  { path: 'loops', component: LoopsComponent }
];
export const AppRoutesModule = RouterModule.forRoot(appRoutes, { useHash: true });