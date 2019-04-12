"use strict";

var Player = function(game, x=256,y=256)
{
  Phaser.Sprite.call(this,game, x, y, "hero");
  game.add.existing(this);
  this.anchor.setTo(0.5);
  this.scale.setTo(1.5);
  this.smoothed = false;
  game.physics.enable(this);
  this.body.collideWorldBounds = true;
  this.dmg = 2;
  this.health = this.maxHealth = 100;

  this.bullets = game.add.group();
  this.weapon = game.add.weapon(16, 'bullet', 0, this.bullets);
  this.weapon.bulletSpeed = 400;
  this.weapon.fireRate = 125;
  //this.weapon.bounds = new Phaser.Rectangle(this.x, this.character.y, this.character.width, this.character.height*5);
  this.weapon.trackSprite(this, 0, 0, false);
  this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;

  this.cursors = game.input.keyboard.createCursorKeys();

  this.animations.add("Down", [0,1,2,3],12, true, true);
  this.animations.add("Left", [4,5,6,7],12, true, true);
  this.animations.add("Right", [8,9,10,11],12, true, true);
  this.animations.add("Up", [12,13,14,15],12, true, true);
  this.animations.add("FrontShoot", [16],12, true, true);
  this.animations.add("LeftShoot", [17],12, true, true);
  this.animations.add("RightShoot", [18],12, true, true);

};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function()
{

  this.body.velocity.setTo(0);
if(!this.game.input.activePointer.isDown)
{
  if(this.cursors.up.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.W))
  {
    this.body.velocity.y =-customValues.playerSpeed;
  }

  else if(this.cursors.down.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.S))
  {

    this.body.velocity.y = customValues.playerSpeed;
  }
  // HORIZONTAL
 if(this.cursors.left.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.A))
  {

    this.body.velocity.x = -customValues.playerSpeed;
  }

  else if(this.cursors.right.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.D))
  {

    this.body.velocity.x = customValues.playerSpeed;
  }
}
  //ANIMATIONS

  if(this.cursors.up.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.W))
  {
    this.animations.play('Up', true);
  }

  else if(this.cursors.down.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.S))
  {
    this.animations.play('Down', true);
  }

  else if(this.cursors.down.isDown && this.cursors.left.isDown)
  {
    this.animations.play('Down', true);
  }

  else if(this.cursors.left.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.A))
  {
    this.animations.play('Left', true);
  }

  else if(this.cursors.right.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.D))
  {
    this.animations.play('Right', true);
  }

  else
  {
    this.animations.stop();
  }

  if(this.game.input.activePointer.isDown && this.alive)
  {
      var targetAngle = this.game.physics.arcade.angleToPointer(this)


      if(targetAngle >= -2.4 && targetAngle <= -0.7)
      {
          this.animations.play('Up',true);
      }

      else if(targetAngle > -0.7 && targetAngle <= 0.7 )
      {
          this.animations.play('RightShoot',true);
      }

      else if(targetAngle > 0.5 && targetAngle <= 2.4)
      {
          this.animations.play('FrontShoot',true);
      }

      else
      {
          this.animations.play('LeftShoot',true);
      }
      this.weapon.fireAtPointer();

  }
};
