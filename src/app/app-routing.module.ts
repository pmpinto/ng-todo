import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

const routes : Routes = [{ path: "", loadChildren: "./user/user.module#UserModule" }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
