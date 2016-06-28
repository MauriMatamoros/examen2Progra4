import "./listIngredientes.html";
import { Ingredientes } from '../../api/ingredientes.js';

Template.listIngredientes.onRendered(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
});
Template.listIngredientes.events({
    'click #addIngredienteButton'(event){
      // console.log('user id'+ Meteor.userId());
        let ingrediente = {
            name: $('#name').val(),
            description: $('#description').val(),
            formula: $('#formula').val(),
            creator: Meteor.userId()
        };
        $('#name').val(""),
        $('#description').val(""),
        $('#formula').val(""),
        Meteor.call('ingredientes.insert', ingrediente)
    },
    'click .delete'() {
        Meteor.call('ingredientes.remove', this._id);
    },

})
Template.listIngredientes.helpers({
    ingredientes(){
        var ingredientes = Ingredientes.find({creator: Meteor.userId()});
        return ingredientes;
    }
});
