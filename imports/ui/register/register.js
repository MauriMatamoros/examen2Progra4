import "./register.html";

Template.register.events({
  "click #register"(event){
      var Profile = {
        firstname: $("#firstnameInput").val(),
        lastname: $("#lastnameInput").val()
      }
      var User = {
        username: $("#emailInput").val(),
        email: $("#emailInput").val(),
        password: $("#passwordInput").val(),
        profile: Profile
      }
      Accounts.createUser(User, function(err){
        if (err) {
          Materialize.toast("Register unsuccessful", 3500);
          $("#firstnameInput").val(""),
          $("#lastnameInput").val(""),
          $("#emailInput").val(""),
          $("#emailInput").val(""),
          $("#passwordInput").val("")
        }else {
          Router.go('/login');
          Materialize.toast("register successful", 3500)
        }
      });
  }
});
