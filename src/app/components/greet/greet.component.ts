import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-greet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  greetCount = 300

  //we can call our service in this way also // without using constructor we can Inject our service in compoent okay
  countServ:CounterService = inject(CounterService)

  //injecting service using constructor  okay
  // constructor(private counterservice:CounterService){
  // }


  ngOnInit(){
    // now cwe can see the var countData 111 coming from service to in this greet compoent in greetCount  okay

    //this.greetCount = this.countServ.getCountData()
    this.countServ.currentCountData.subscribe({
      next: (data) =>this.greetCount=data,     
      error: (err)=>console.log("Error occured", err),
      complete: ()=>console.log("completed")


    })
  }
}
