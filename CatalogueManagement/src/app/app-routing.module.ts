import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeSectionComponent } from './auth/welcome-section/welcome-section.component';
import { PagesComponent } from './pages/pages.component';
import { AnonymousGuard } from './services/guards/anonymous.guard';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WelcomeSectionComponent,
    canActivateChild: [AnonymousGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
  path: 'pages', 
  canActivateChild: [AuthGuard], 
  children: [
    {
        path: '',
        component: PagesComponent,
        loadChildren: () => import('../app/pages/pages.module').then(m => m.PagesModule)
    }]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
