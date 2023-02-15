import {Injectable} from "@angular/core"
import {BehaviorSubject, VirtualTimeScheduler} from "rxjs"

@Injectable({
    providedIn:"root"
})
export class CounterService{

    private countData=1
    //reactive data change
    currentCountData = new BehaviorSubject(this.countData)


    getCountData(){
        return this.countData
    }

    setCountData(newval:number){
        this.countData= newval
        console.log("Count Data changed : ", this.countData)
       
        if(this.countData > 5){
            this.currentCountData.error("negatinv value")
        }
        this.currentCountData.next(this.countData)
        console.log("*****************************************")
    }


}