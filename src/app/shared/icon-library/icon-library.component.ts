import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from "@angular/core"
import { iconLibrary } from "./icon-library.source"

@Component({
    selector: "app-icon-library",
    templateUrl: "./icon-library.component.html",
    styleUrls: ["./icon-library.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class IconLibraryComponent implements OnInit {
    @ViewChild("iconPlaceholderDiv") iconPlaceholderDiv: ElementRef
    @Input() icon: string

    private _iconLibrary = iconLibrary

    constructor() {}

    ngOnInit() {
        this.iconPlaceholderDiv.nativeElement.outerHTML = this._iconLibrary[this.icon]
    }
}
