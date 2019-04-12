"use strict"

var Project = Project||{};

Project.gameplay = function(game){};

Project.gameplay.prototype =
{
  preload: function()
  {
    this.stage.backgroundColor = "#3b4047";
    // this.header = this.add.text(32, 32, "GGame", {font:"bold 32px", fill:"white", stroke:"red", strokeThickness:1})
    //box(hero)

    // this.cursors = this.input.keyboard.createCursorKeys();
    this.bulletTimer = 0;

    //this.bullets = customMethods.newGroup(16,'bullet');

    // this.bullets.setAll('outOfBoundsKill', true);
    // this.bullets.setAll('checkWorldBounds', true);

    this.character = new Player(this.game, 256, 256)
    // this.character = this.add.sprite(512 ,256, 'hero');
    // this.character.anchor.setTo(0.5,0.5);
    // this.character.scale.setTo(2);
    // this.character.smoothed = false;
    //ANIMATION
    // this.character.animations.add("Down", [0,1,2,3],12, true, true);
    // this.character.animations.add("Left", [4,5,6,7],12, true, true);
    // this.character.animations.add("Right", [8,9,10,11],12, true, true);
    // this.character.animations.add("Up", [12,13,14,15],12, true, true);
    // this.character.animations.add("FrontShoot", [16],12, true, true);
    // this.character.animations.add("LeftShoot", [17],12, true, true);
    // this.character.animations.add("RightShoot", [18],12, true, true);

    this.enemy = new Enemy(this.game, 384, 512);
    this.enemy.target = this.character;

    // this.bullets = this.add.group();
    // this.weapon = this.add.weapon(8, 'bullet', 0, this.bullets);
    // this.weapon.bulletSpeed = 400;
    // this.weapon.fireRate = 125;
    // this.weapon.bounds = new Phaser.Rectangle(this.character.x, this.character.y, this.character.width, this.character.height*5);
    // this.weapon.trackSprite(this.character, 0, -40, false);
    // this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    //this.weapon.autofire = true;


    //buttons
    // this.btn = this.add.button(32,32, "button", this.writeText, this, 0,0,1);

    // this.physics.startSystem(Phaser.Physics.ARCADE);
    // this.physics.enable(this.character);
    // this.character.body.collideWorldBounds = true;



  },

  update: function()
  {
   //  var stay = true;
   //  this.character.body.velocity.setTo(0);
   //  if(this.cursors.up.isDown || this.input.keyboard.isDown(Phaser.Keyboard.W))
   //  {
   //    stay = false;
   //    this.character.body.velocity.y =-customValues.playerSpeed;
   //  }
   //
   //  else if(this.cursors.down.isDown || this.input.keyboard.isDown(Phaser.Keyboard.S))
   //  {
   //    stay = false;
   //    this.character.body.velocity.y = customValues.playerSpeed;
   //  }
   //  // HORIZONTAL
   // if(this.cursors.left.isDown || this.input.keyboard.isDown(Phaser.Keyboard.A))
   //  {
   //    stay = false;
   //    this.character.body.velocity.x = -customValues.playerSpeed;
   //  }
   //
   //  else if(this.cursors.right.isDown || this.input.keyboard.isDown(Phaser.Keyboard.D))
   //  {
   //    stay = false;
   //    this.character.body.velocity.x = customValues.playerSpeed;
   //  }

    // var targetAngle = this.game.math.angleBetween(this.character.x, this.character.y,this.game.input.activePointer.x, this.game.input.activePointer.y);


    // if(this.input.activePointer.isDown && stay)
    // {
    //   this.fire();
    // }

    if(this.input.keyboard.isDown(Phaser.Keyboard.R))
    {
      customValues.ammo = 20;
    }





    //ANIMATIONS UPDATE
    // if(this.cursors.up.isDown || this.input.keyboard.isDown(Phaser.Keyboard.W))
    // {
    //   this.character.animations.play('Up', true);
    // }
    //
    // else if(this.cursors.down.isDown || this.input.keyboard.isDown(Phaser.Keyboard.S))
    // {
    //   this.character.animations.play('Down', true);
    // }
    //
    // else if(this.cursors.down.isDown && this.cursors.left.isDown)
    // {
    //   this.character.animations.play('Down', true);
    // }
    //
    // else if(this.cursors.left.isDown || this.input.keyboard.isDown(Phaser.Keyboard.A))
    // {
    //   this.character.animations.play('Left', true);
    // }
    //
    // else if(this.cursors.right.isDown || this.input.keyboard.isDown(Phaser.Keyboard.D))
    // {
    //   this.character.animations.play('Right', true);
    // }
    //
    // else
    // {
    //   this.character.animations.stop();
    // }


  },

  // fire: function()
  // {
  //   var bulletX;
  //   var bulletY;
  //   var targetAngle = this.game.math.angleBetween(this.character.x, this.character.y,this.game.input.activePointer.x, this.game.input.activePointer.y);
  //   console.log(targetAngle);
  //
  //   if(targetAngle >= -2.4 && targetAngle <= -0.7)
  //   {
  //       this.character.animations.play('Up',true);
  //       bulletX = this.character.x
  //       bulletY = this.character.y
  //   }
  //
  //   else if(targetAngle > -0.7 && targetAngle <= 0.7 )
  //   {
  //       this.character.animations.play('RightShoot',true);
  //       bulletX = this.character.x+17
  //       bulletY = this.character.y+10
  //   }
  //
  //   else if(targetAngle > 0.5 && targetAngle <= 2.4)
  //   {
  //       this.character.animations.play('FrontShoot',true);
  //       bulletX = this.character.x
  //       bulletY = this.character.y+10
  //   }
  //
  //   else
  //   {
  //       this.character.animations.play('LeftShoot',true);
  //       bulletX = this.character.x-17
  //       bulletY = this.character.y+10
  //   }
  //
  //
  //   if(this.time.now > this.bulletTimer && customValues.ammo != 0)
  //   {
  //     var bullet = this.bullets.getFirstExists(false, false, bulletX, bulletY);
  //
  //     if(bullet)
  //     {
  //       bullet.angle = this.character.angle + 90;
  //       this.physics.arcade.moveToPointer(bullet, customValues.bulletSpeed);
  //       this.bulletTimer = this.time.now + customValues.playerFireRate;
  //       customValues.ammo -= 1;
  //       console.log(customValues.ammo)
  //
  //     }
  //   }
  // }
};
