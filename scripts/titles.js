var Project = Project||{};

Project.titles = function(game){};

Project.titles.prototype =
{
  preload: function()
  {
    this.theme = this.game.add.audio('Ending', 0.5);
    this.moan = this.add.audio('Moan', 0.3);
    this.moan.play()
    this.theme.play();
    this.stage.backgroundColor = "#000000";
    this.info = "Not always a golden egg means wealth( \nyou fought nicely but lost your greed\nThanks for playing"

    this.text = customMethods.newText(400, 250, this.info, 35, 0.5, 0.5, 'center', '#39c8e5', 'black', 1);
  }

        // this.backButton = customMethods.newButton(this.game.width*0.5,this.game.height - offset,"Button",function(){this.switchWindow(0);},this, true, null, 0.5, 0);
}
