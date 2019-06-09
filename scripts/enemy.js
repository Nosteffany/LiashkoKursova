"use strict";

var Enemy = function(game, x, y, type)
{
  if(type == 1)
  {
    Phaser.Sprite.call(this,game, x, y, 'enemy1');
    this.scale.setTo(1.5)
    this.movementSpeed = 50;
    this.dmg = 20;
    this.shootDmg = 20;
    this.health = this.maxHealth = 400;

    this.bullets = game.add.group();
    this.weapon = game.add.weapon(30, 'bullet1', 0, this.bullets);


    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 1000;
    this.weapon.trackSprite(this, 0, 0, false);
    this.weapon.bulletLifespan = 1500;
    this.weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    this.weapon.fireLimit = 9999;
  }
  else
  {
    Phaser.Sprite.call(this,game, x, y, 'enemy');
    this.scale.setTo(1)
    this.movementSpeed = 130;
    this.dmg = 10;
    this.health = this.maxHealth = 20;
  }

  game.add.existing(this);
  game.physics.enable(this);
  this.anchor.setTo(0.5);
  this.body.collideWorldBounds = true;
  this.attackSpeed = 60;
  this.attackDelay = 0;
  this.type = type;

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

  if(this.type == 1)
  {
    if(this.alive)
      this.weapon.fireAtSprite(this.target)
  }
}

Enemy.prototype.attack = function(player)
{
  if(this.attackDelay > 0)
  {
    return;
  }

  player.damage(this.dmg);
  this.attackDelay = this.attackSpeed;
}

Enemy.prototype.damage = function(dmg)
{
  Phaser.Sprite.prototype.damage.call(this,dmg)
}

Enemy.prototype.shoot = function(player)
{
  if(this.attackDelay > 0)
  {
    return;
  }
  var enemyBullet = enemyBullets.getFirstExists(false);
  this.physics.arcade.moveToObject(enemyBullet,player,600);
  // player.damage(this.shootDmg);
  this.attackDelay = this.attackSpeed;
}

Enemy.prototype.kill = function()
{
  this.die.play();
  var bonus = Math.floor(Math.random()*4);
  if(this.type == 1)
  {
    bonus = 5;
  }

  this.game.state.states[this.game.state.current].__proto__.spawnBonus(this.x, this.y, bonus);
  // this.game.spawnBonus(this.x, this.y);
  Phaser.Sprite.prototype.kill.call(this)
  customValues.countEnemies --;
  customValues.kills ++;
}
