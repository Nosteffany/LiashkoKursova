// "use strict";
// var Project = Project || {};
//
// Project.mainMenu = function(game){};
//
//
// Project.mainMenu.prototype =
// {
//   create: function()
//   {
//     this.stage.backgroundColor = "#2448a0";
//     this.world.setBounds(600, 600);
//     this.Menu = this.add.group();
//     this.t = this.add.text(this.game.width * 0.7, this.game.height * 0.7, '0%',{fill:"white"})
//     // this.createMenu();
//     // this.switchWindow(0);
//   },
//
//   createMenu: function()
//   {
//     // var buttonHeight = 100;
//     // var offset = 100;
//     var menu = ["Start", "Info"];
//     var info = "Game Created by: Liashko_D, Davyduk_O, Tkachuk_M"
//     //var callbacks = [function(){this.state.start("Gameplay");},function(){this.switchWindow(1);}]
//
//     for(var i = 0; i < menu; i++)
//     {
//       // var button = customMethods.newButton(400,400,"Button",callbacks[i],this)
//       // var text = customMethods.newText(button.x, button.y, menu[i])
//       //
//       // this.mainMenu.add(button);
//       // this.mainMenu.add(text);
//     }
//     // this.infoText = customMethods.newText(100, 100, info,30);
//     // this.backButton = customMethods.newButton(this.game.width*0.5,this.game.height - offset,"Button",function(){this.switchWindow(0);},this, true, null, 0.5, 0);
//   },
//   switchWindow: function(id)
//   {
//     this.Menu.setAll("visible", id === 0);
//     this.infoText.visible = (id === 1)
//     // this.backButton.visible = (id!=0);
//   },
// };



var Project = Project||{};

Project.mainMenu = function(game){};

Project.mainMenu.prototype =
{
  preload: function()
  {
    this.stage.backgroundColor = "#000000";
    this.menu = ["Start"];
    this.info = "Press P  in game for full screen mode \n\nGame Created by:\n Liashko_D\n Davyduk_O\n Tkachuk_M"

    this.button = Project.game.add.button(275, 100, "Button", function(){this.state.start('Gameplay')}, this, 1, 0, 0, 0);
    this.text = customMethods.newText(400, 130, "Start", 35, 0.5, 0.5, 'center', '#ffce3d', 'black', 4);
    this.text = customMethods.newText(400, 400, this.info, 35, 0.5, 0.5, 'center', '#39c8e5', 'black', 1);
  }

        // this.backButton = customMethods.newButton(this.game.width*0.5,this.game.height - offset,"Button",function(){this.switchWindow(0);},this, true, null, 0.5, 0);
}
