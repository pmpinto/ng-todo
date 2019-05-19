import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PageUserComponent } from "./page-user/page-user.component"

const routes : Routes = [{ path: "", component: PageUserComponent }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
