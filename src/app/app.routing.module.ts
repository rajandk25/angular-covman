import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/common/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { TeachersComponent } from './features/teachers/teachers.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { ParentsModule } from './features/parents/parents.module';
import { IncidentsModule } from './features/incidents/incidents.module';

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
            loadChildren: () => import('src/app/features/parents/parents.module').then(m => m.ParentsModule),
            canActivate: [AuthGuard]
        },
        
        {
            path: 'incidents',
            loadChildren: () => import('src/app/features/incidents/incidents.module').then(m => m.IncidentsModule),
            canActivate: [AuthGuard]
        },

        {
            path: 'profile',
            loadChildren: () => import('src/app/features/profile/profile.module').then(m => m.ProfileModule),
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
            loadChildren: () => import('src/app/features/incidents/incidents.module').then(m => m.IncidentsModule),
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