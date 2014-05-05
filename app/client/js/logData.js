Template.logData.helpers(
   {
      dataReady: function(){
         return this.dataReady;
      },

      pens: function(){
         var pens = [];
         var penIdList = _(_(Events.find({}, {sort: {timeStamp: -1}}).fetch()).pluck("penId")).uniq();
         _(penIdList).each(function(penId){
            pens.push(Pens.findOne({penId: penId}));
         });

         Pens.find({penId: {$nin: penIdList}}).forEach(function(pen){
            pens.push(pen);
         })

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