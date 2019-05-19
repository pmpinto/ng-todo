import { HttpClient, HttpHeaders } from "@angular/common/http"

import { Injectable } from "@angular/core"
import { Observable, throwError } from "rxjs"
import { catchError, retry } from "rxjs/operators"
import { ITask } from "./interfaces/task"

@Injectable({
    providedIn: "root"
})
export class ApiService {
    apiBaseURL = "http://localhost:3200"
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    }

    constructor(private _http: HttpClient) {}

    getAllUncompletedTasks(): Observable<ITask[]> {
        return this._http.get<ITask[]>(`${this.apiBaseURL}/tasks?completed=false`, this.httpOptions).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    getAllCompletedTasks(): Observable<ITask[]> {
        return this._http.get<ITask[]>(`${this.apiBaseURL}/tasks?completed=true`, this.httpOptions).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    createTask(newTask: ITask): Observable<ITask> {
        return this._http.post<ITask>(`${this.apiBaseURL}/tasks`, newTask).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    deleteTask(taskID: number): Observable<object> {
        return this._http.delete<object>(`${this.apiBaseURL}/tasks/${taskID}`, this.httpOptions).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    completeTask(task: ITask): Observable<ITask> {
        return this._http.patch<ITask>(`${this.apiBaseURL}/tasks/${task.id}`, task).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    updateTaskText(task: ITask): Observable<ITask> {
        return this._http.patch<ITask>(`${this.apiBaseURL}/tasks/${task.id}`, task).pipe(
            retry(1),
            catchError(this.handleError)
        )
    }

    handleError(error: any) {
        const errorMessage =
            error.error instanceof ErrorEvent
                ? error.error.message
                : `Server-side error!\nError Code: ${error.status}\nMessage: ${error.message}`

        return throwError(errorMessage)
    }
}
