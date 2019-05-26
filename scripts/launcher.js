"use strict";

var Project = Project || {};

Project.launcher = function(game){};
Project.launcher.prototype =
{
  init: function()
  {
    this.game.input.maxPointers = 1;
    this.game.stage.disableVisibilityChange = true;
    this.game.renderer.renderSession.roundPixels = true;
    this.game.stage.backgroundColor = "#000000";
    this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.setUserScale(1.5, 1.5, 256, 256, true, true);
  },

  preload: function()
  {
    this.load.image('Logo', 'assets/logo.png');
  },

  create: function()
  {
    this.state.start("LoadingScreen");
  }

}
