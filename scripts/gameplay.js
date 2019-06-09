"use strict"
// Creating Project scope
var Project = Project||{};
// Creating global object
var src;
Project.gameplay = function(game){};

Project.gameplay.prototype =
{

  preload: function()
  {
    // Define map and map settings
    this.map = this.add.tilemap('map');
    this.map.addTilesetImage('TS2','tiles');
    this.map.addTilesetImage('TS1','tiles1');
    this.map.addTilesetImage('TS3','tiles2');
    this.floor = this.map.createLayer('L1');
    this.prewalls = this.map.createLayer('L2');
    this.walls = this.map.createLayer('L3');
    // Resize world to map size
    this.floor.resizeWorld();
    // Create collider
    this.map.setCollisionByExclusion([], true, 'L3');
    //Create our player
    this.character = new Player(this.game, 256, 700);
    this.character.events.onKilled.add(this.endGame, this);
    this.isBoss = false;
    this.boss;

    this.camera.follow(this.character, Phaser.FOLLOW_TOPDOWN, 1, 1);

    //HUD
    this.hpBar = customMethods.newText(70, 580, 'HP: ' + this.character.health, 40, 0.5, 0.5, 'center', '#00d647', 'black', 4);
    this.killsBar = customMethods.newText(70, 25, 'Kills: ' + customValues.kills, 30, 0.5, 0.5, 'center', '#00d647', 'black', 4);
    this.ammoBar = customMethods.newText(700, 580, customValues.activeAmmo + '^', 35, 0.5, 0.5, 'center', '#ffce3d', 'black', 4);

    this.ammoBar.fixedToCamera = true;
    this.killsBar.fixedToCamera = true
    this.hpBar.fixedToCamera = true;
    //Fullscreen
    this.input.keyboard.addKey(Phaser.Keyboard.P).onDown.add(this.switchFullScreen, this)
    // Manage enemies and bonuses that falling out of enemies
    this.time.events.loop(customValues.spawnTimer, this.spawnEnemy, this);
    this.enemies = this.add.group();
    this.bonuses = this.add.group();
    this.enemyBullets;
    // Positions where enemies can spawn
    this.spawn_list = [[100,189], [1045, 178], [559, 1023]];

    // Add main theme and configure it
    this.music = this.add.audio('Main_Theme', 0.3, true);

    this.music.play("", 0, 0.7, true, )
    src = this;
  },

  switchFullScreen:function()
  {
    // if already switched FS -> off Fullscreen
    if(this.scale.isFullScreen)
    {
      this.scale.stopFullScreen()
    }
    else
    {
      this.scale.startFullScreen(true, true);
    }
  },
  // Main loop
  update: function()
  {
    // Add colliders to game state
    this.physics.arcade.collide(this.character, this.enemies, this.collideEnemy, null, this);
    this.physics.arcade.overlap(this.enemies, this.character.weapon.bullets, this.hitEnemy, null, this);
    this.physics.arcade.overlap(this.character, this.enemyBullets, this.hitHero, null, this);
    this.physics.arcade.collide([this.character, this.enemies], this.walls);
    this.physics.arcade.collide(this.enemies);
    this.physics.arcade.collide([this.character.weapon.bullets, this.enemyBullets], this.walls, this.kill, null, this);
    this.physics.arcade.overlap([this.character, this.enemies], this.bonuses, this.pickItem, null, this);

    // Update HUD
    this.ammoBar.text = customValues.activeAmmo + '/' + customValues.ammo;
    this.killsBar.text = 'Kills: ' + customValues.kills;
    if(customValues.kills >= 50 && this.isBoss == false)
    {
      this.spawnBoss();
    }
  },
  pickItem: function(a,b)
  {
    // If dropped First AID Kit
    if(b.type == 0)
    {
      a.heal(10);
      this.updateHp();
      b.kill()
    }
    // if dropped ammo else ignore
    else if(b.type == 1)
    {
      customValues.ammo+=30;
      this.ammoBar.text = customValues.activeAmmo + '/' + customValues.ammo;
      b.kill()
    }
    if(a === this.character)
    {
      if(b.type == 5)
      {
        this.winGame();
        b.kill()
      }
    }
    //destroy item after colliding

  },
  // if enemies collide with player -> damage player
  collideEnemy: function(a,b)
  {
      b.attack(a);
      this.hpBar.text = 'HP: ' + this.character.health
      this.camera.shake(0.01, 50);
  },
  // if players bullet hit enemy -> damage enemy
  hitEnemy: function(a,b)
  {
      b.kill();
      a.damage(this.character.rDamage(5, 10));
  },

  hitHero: function(a,b)
  {
      b.kill();
      a.damage(10);
      this.updateHp();
  },
  // Remove sprite
  kill: function(object)
  {
    object.kill();
  },
  // Spawning enemies
  spawnEnemy: function()
  {
    if(customValues.countEnemies < customValues.enemiesLimit)
      {
        var spawn = this.spawn_list[Math.floor(Math.random()*3)];
        var newEnemy = new Enemy(this.game, spawn[0], spawn[1], 0);
        newEnemy.target = this.character;
        this.enemies.add(newEnemy);
        customValues.countEnemies++;
      }
    else
      return
    },

  spawnBoss: function()
  {
      var spawn = this.spawn_list[Math.floor(Math.random()*3)];
      var boss = new Enemy(this.game, spawn[0], spawn[1], 1);
      this.enemyBullets = boss.weapon.bullets;
      boss.target = this.character;
      this.enemies.add(boss);
      this.isBoss = true;
      this.boss = boss;
    },
  // Spawning bonuses
  spawnBonus: function(x,y,type)
  {
    if(type >= 0 && type <= 1 || type == 5)
    {
      var bonus = new Bonus(src.game, x, y, type);
      src.bonuses.add(bonus);
    }
  },

  updateHp: function()
  {
    this.hpBar.text = 'HP: ' + this.character.health;
  },

  endGame: function()
  {
    this.game.sound.stopAll();
    var t = customMethods.newText(400, 400, 'You Loose this game, reload page', 40, 0.5, 0.5, 'center', '#00d647', 'black', 4)
    t.fixedToCamera = true;
  },

  winGame: function()
  {
    this.game.sound.stopAll();
    this.character.kill();
    this.state.start('Titles');
  },
};
