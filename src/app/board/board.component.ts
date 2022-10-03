import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {IBox} from "../interfaces/IBox";
import {v4 as uuidv4} from "uuid";
import {DataService} from "../data.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnChanges {

  boxesDisplay: IBox[] = [];
  boxes: IBox[] = [];

  constructor(private dataService: DataService) {
    this.boxes = this.dataService.boxes;
  }

  ngOnInit(): void {

      this.boxesDisplay = [...this.boxes];
    }

  ngOnChanges(changes: SimpleChanges){
    this.boxesDisplay = [...this.boxes];
  }
  }

