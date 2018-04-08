import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
import { AppRoutesContracts as Path } from "./app.routes.contracts";

export const AppRoutes: Routes = [
    //{ path: '', component: redirectTo: '/', pathMatch: 'full' }
    { path: Path.EMPTY, component: LayoutComponent },
    //{ path: '**', component: PageNotFoundComponent }
    { path: Path.OTHERS , redirectTo: Path.EMPTY, pathMatch: 'full' }
]