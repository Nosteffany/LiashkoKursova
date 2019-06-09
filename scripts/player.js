"use strict";

var Player = function(game, x=256,y=256, id)
{
  // basic Player's config
  Phaser.Sprite.call(this,game, x, y, "hero");
  // player cfg
  game.add.existing(this);
  this.id = id;
  this.anchor.setTo(0.5);
  this.scale.setTo(1.5);
  this.smoothed = false;
  game.physics.enable(this);
  this.body.collideWorldBounds = true;
<<<<<<< HEAD
  // this.dmg = 5;
  this.health = this.maxHealth = 100;

  // Weapon and bullets
  this.bullets = game.add.group();
  this.weapon = game.add.weapon(30, 'bullet', 0, this.bullets);
=======
  this.dmg = 5;
  this.health = this.maxHealth = 100;

  // weapon
  this.bullets = game.add.group();
  this.weapon = game.add.weapon(20, 'bullet', 0, this.bullets);
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  this.weapon.bulletSpeed = 400;
  this.weapon.fireRate = 100;
  this.weapon.trackSprite(this, 0, 0, false);
  this.weapon.bulletLifespan = 1500;
  this.weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
<<<<<<< HEAD
  this.weapon.fireLimit = 30;

  this.weapon.onFire.add(onFireHandler, this);

  // Sound effects
  this.step = this.game.add.audio('Step');
  this.shooting = this.game.add.audio('Shoot',0.5);
  this.reloading = this.game.add.audio('Reload',0.4);


  this.cursors = game.input.keyboard.createCursorKeys();
  // Create animations
=======
  this.weapon.fireLimit = 20;

  //sound effects
  this.stepA = this.game.add.audio('Step');
  this.shooting = this.game.add.audio('Shoot',0.5);
  this.reloading = this.game.add.audio('Reload',0.4);
  // on fire event
  this.weapon.onFire.add(fire, this);


  // keyboard event listener
  this.cursors = game.input.keyboard.createCursorKeys();
  // animations
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  this.animations.add("Down", [0,1,2,3],12, true, true);
  this.animations.add("Left", [4,5,6,7],12, true, true);
  this.animations.add("Right", [8,9,10,11],12, true, true);
  this.animations.add("Up", [12,13,14,15],12, true, true);
  this.animations.add("FrontShoot", [16],12, true, true);
  this.animations.add("LeftShoot", [17],12, true, true);
  this.animations.add("RightShoot", [18],12, true, true);

<<<<<<< HEAD
  function onFireHandler()
=======
  //on fire handler
  function fire()
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  {
    customValues.activeAmmo --;
    this.shooting.play();
  }
<<<<<<< HEAD

=======
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function()
{
// move player
  this.body.velocity.setTo(0);
<<<<<<< HEAD
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
=======
// vertical moving
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
  // horizontal moving
 if(this.cursors.left.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.A))
  {
    this.body.velocity.x = -customValues.playerSpeed;
  }

  else if(this.cursors.right.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.D))
  {
    this.body.velocity.x = customValues.playerSpeed;
  }
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
}
  // play animations

  if(this.cursors.up.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.W))
  {
    var anim = this.animations.play('Up', true);
<<<<<<< HEAD
    anim.onLoop.add(function(){this.step.play()},this);
=======
    anim.onLoop.add(function(){this.stepA.play()},this);
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782

  }

  else if(this.cursors.down.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.S))
  {
    var anim = this.animations.play('Down', true);
<<<<<<< HEAD
    anim.onLoop.add(function(){this.step.play()},this);
=======
    anim.onLoop.add(function(){this.stepA.play()},this);
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  }

  else if(this.cursors.down.isDown && this.cursors.left.isDown)
  {
    var anim = this.animations.play('Down', true);
<<<<<<< HEAD
    anim.onLoop.add(function(){this.step.play()},this);
=======
    anim.onLoop.add(function(){this.stepA.play()},this);
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  }

  else if(this.cursors.left.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.A))
  {
    var anim = this.animations.play('Left', true);
<<<<<<< HEAD
    anim.onLoop.add(function(){this.step.play()},this);
=======
    anim.onLoop.add(function(){this.stepA.play()},this);
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  }

  else if(this.cursors.right.isDown || this.game.input.keyboard.isDown(Phaser.Keyboard.D))
  {
    var anim = this.animations.play('Right', true);
<<<<<<< HEAD
    anim.onLoop.add(function(){this.step.play()},this);
=======
    anim.onLoop.add(function(){this.stepA.play()},this);
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
  }

  else
  {
    this.animations.stop();
  }


<<<<<<< HEAD

=======
  // rotate sprite to mouse pointer
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
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
<<<<<<< HEAD

=======
// reloading
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
if(this.game.input.keyboard.isDown(Phaser.Keyboard.R) && customValues.ammo > 0 && !this.reloading.isPlaying)
{

    this.reloading.play();
    this.weapon.resetShots();
<<<<<<< HEAD

    if((30 - customValues.activeAmmo) >= customValues.ammo)
=======
    console.log(this.x, this.y);

    if((20 - customValues.activeAmmo) >= customValues.ammo)
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
    {
      customValues.activeAmmo += customValues.ammo;
      customValues.ammo = 0;
    }
    else
    {
<<<<<<< HEAD
      customValues.ammo -= (30 - customValues.activeAmmo);
      customValues.activeAmmo += (30 - customValues.activeAmmo);
=======
      customValues.ammo -= (20 - customValues.activeAmmo);
      customValues.activeAmmo += (20 - customValues.activeAmmo);
>>>>>>> c131de532495b4ad02105d251c9c6d55104d6782
    }
}

};
Player.prototype.rDamage = function(lo, hi)
{
    return Math.floor(Math.random() * (hi - lo) + lo);
}
