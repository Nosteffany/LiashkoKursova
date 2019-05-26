"use strict"


var Project = Project||{};
var src;
Project.gameplay = function(game){};

Project.gameplay.prototype =
{

  preload: function()
  {
    this.stage.backgroundColor = "#3b4047";
    this.b;

    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('TS2','tiles');
    this.map.addTilesetImage('TS1','tiles1');
    this.map.addTilesetImage('TS3','tiles2');
    this.floor = this.map.createLayer('L1');
    this.prewalls = this.map.createLayer('L2');
    this.walls = this.map.createLayer('L3');
    this.floor.resizeWorld();

    this.map.setCollisionByExclusion([], true, 'L3');

    this.character = new Player(this.game, 256, 700)
    this.camera.follow(this.character, Phaser.FOLLOW_TOPDOWN, 1, 1);

    //HUD
    this.hpBar = customMethods.newText(70, 580, 'HP: ' + this.character.health, 40, 0.5, 0.5, 'center', '#00d647', 'black', 4);
    this.ammo = customMethods.newText(700, 580, customValues.activeAmmo + '^', 35, 0.5, 0.5, 'center', '#ffce3d', 'black', 4);
    this.ammo.fixedToCamera = true;
    this.hpBar.fixedToCamera = true;
    //Fullscreen
    this.input.keyboard.addKey(Phaser.Keyboard.P).onDown.add(this.switchFullScreen, this)

    this.time.events.loop(customValues.spawnTimer, this.spawnEnemy, this);
    this.enemies = this.add.group();
    this.bonuses = this.add.group();
    this.spawn_list = [[100,189], [1045, 178], [559, 1023]];


    this.music = this.add.audio('Main_Theme', 0.3, true);
    this.music.play("", 0, 0.7, true, )
    src = this;
  },

  switchFullScreen:function()
  {
    if(this.scale.isFullScreen)
    {
      this.scale.stopFullScreen()
    }
    else
    {
      this.scale.startFullScreen(true, true);
    }
  },

  update: function()
  {
    this.physics.arcade.collide(this.character, this.enemies, this.collideEnemy, null, this);
    this.physics.arcade.overlap(this.enemies, this.character.weapon.bullets, this.hitEnemy, null, this);
    this.physics.arcade.collide([this.character, this.enemies], this.walls);
    this.physics.arcade.collide(this.enemies);
    this.physics.arcade.collide(this.character.weapon.bullets, this.walls, this.kill, null, this);
    this.physics.arcade.overlap([this.character, this.enemies], this.bonuses, this.al, null, this);


    this.ammo.text = customValues.activeAmmo + '/' + customValues.ammo;

  },
  al: function(a,b)
  {
    if(b.type == 0)
    {
      a.heal(10);
      this.hpBar.text = 'HP: ' + this.character.health;
    }
    else if(b.type == 1)
    {
      customValues.ammo+=10;
      this.ammo.text = customValues.activeAmmo + '/' + customValues.ammo;
    }
    b.kill()
  },

  collideEnemy: function(a,b)
  {
      b.attack(a);
      this.hpBar.text = 'HP: ' + this.character.health
      this.camera.shake(0.01, 50);
  },

  hitEnemy: function(a,b)
  {
      b.kill();
      a.damage(this.character.dmg);
  },

  kill: function(object)
  {
    object.kill();
  },

  spawnEnemy: function()
  {
    if(customValues.countEnemies < customValues.enemiesLimit)
    {
        var spawn = this.spawn_list[Math.floor(Math.random()*3)];
        var newEnemy = new Enemy(this.game, spawn[0], spawn[1]);
        newEnemy.target = this.character;
        this.enemies.add(newEnemy);
        customValues.countEnemies++;
    }
    else
    {
      return
    }
  },

  spawnBonus: function(x,y,type)
  {
    if(type >= 0 && type <= 1)
    {
      var bonus = new Bonus(src.game, x, y, type);
      src.bonuses.add(bonus);
    }
  }

};
