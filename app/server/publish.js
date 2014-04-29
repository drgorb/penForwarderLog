Meteor.publish("allBoxes", function(){
   return Boxes.find();
})

Meteor.publish("allPens", function(){
   return Pens.find();
})

Meteor.publish("allEvents", function(){
   return Events.find();
})