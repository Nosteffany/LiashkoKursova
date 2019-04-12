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
