Meteor.startup(function () {
   Router.map(function () {
      this.route('penForwarderLogs', {
         path: '/log',
         where: 'server',
         action: function () {
            var req = this.request;
            Events.insert(
               {
                  boxId: req.body.boxId,
                  penId: req.body.penId,
                  filename: req.body.filename,
                  timeStamp: moment().format("DD.MM hh:mm:ss")
               });
            /*add the documents as they arrive*/
            if(!Boxes.find({boxId: req.body.boxId}).count()){
               Boxes.insert({boxId: req.body.boxId});
            }
            if(!Pens.find({penId: req.body.penId}).count()){
               Pens.insert({penId: req.body.penId});
            }
         }
      });
   });

})