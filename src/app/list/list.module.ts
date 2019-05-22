import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"

import { SharedModule } from "../shared/shared.module"

import { TaskListComponent } from "./task-list/task-list.component"

@NgModule({
    declarations: [TaskListComponent],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [TaskListComponent]
})
export class ListModule {}
