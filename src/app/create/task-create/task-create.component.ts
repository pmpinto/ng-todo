import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { ITask } from "../../interfaces/task"
import { ApiService } from "../../shared/api.service"

@Component({
    selector: "app-task-create",
    templateUrl: "./task-create.component.html",
    styleUrls: ["./task-create.component.scss"]
})
export class TaskCreateComponent implements OnInit {
    @Output() onTaskCreate: EventEmitter<boolean> = new EventEmitter()
    taskForm: FormGroup

    constructor(private _apiService: ApiService) {
        this.taskForm = new FormGroup({
            text: new FormControl("", Validators.required)
        })
    }

    ngOnInit() {}

    createTask(taskText: string) {
        if (taskText) {
            const newTask : ITask = { text: taskText, completed: false }

            this._apiService.createTask(newTask).subscribe(data => {
                if (typeof data === "object") {
                    this.onTaskCreate.emit(true)
                    this.taskForm.controls.text.reset()
                }
            })
        }
    }
}
