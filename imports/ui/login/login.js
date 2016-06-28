import "./login.html";

Template.login.events({
  "click #login"(event){
      var User = {
        username: $("#emailInput").val(),
        email: $("#emailInput").val(),
        password: $("#passwordInput").val()
      }
      Meteor.loginWithPassword($("#emailInput").val(), $("#passwordInput").val(), function(error){
        if (error) {
          Materialize.toast("login unsuccessful", 3500)
        }else {
          Router.go('/');
          Materialize.toast("login successful", 3500)
        }
      });

  }
});
