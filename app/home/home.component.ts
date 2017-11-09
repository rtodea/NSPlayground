import { Component, OnInit } from "@angular/core";
import { EventData } from 'tns-core-modules/data/observable';
import { Label } from 'tns-core-modules/ui/label';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public oneway = "One way bound label";
    public twoway = "Two way bound label";
    public counter: number;

    constructor() {
        this.counter = 0;
    }

    changeLabelText() {
        this.twoway += " Two way bound label ";
        this.counter += 1;
    }

    onTextChanged(args: EventData) {
        let label = <Label>args.object;
        console.log("onTextChanged for " + this.counter + " times for element " + label);
    }

    ngOnInit() {
    }

}
