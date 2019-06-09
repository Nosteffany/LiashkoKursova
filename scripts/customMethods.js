"use strict"
var customMethods =
{
  newSprite: function(x, y, key, frame=0, anchorX=0.5, anchorY=0.5, scaleX=1, scaleY=1)
  {
    var sprite = Project.game.add.sprite(x, y, key, frame);
    sprite.anchor.setTo(anchorX, anchorY);
    sprite.scale.setTo(scaleX, scaleY);

    return sprite;
  },

  newGroup: function(limit, key, physicsEnabled=true, frame=0, exists=false, anchorX=0.5, anchorY=0.5)
  {
    var group = Project.game.add.group();

    group.enableBody = physicsEnabled;


    group.createMultiple(limit, key, frame, exists);
    group.setAll("anchor.x", anchorX);
    group.setAll("anchor.y", anchorY);

    return group;
  },

  newText: function(x, y, text, fontSize = 20, anchorX = 0.5, anchorY = 0.5, alignment = 'center', textColor = 'white', strokeColor='white', strokeSize=1)
  {
    var text = Project.game.add.text(x, y, text, {font: fontSize + "px Autour One", fill:textColor, align: alignment, stroke:strokeColor, strokeThickness:strokeSize});
    text.anchor.setTo(anchorX, anchorY);

    return text;
  },

  // newButton: function(x, y, key, callback, onInputOverEvent = null, anchorX = 0.5, anchorY = 0.5)
  // {
  //   var button = Project.game.add.button(x, y, key, callback, this, 0, 0, 0, 0);
  //   button.anchor.setTo(anchorX, anchorY);
  //   if(onInputOverEvent != null)
  //   {
  //     button.onInputOver.add(onInputOverEvent, this);
  //   }
  //   return button;
  // }
};
