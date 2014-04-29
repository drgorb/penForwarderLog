Boxes = new Meteor.Collection("boxes");
Pens = new Meteor.Collection("pens");
Events = new Meteor.Collection("events");

Boxes.allow(
   {
      insert: function(){
         return true;
      },
      update: function(){
         return true;
      },
      remove: function(){
         return true;
      }
   });

Pens.allow(
   {
      insert: function(){
         return true;
      },
      update: function(){
         return true;
      },
      remove: function(){
         return true;
      }
   });

Events.allow(
   {
      insert: function(){
         return true;
      },
      update: function(){
         return true;
      },
      remove: function(){
         return true;
      }
   }
);