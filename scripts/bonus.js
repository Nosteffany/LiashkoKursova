"use strict";

var Bonus = function(game, x, y, type)
{
  if(type == 0)
  {
    Phaser.Sprite.call(this,game, x, y, 'Aid');
    this.value = 10;
  }
  else if(type == 1)
  {
    Phaser.Sprite.call(this,game, x, y, 'Ammo');
    this.value = 20;
  }
  else if(type == 5)
  {
    Phaser.Sprite.call(this,game, x, y, 'Extra');
  }
  game.add.existing(this);
  this.anchor.setTo(0.5);
  this.scale.setTo(1)
  this.type = type;
  game.physics.enable(this);
};

Bonus.prototype = Object.create(Phaser.Sprite.prototype);
Bonus.prototype.constructor = Bonus;
