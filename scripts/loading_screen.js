"use strict"

var Project = Project||{};

Project.loadingScreen = function(game){};

Project.loadingScreen.prototype =
{
  preload: function()
  {
    this.load.spritesheet('hero', 'assets/hero1.png', 19, 42);
    this.load.image('enemy', 'assets/cube1.png');
    this.load.tilemap('map', 'assets/w.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/set.png');
      // this.load.spritesheet('button', 'assets/button.png', 100, 50);
      // this.load.spritesheet('hero', 'assets/hero.png', 20, 42);
    //this.load.image('tiles', 'assets/set.png');

      // this.load.spritesheet('hero', 'assets/derter5.png', 50,60);
      this.load.image('bullet', 'assets/bullet.png');

    //loading elements

    this.logo = this.add.sprite(this.game.width * 0.5, this.game.height * 0.5, "Logo");
    this.percents = this.add.text(this.game.width * 0.7, this.game.height * 0.7, '0%',{fill:"white"})

    this.logo.anchor.setTo(0.5, 0.5);
    this.percents.anchor.setTo(0.5, 0.5);


  },

  create: function()
  {
    this.state.start("Gameplay")
  },

  loadUpdate: function()
  {
    this.percents.text = this.load.progress + '%';
  }

};
