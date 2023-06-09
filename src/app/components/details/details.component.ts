import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit{

  constructor() {}

  ngOnInit(): void {
    console.log("ngOninit called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
  }
}
