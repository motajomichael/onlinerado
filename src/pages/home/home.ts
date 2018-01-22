import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { RadioPlayer } from '../../app/radio';

@Component({
  templateUrl: 'home.html',
  providers: [RadioPlayer]
})
export class HomePage {
	
	player:any;
  constructor(player: RadioPlayer) {
  	this.player = player;
  }

  play() {
  	this.player.play().then(() => {
  		console.log('Playing');
  	});
  }

  pause() {
  	this.player.pause();
  }
}