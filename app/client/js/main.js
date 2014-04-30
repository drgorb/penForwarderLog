Meteor.startup(function () {
   Meteor.call("getRootURL", function(err, res){
      /*remove th http:// at the beginning*/
      var url = res.replace("http://", "");
      /*remove the host name and port*/
      if(url.length > 1) url = url.replace(url.split("/")[0], "");
      /*add a trailing forward slash if it is missing*/
      if(url.lastIndexOf("/") < url.length - 1) url += "/";

   })
})

Router.map(function () {
   this.route("root", {
      path: "*",
      template: "logData",
      data: function(){
         return {dataReady: this.ready()}
      },
      waitOn: function () {
         return [Meteor.subscribe("allBoxes"), Meteor.subscribe("allPens"), Meteor.subscribe("allEvents")]
      }
   });
});
