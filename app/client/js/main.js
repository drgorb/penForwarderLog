Router.map(function() {
   this.route("root", {
      path: "/",
      template: "logData",
      waitOn: function () {
         return [Meteor.subscribe("allBoxes"), Meteor.subscribe("allPens"), Meteor.subscribe("allEvents")]
      }
   });
});