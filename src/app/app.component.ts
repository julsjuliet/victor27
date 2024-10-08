import { DatePipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'victor-27-app';

  livesNumber: number = 3;
  isGameStarted: boolean = false;
  isVictorReady: boolean = false;

  showHome: boolean = true;
  showExplanation: boolean = false;
  showQuizz: boolean = false;
  showDoors: boolean = false;
  showHangman: boolean = false;
  showGameOver: boolean = false;
  showBirthday: boolean = false;

  showBrokenHeart: boolean = false;

  constructor(private datepipe: DatePipe){}

  ngOnInit(): void {
    this.checkDate();
  }

  checkDate(): void{
    const today = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
    const victorBirthday: string = '2024-09-03';
    if(today && today >= victorBirthday){
      this.isGameStarted = true;
    }
  }

  returnHome(): void{
    this.isVictorReady = false;
    this.showDoors = false;
    this.showExplanation = false;
    this.showHangman = false;
    this.showQuizz = false; 
    this.showGameOver = false;
    this.showHome = true;
    this.livesNumber = 3;
  }

  victorIsReadyToStart():void{
    this.showHome = false;
    this.showExplanation = true;
    this.isVictorReady = true;
  }

  showQuizzComponent(): void{
    this.showExplanation = false;
    this.showQuizz = true;
  }

  showDoorsComponent():void{
    this.showQuizz = false;
    this.showDoors = true;
  }

  showHangmanComponent():void{
    this.showDoors = false;
    this.showHome = false;
    this.showQuizz = false;
    this.showExplanation = false;
    this.showHangman = true;
  }

  showBirthdayComponent():void{
    this.showHangman = false;
    this.showHome = false;
    this.showQuizz = false;
    this.showExplanation = false;
    this.showBirthday = true;
  }

  subtractOneLive():void{
    this.livesNumber--;
    this.showBrokenHeart = true;
    setTimeout(() => {
      this.showBrokenHeart = false;
    }, 1500);
  }

  restartGame(): void{
    this.livesNumber = 3;
    this.showGameOver = false;
    this.showQuizz = true;
  }
  

  
}
