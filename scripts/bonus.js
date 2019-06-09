"use strict";

var Bonus = function(game, x, y, type)
{
  if(type == 0)
  {
    Phaser.Sprite.call(this,game, x, y, 'Aid');
<<<<<<< HEAD
    this.value = 10;
=======
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  }
  else if(type == 1)
  {
    Phaser.Sprite.call(this,game, x, y, 'Ammo');
<<<<<<< HEAD
    this.value = 20;
  }
  else if(type == 5)
  {
    Phaser.Sprite.call(this,game, x, y, 'Extra');
=======
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  }
  game.add.existing(this);
  this.anchor.setTo(0.5);
  this.scale.setTo(1)
  this.type = type;
  game.physics.enable(this);
};

Bonus.prototype = Object.create(Phaser.Sprite.prototype);
Bonus.prototype.constructor = Bonus;
