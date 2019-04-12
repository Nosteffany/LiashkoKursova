"use strict"

var Project = Project||{};

Project.gameplay = function(game){};

Project.gameplay.prototype =
{
  preload: function()
  {
    this.stage.backgroundColor = "#3b4047";

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('q','tiles');
    this.floor = this.map.createLayer('1');
    this.walls = this.map.createLayer('2');
    this.floor.resizeWorld();

    this.map.setCollisionByExclusion([257,373], true, '2');
    //this.walls.debug = true;
    //this.header = this.add.text(219, 219, "GGame", {font:"bold 32px", fill:"white", stroke:"red", strokeThickness:1})
    //box(hero)

    // this.cursors = this.input.keyboard.createCursorKeys();
    this.bulletTimer = 0;


    //this.bullets = customMethods.newGroup(16,'bullet');

    // this.bullets.setAll('outOfBoundsKill', true);
    // this.bullets.setAll('checkWorldBounds', true);

    this.character = new Player(this.game, 256, 450)
    this.camera.follow(this.character);
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
    this.physics.arcade.collide(this.character, this.enemy, this.collideEnemy, null, this);
    this.physics.arcade.overlap(this.character.weapon.bullets, this.enemy, this.hitEnemy, null, this);
    this.physics.arcade.collide([this.character, this.enemy], this.walls);

  },

  collideEnemy: function(a,b)
  {
      b.attack(a);
  },

  hitEnemy: function(a,b)
  {
      b.kill();
      a.damage(this.character.dmg);
  }

};
