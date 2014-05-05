Template.logData.helpers(
   {
      dataReady: function(){
         return this.dataReady;
      },

      pens: function(){
         var pens = [];
         _(_(_(Events.find({}, {sort: {timeStamp: -1}}).fetch()).pluck("penId")).uniq()).each(function(penId){
            pens.push(Pens.findOne({penId: penId}));
         });

         return pens;
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