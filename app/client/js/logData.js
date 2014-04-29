Template.logData.helpers(
   {
      boxes: function(){
         return Boxes.find();
      },

      events: function(){
         return Events.find({boxId: this.boxId});
      },

      pen: function() {
         return Pens.findOne({penId: this.penId});
      }
   }
)