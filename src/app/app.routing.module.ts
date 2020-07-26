import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/common/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { TeachersComponent } from './features/teachers/teachers.component';
import { DashboardModule } from './features/dashboard/dashboard.module';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/features/register-user/register-user.module').then(m => m.RegisterUserModule)
    },
    {
        path: 'parent',
        component: LayoutComponent,
        children: [{
            path: 'dashboard',
            loadChildren: () => import('src/app/features/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'incidents',
            loadChildren: () => import('src/app/features/dashboard/dashboard.module').then(m => m.DashboardModule),
            canActivate: [AuthGuard]
        }]
    },
    {
        path: 'teachers',
        component: LayoutComponent,
        children: [{
            path: 'dashboard',
            loadChildren: () => import('src/app/features/teachers/teachers.module').then(m => m.TeachersModule),
            canActivate: [AuthGuard]
        },
        {
            path: 'incidents',
            loadChildren: () => import('src/app/features/teachers/teachers.module').then(m => m.TeachersModule),
            canActivate: [AuthGuard]
        }]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
    })
export class AppRoutingModule { }