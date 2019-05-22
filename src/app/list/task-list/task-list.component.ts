import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { ITask } from "../../interfaces/task"
import { ApiService } from "../../shared/api.service"

@Component({
    selector: "app-task-list",
    templateUrl: "./task-list.component.html",
    styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {
    @Input() list: ITask[]

    @Output() onDeleteTask: EventEmitter<boolean> = new EventEmitter()
    @Output() onUpdateTask: EventEmitter<boolean> = new EventEmitter()

    tasksBeingEdited: number[] = []

    constructor(private _apiService: ApiService) {}

    ngOnInit() {}

    deleteTask(taskID: number) {
        this._apiService.deleteTask(taskID).subscribe(data => {
            if (typeof data === "object") {
                this.onDeleteTask.emit(true)
            }
        })
    }

    toggleEditTask(taskID: number) {
        if (this.isEditingTask(taskID)) {
            const taskPosition = this.getTaskPositionFromEditingList(taskID)
            this.tasksBeingEdited.splice(taskPosition, 1)
        } else {
            this.tasksBeingEdited.push(taskID)
        }
    }

    toggleCompleteTask(task: ITask) {
        task.completed = !task.completed
        this._apiService.completeTask(task).subscribe(data => {
            if (typeof data === "object") {
                this.onUpdateTask.emit(true)
            }
        })
    }

    isEditingTask(taskID: number): boolean {
        const taskPosition = this.getTaskPositionFromEditingList(taskID)
        return taskPosition >= 0
    }

    getTaskPositionFromEditingList(taskID: number): number {
        return this.tasksBeingEdited.indexOf(taskID)
    }

    updateTaskText(task: ITask) {
        this._apiService.updateTaskText(task).subscribe(data => {
            if (typeof data === "object") {
                this.toggleEditTask(task.id)
                this.onUpdateTask.emit(true)
            }
        })
    }
}
