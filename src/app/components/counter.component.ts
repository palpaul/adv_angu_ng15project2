import { Component, OnDestroy, OnInit, Input,Output,EventEmitter } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    standalone:true, // this is for its not a module based component okay ie. standalone only
    selector:"uhg-counter",
    template:`<h1 id ="hc">COunter component</h1>
    Text1: <input type="text" value="count"/> <br/> 
    Text2: <input type=" text" value="{{count}}"/><br/> <!-- using Interpollation binding-->
    Text3: <input type="text" [value]="count"/><br/><br/> &nbsp; <!-- using property binding-->
    <button class="btn btn-primary" type="submit" (click)="incrementCount()" >Plus+</button> &nbsp;
    <button class="btn btn-primary" type="submit" (click)="decrementCount()" >Minus -</button>
    Text3: <input type="number" [(ngModel)]="count"/><br/><br/> &nbsp; <!-- using two eway data  binding-->
    
    `,
    imports: [FormsModule]
})
//export class CounterComponent implements OnInit,OnDestroy{
    export class CounterComponent{

    constructor(){
        console.log("Counter component Constructed")
        this.count=10
        //let obj:any = document.getElementById("hc") //here it will give null obj error
        //obj.style.color="red"
    }

// life cycle method  executed interannly without wrting the method itself okay but if we are wrting thaos life cycle method means we are overriding the method according to our requirement okay 
    ngOnInit(): void {
        console.log("Counter Component ngOnInint . After Render")

        let obj:any = document.getElementById("hc") //here it will work any manicualtiion do in ngOninin ratherthen constructor okay
        obj.style.color="red"
    }

    ngOnDestroy(): void {
        console.log("Counter component Destroyed")
       // throw new Error("Method not implemented.");
        
    }

    //data member
    //the var count we need to get the value form parent okay  so we need to send more information to parent comopnet about this var so we have to usie decorrator @Input okay
    
    @Input()
    count;
    
    @Output()
    myEvent = new EventEmitter() //this is for sending the data

    incrementCount(){
        this.count++;
        //send the data from perent,,, now who should listen this event == parent so nend required changes in parent compoent menas app component okay
        this.myEvent.emit(this.count);
    }

    decrementCount(){
        this.count--;
    }

}