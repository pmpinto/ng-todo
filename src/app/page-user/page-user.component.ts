import { Component, OnInit } from "@angular/core"
import { ITask } from "../interfaces/task"
import { ApiService } from "../shared/api.service"

@Component({
    selector: "app-page-user",
    templateUrl: "./page-user.component.html",
    styleUrls: ["./page-user.component.scss"]
})
export class PageUserComponent implements OnInit {
    constructor(private _apiService: ApiService) {}

    userUncompletedTasks: ITask[]
    userCompletedTasks: ITask[]

    ngOnInit() {
        this.refreshLists()
    }

    getAllUncompletedTasks() {
        this._apiService.getAllUncompletedTasks().subscribe(data => {
            this.userUncompletedTasks = data
            console.log("tasks", data)
        })
    }

    getAllCompletedTasks() {
        this._apiService.getAllCompletedTasks().subscribe(data => {
            this.userCompletedTasks = data
            console.log("completed tasks", data)
        })
    }

    refreshLists() {
        this.getAllCompletedTasks()
        this.getAllUncompletedTasks()
    }
}
