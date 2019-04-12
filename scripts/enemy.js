"use strict";

var Enemy = function(game, x, y)
{
  Phaser.Sprite.call(this,game, x, y, 'enemy');
  game.add.existing(this);
  this.anchor.setTo(0.5);
  this.scale.setTo(2)
  game.physics.enable(this);
  this.body.collideWorldBounds = true;
  this.movementSpeed = 100;
  this.attackSpeed = 60;
  this.dmg = 10;
  this.health = this.maxHealth = 20;
  this.attackDelay = 0;
  this.target = null;

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function()
{
  if(this.attackDelay > 0)
  {
    this.attackDelay--;
  }

  if(this.target != null && this.target.alive)
  {
    this.game.physics.arcade.moveToObject(this, this.target, this.movementSpeed);
  }
  this.body.moves = this.target.alive
}

Enemy.prototype.attack = function(player)
{
  if(this.attackDelay > 0)
  {
    return;
    customValues.ammo--;
  }

  player.damage(this.dmg);
  this.attackDelay = this.attackSpeed;
}

Enemy.prototype.damage = function(dmg)
{
  Phaser.Sprite.prototype.damage.call(this,dmg)
}

Enemy.prototype.kill = function()
{
  Phaser.Sprite.prototype.kill.call(this)
}
