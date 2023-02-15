import { CommonModule } from "@angular/common";
import { Component, EventEmitter } from "@angular/core";
import { CounterComponent } from "./counter.component";
import { GreetComponent } from "./greet/greet.component";
import {CounterService} from "../services/counter.service"

@Component({
    standalone:true, // this is for its not a module based component okay ie. standalone only
    selector:"optum-root",
    template:`<h1>{{appTitle}} App Count : {{appCount}}</h1>  <!-- Interpollation-->
    <h1 [innerHTML] ="appTitle"></h1>  <!-- property binding-->
    <button class="btn btn-info" (click)="handleButton()"> show/Hide Counter</button>
    <div *ngIf="show">
        <uhg-counter [count]="appCount" (myEvent)="handleMyEvent($event)"></uhg-counter> 
        <!--here count var bind with appCount ie. passing parent var value into child compoent  parent app component to counter cmponent-->
    </div>
    <hr/>
    <!--e contain 3 item vlaue-->
   <!-- how many time you are reapting the app greet component we have to give some dummy vlaue in array menas 5 time then 5 values in array any values okay -->
    
   <h3>how many time you are reapting the app greet component we have to give some dummy vlaue in array menas 5 time then 5 values in array any values okay>
    </h3>

   <app-greet *ngFor="let e of [10,2,5,4,1]"></app-greet> <!-- to display app greet in multipe time use behiaveral derictive ngFor okay-->

    <br/>
    {{10+30}}
    
    `,
    imports: [CounterComponent,GreetComponent,CommonModule],
   // providers:[CounterService] 
})
export class AppComponent{
    //data member
    appTitle:string = "My <u>Angular15</u> standalone applciation"
    show:boolean=true
    appCount = 5000
    
    constructor(private counterservice: CounterService){
        this.appCount = this.counterservice.getCountData()
    }

    //created method for listen the event(in this method data is coming form child componet okay menas counter component)
    //%event is a predefine keyword in angular to store the obj value okay
    handleMyEvent(data:any){
        this.appCount=data;
        this.counterservice.setCountData(data)
    }

    //created method (method member)
    handleButton(){
        // if(this.show){
        //     this.show = false
        // }else{
        //     this.show = true
        // }
        //simpplified condition
        this.show = !this.show
        console.log(this.show);
    }
}