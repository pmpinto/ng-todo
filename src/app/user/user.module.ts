import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"

import { UserRoutingModule } from "./user-routing.module"

import { CreateModule } from "../create/create.module"
import { ListModule } from "../list/list.module"
import { SharedModule } from "../shared/shared.module"

import { PageUserComponent } from "./page-user/page-user.component"

@NgModule({
    declarations: [PageUserComponent],
    imports: [CommonModule, UserRoutingModule, SharedModule, ListModule, CreateModule],
    exports: [PageUserComponent]
})
export class UserModule {}
