import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { homeUrl, emptyUrl } from "./shared/routing.urls";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

export const appRoutes: Routes = [
    { path: emptyUrl, redirectTo: homeUrl, pathMatch: 'full' },
    //{ path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutesModule { }