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
  }
};
