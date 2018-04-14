
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { homeUrl } from "../shared/routing.urls";
import { HomeComponent } from "./pages/home.component";

export const homeRoutes: Routes = [    
    { path: homeUrl, component: HomeComponent    }
]

@NgModule({
    imports: [ RouterModule.forChild(homeRoutes) ],
    exports: [ RouterModule ]
})
export class HomeRoutesModule { }