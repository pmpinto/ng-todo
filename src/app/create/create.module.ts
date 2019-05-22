import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { TaskCreateComponent } from "./task-create/task-create.component"

@NgModule({
    declarations: [TaskCreateComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [TaskCreateComponent]
})
export class CreateModule {}
