import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"

import { IconLibraryComponent } from "./icon-library/icon-library.component"

@NgModule({
    declarations: [IconLibraryComponent],
    imports: [CommonModule],
    exports: [IconLibraryComponent]
})
export class SharedModule {}
