import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"

import { AppComponent } from "./app.component"
import { PageUserComponent } from "./page-user/page-user.component"
import { TaskCreateComponent } from "./task-create/task-create.component"
import { TaskListComponent } from "./task-list/task-list.component"

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconLibraryComponent } from './icon-library/icon-library.component'

@NgModule({
    declarations: [AppComponent, TaskCreateComponent, PageUserComponent, TaskListComponent, IconLibraryComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
