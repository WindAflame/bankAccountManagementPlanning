import { Routes, RouterModule } from "@angular/router";
import { AppRoutesContracts as Path } from "./routes.contracts";

import { LayoutComponent } from "../layout/layout.component";
import { HomeComponent } from "../home/home.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    { path: Path.HOME, component: HomeComponent },
    //{ path: '', component: redirectTo: '/', pathMatch: 'full' }
    { path: Path.EMPTY, redirectTo: Path.HOME, pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
    { path: Path.OTHERS, redirectTo: Path.HOME, pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutesModule { }