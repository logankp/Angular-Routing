import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            {
                path: 'products',
                loadChildren: 'app/products/product.module#ProductModule',
                canActivate: [AuthGuard],
                data: { preload: true }
            },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ], { preloadingStrategy: SelectiveStrategy })
    ],
    providers: [SelectiveStrategy],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
