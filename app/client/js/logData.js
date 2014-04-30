Template.logData.helpers(
   {
      pens: function(){
         return Pens.find();
      },

      event: function(){
         var event ={};
         event.eventCount = Events.find({penId: this.penId}).count();
         event.eventCountToday = Events.find({penId: this.penId, timeStamp: {$regex: "^" + moment().format("YYYY.MM.DD")}}).count();
         event.lastEvent = Events.find({penId: this.penId}, {sort: {timeStamp: -1}})[0].timeStamp;
      },

      pen: function() {
         return Pens.findOne({penId: this.penId});
      }
   }
)