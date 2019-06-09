"use strict";

var Player = function(game, x=256,y=256)
{
  // basic Player's config
  Phaser.Sprite.call(this,game, x, y, "hero");
  game.add.existing(this);
  this.anchor.setTo(0.5);
  this.scale.setTo(1.5);
  this.smoothed = false;
  game.physics.enable(this);
  this.body.collideWorldBounds = true;
  // this.dmg = 5;
  this.health = this.maxHealth = 100;

  // Weapon and bullets
  this.bullets = game.add.group();
  this.weapon = game.add.weapon(30, 'bullet', 0, this.bullets);
  this.weapon.bulletSpeed = 400;
  this.weapon.fireRate = 100;
  this.weapon.trackSprite(this, 0, 0, false);
  this.weapon.bulletLifespan = 1500;
  this.weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
  this.weapon.fireLimit = 30;

  this.weapon.onFire.add(onFireHandler, this);

  // Sound effects
  this.step = this.game.add.audio('Step');
  this.shooting = this.game.add.audio('Shoot',0.5);
  this.reloading = this.game.add.audio('Reload',0.4);


  this.cursors = game.input.keyboard.createCursorKeys();
  // Create animations
  this.animations.add("Down", [0,1,2,3],12, true, true);
  this.animations.add("Left", [4,5,6,7],12, true, true);
  this.animations.add("Right", [8,9,10,11],12, true, true);
  this.animations.add("Up", [12,13,14,15],12, true, true);
  this.animations.add("FrontShoot", [16],12, true, true);
  this.animations.add("LeftShoot", [17],12, true, true);
  this.animations.add("RightShoot", [18],12, true, true);

  function onFireHandler()
  {
    customValues.activeAmmo --;
    this.shooting.play();
  }

};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function()
{

  this.body.velocity.setTo(0);
  if(!this.game.input.activePointer.isDown)
  {
    // Vertical mooving
    if(this.cursors.up.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.W))
    {
      this.body.velocity.y =-customValues.playerSpeed;
    }

    else if(this.cursors.down.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.S))
    {
      this.body.velocity.y = customValues.playerSpeed;
    }
    // Horizontal mooving
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
    var anim = this.animations.play('Up', true);
    anim.onLoop.add(function(){this.step.play()},this);

  }

  else if(this.cursors.down.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.S))
  {
    var anim = this.animations.play('Down', true);
    anim.onLoop.add(function(){this.step.play()},this);
  }

  else if(this.cursors.down.isDown && this.cursors.left.isDown)
  {
    var anim = this.animations.play('Down', true);
    anim.onLoop.add(function(){this.step.play()},this);
  }

  else if(this.cursors.left.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.A))
  {
    var anim = this.animations.play('Left', true);
    anim.onLoop.add(function(){this.step.play()},this);
  }

  else if(this.cursors.right.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.D))
  {
    var anim = this.animations.play('Right', true);
    anim.onLoop.add(function(){this.step.play()},this);
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
      if(customValues.activeAmmo > 0 && !this.reloading.isPlaying)
      {
        this.weapon.fireAtPointer();

      }
    }

if(this.game.input.keyboard.isDown(Phaser.Keyboard.R) && customValues.ammo > 0 && !this.reloading.isPlaying)
{

    this.reloading.play();
    this.weapon.resetShots();

    if((30 - customValues.activeAmmo) >= customValues.ammo)
    {
      customValues.activeAmmo += customValues.ammo;
      customValues.ammo = 0;
    }
    else
    {
      customValues.ammo -= (30 - customValues.activeAmmo);
      customValues.activeAmmo += (30 - customValues.activeAmmo);
    }
}

};
Player.prototype.rDamage = function(lo, hi)
{
    return Math.floor(Math.random() * (hi - lo) + lo);
}
