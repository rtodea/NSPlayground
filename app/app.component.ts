import { Component, OnInit } from "@angular/core";
import { Page } from 'tns-core-modules/ui/page';
import statusBar = require("nativescript-status-bar");


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor(private page: Page) {}

    ngOnInit() {
        // The ActionBar is different than the StatusBar
        // this.page.actionBarHidden = true;
        statusBar.hide();
    }
}
