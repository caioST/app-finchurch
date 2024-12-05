import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'access',
    loadChildren: () => import('./features/access/access.module').then( m => m.AccessPageModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./features/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'delete-account',
    loadChildren: () => import('./features/delete-account/delete-account.module').then( m => m.DeleteAccountPageModule)
  },
  {
    path: 'fingerprint-authentication',
    loadChildren: () => import('./features/fingerprint-authentication/fingerprint-authentication.module').then( m => m.FingerprintAuthenticationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./features/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'relatorios',
    loadChildren: () => import('./features/relatorios/relatorios.module').then( m => m.RelatoriosPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./features/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./features/splash/splash.module').then( m => m.SplashPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
