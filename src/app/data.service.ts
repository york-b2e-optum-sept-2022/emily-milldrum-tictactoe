import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ITeam} from "./interfaces/ITeam";
import {IBox} from "./interfaces/IBox";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  board: string[] = [];
  teamOne: ITeam = {
    name: "",
    red: true,
    team: 'X'
  };
  teamTwo: ITeam = {
    name: "",
    red: false,
    team: 'O'
  };
  boxes: IBox[] = [];

  $teamOne: Subject<string> = new Subject<string>();
  $teamTwo: Subject<string> = new Subject<string>();
  constructor() {
    for (let i = 0; i < 9; i++) {
      this.boxes.push(
        {
          id: i,
          value: " - ",
          team: "",
        }
      );
    }
  }

  setTeams(teamOne: string, teamTwo: string){
    this.teamOne.name = teamOne;
    this.teamTwo.name = teamTwo;
    this.$teamOne.next(this.teamOne.name);
    this.$teamTwo.next(this.teamTwo.name);
  }


  takeTurns: boolean = true;

  setValue(incBox: IBox){
    const index = this.boxes.findIndex(cur => cur.id === incBox.id);
    if (index === null){
      console.error('unable to find box');
      return;
    }
    if (this.takeTurns){
      this.boxes[index].value = "x";
      this.checkWin();
      this.takeTurns = false;
    }
    else{
      this.boxes[index].value = "o";
      this.checkWin();
      this.takeTurns = true;
    }
  }

  // possibly cleaner logic?
  // const winCombos = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  //   [0, 4, 8],
  //   [2, 4, 6],
  //   [0, 3, 6],
  //   [1, 4, 7],
  //   [2, 5, 8]
  // ]
  victory: boolean = false;
  checkWin() {
    if (this.boxes[0].value !== " - "){
      if (this.boxes[0].value === this.boxes[1].value && this.boxes[1].value === this.boxes[2].value) {
        console.log(
          this.boxes[0].value + this.boxes[1].value + this.boxes[2].value + ' win - row 1')
      }
      if (this.boxes[0].value === this.boxes[4].value && this.boxes[0].value === this.boxes[8].value) {
        console.log(
          this.boxes[0].value + this.boxes[4].value + this.boxes[8].value + ' win - diag')
      }
      if (this.boxes[0].value === this.boxes[3].value && this.boxes[0].value === this.boxes[6].value) {
        console.log(
          this.boxes[0].value + this.boxes[3].value + this.boxes[6].value + ' win - column 1')
      }
    }
    if (this.boxes[3].value !== " - ") {
      if (this.boxes[3].value === this.boxes[4].value && this.boxes[3].value === this.boxes[5].value) {
        console.log(
          this.boxes[3].value + this.boxes[4].value + this.boxes[5].value + ' win - row 2')
      }
    }
    if (this.boxes[6].value !== " - ") {
      if (this.boxes[6].value === this.boxes[7].value && this.boxes[6].value === this.boxes[8].value) {
        console.log(
          this.boxes[6].value + this.boxes[7].value + this.boxes[8].value + ' win - row 3')
      }
      if (this.boxes[2].value === this.boxes[4].value && this.boxes[2].value === this.boxes[6].value) {
        console.log(
          this.boxes[2].value + this.boxes[4].value + this.boxes[6].value + ' win - diag')
      }
    }
  }
}
