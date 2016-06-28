import "./listRecetas.html";
import { Recetas } from '../../api/receta.js';

Template.listRecetas.onRendered(function(){
    $('.modal-trigger').leanModal();
    $('input, textarea').characterCounter();
});
Template.listRecetas.events({
    'click #addRecetaButton'(event){
      // console.log('user id'+ Meteor.userId());
        let receta = {
            name: $('#name').val(),
            description: $('#description').val(),
            formula: $('#formula').val(),
            creator: Meteor.userId()
        };
        $('#name').val(""),
        $('#description').val(""),
        $('#formula').val(""),
        Meteor.call('recetas.insert', receta)
    },
    'click .delete'() {
        Meteor.call('recetas.remove', this._id);
    },

})
Template.listRecetas.helpers({
    recetas(){
        var recetas = Recetas.find({creator: Meteor.userId()});
        return recetas;
    }
});
