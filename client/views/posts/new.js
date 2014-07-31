Template.new.events({
   'click .publish': function(event, template) {
      event.preventDefault();

      var post = {
         title: template.find('.title'),
         subtitle: template.find('.subtitle'),
         content: template.find('.content')
      };

      Meteor.call('addPost',
         post.title.innerHTML,
         post.subtitle.innerHTML,
         post.content.innerHTML
      );

      Router.go('home');
   }
});
