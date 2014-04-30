Template.logData.helpers(
   {
      dataReady: function(){
         return this.dataReady;
      },

      pens: function(){
         return Pens.find();
      },

      event: function(){
         var event ={};
         event.eventCount = Events.find({penId: this.penId}).count();
         event.eventCountToday = Events.find({penId: this.penId, timeStamp: {$regex: "^" + moment().format("YYYY.MM.DD")}}).count();
         event.lastEvent = Events.findOne({penId: this.penId}, {sort: {timeStamp: -1}});
         return event;
      },

      pen: function() {
         return Pens.findOne({penId: this.penId});
      }
   }
)