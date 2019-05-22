import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"

import { CreateModule } from "./create/create.module"
import { ListModule } from "./list/list.module"
import { SharedModule } from "./shared/shared.module"

import { AppComponent } from "./app.component"
import { PageUserComponent } from "./page-user/page-user.component"

@NgModule({
    declarations: [AppComponent, PageUserComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule, ListModule, CreateModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
