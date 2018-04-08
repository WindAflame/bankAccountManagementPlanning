import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const AppRoutes: Routes = [
    //{ path: '', component: redirectTo: '/', pathMatch: 'full' }
    { path: '', component: LayoutComponent },
    //{ path: '**', component: PageNotFoundComponent }
    { path: '**', redirectTo: '', pathMatch: 'full' }
]