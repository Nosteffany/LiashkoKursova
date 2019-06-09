"use strict"

var Project = Project||{};

Project.loadingScreen = function(game){};

Project.loadingScreen.prototype =
{
  preload: function()
  {
    this.load.spritesheet('hero', 'assets/hero1.png', 19, 42);
    this.load.spritesheet('enemy', 'assets/Serot.png', 50, 47);
    this.load.spritesheet('enemy1', 'assets/enemy1.png', 96, 96);
    // this.load.image('enemy', 'assets/cube1.png');
    this.load.tilemap('map', 'assets/MAP.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.image('tiles2', 'assets/set2.png');
    this.load.image('tiles1', 'assets/set1.png');
    this.load.image('tiles', 'assets/set.png');

    this.load.image('Aid', 'assets/aid.png');
    this.load.spritesheet('Button', 'assets/button.png', 251, 60);
    this.load.image('Ammo', 'assets/ammo.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('bullet1', 'assets/slime.png');
    this.load.image('Extra', 'assets/easter.png');

    this.load.audio('Main_Theme', 'music/main_theme.wav');
    this.load.audio('Ending', 'music/ending.mp3');
    this.load.audio('Moan', 'music/moan.wav');
    this.load.audio('Step', 'music/footstep.wav');
    this.load.audio('Shoot', 'music/shoot1.wav');
    this.load.audio('Reload', 'music/reload.wav');
    this.load.audio('Die', 'music/die.wav');
    this.load.audio('Hit', 'music/hit.wav');
    // this.load.spritesheet('robot', 'assets/')
      // this.load.spritesheet('button', 'assets/button.png', 100, 50);
      // this.load.spritesheet('hero', 'assets/hero.png', 20, 42);
    //this.load.image('tiles', 'assets/set.png');

      // this.load.spritesheet('hero', 'assets/derter5.png', 50,60);


    //loading elements

    this.logo = this.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "Logo");
    this.percents = this.add.text(this.game.width * 0.7, this.game.height * 0.7, '0%',{fill:"white"})

    this.logo.anchor.setTo(0.5, 0.5);
    this.percents.anchor.setTo(0.5, 0.5);


  },

  create: function()
  {
    this.state.start("MainMenu")
  },

  loadUpdate: function()
  {
    this.percents.text = this.load.progress + '%';
  },


};
