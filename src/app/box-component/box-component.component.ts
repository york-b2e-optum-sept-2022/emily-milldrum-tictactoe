import {Component, Input, OnInit} from '@angular/core';
import {IBox} from "../interfaces/IBox";
import {DataService} from "../data.service";

@Component({
  selector: 'app-box-component',
  templateUrl: './box-component.component.html',
  styleUrls: ['./box-component.component.css']
})
export class BoxComponentComponent implements OnInit {

  @Input() box!: IBox;

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

  setValue(){
    this.dataService.setValue(this.box);
  }

  // setValue(){
  //   if (this.takeTurns){
  //   this.box.value = "x";
  //   this.takeTurns = false;
  //   }
  //  else{
  //    this.box.value = "o";
  //    this.takeTurns = true;
  //   }
  // }
  //

}
