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
      this.takeTurns = false;
    }
    else{
      this.boxes[index].value = "o";
      this.takeTurns = true;
    }
  }
}
