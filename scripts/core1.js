"use strict";

var Project = Project || {};
var config =
{
   width : 800,
   height : 600,
   renderer : Phaser.CANVAS
};

Project.game = new Phaser.Game(config);

Project.game.state.add("Launcher", Project.launcher);
Project.game.state.add("MainMenu", Project.mainMenu);
Project.game.state.add("LoadingScreen", Project.loadingScreen);
Project.game.state.add("Gameplay", Project.gameplay);
Project.game.state.add("Titles", Project.titles);
Project.game.state.start("Launcher");
