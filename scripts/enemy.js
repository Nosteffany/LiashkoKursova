"use strict";

var Enemy = function(game, x, y)
{
  Phaser.Sprite.call(this,game, x, y, 'enemy');
  game.add.existing(this);
  this.anchor.setTo(0.5);
  this.scale.setTo(1)
  game.physics.enable(this);
  this.body.collideWorldBounds = true;
  this.movementSpeed = 130;
  this.attackSpeed = 60;
  this.dmg = 10;
  this.health = this.maxHealth = 20;
  this.attackDelay = 0;
  this.target = null;
  this.bonus;

  //audio
  this.die = this.game.add.audio('Die', 0.5);
  this.hit = this.game.add.audio('Hit', 0.5);
  //animation
  this.animations.add("Move", [0,1,2],9, true, true);

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
    this.animations.play('Move', true);
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
  this.die.play();
  var bonus = Math.floor(Math.random()*4);
  this.game.state.states[this.game.state.current].__proto__.spawnBonus(this.x, this.y, bonus);
  // this.game.spawnBonus(this.x, this.y);
  Phaser.Sprite.prototype.kill.call(this)
  customValues.countEnemies --;
}
