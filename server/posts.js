Meteor.methods({
   addPost: function(title, subtitle, content) {
      Posts.insert({
         title: title,
         subtitle: subtitle,
         content: content
      });
   }
});
