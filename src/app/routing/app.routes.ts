import { Routes } from "@angular/router";

import { AppRoutesContracts as Path } from "./app.routes.contracts";

import { LayoutComponent } from "../layout/layout.component";
import { HomeComponent } from "../home/home.component";

export const AppRoutes: Routes = [
    { path: Path.HOME, component: HomeComponent },
    //{ path: '', component: redirectTo: '/', pathMatch: 'full' }
    { path: Path.EMPTY, redirectTo: Path.HOME, pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
    { path: Path.OTHERS, redirectTo: Path.HOME, pathMatch: 'full' }
]