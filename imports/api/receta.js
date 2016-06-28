export const Recetas = new Mongo.Collection('recetas');

let Schema = {};
Schema.receta = new SimpleSchema({
  name: {
    type:String,
    max: 30
  },
  formula: {
    type: String,
    max: 100
  },
  description: {
    type: String,
    max: 100
  },
  creator: {
    type: String,
    max: 100
  }

});

Recetas.attachSchema(Schema.receta);

Meteor.methods({
  'recetas.insert'(receta){
      Recetas.insert(receta, function(err){
        if(err)
          throw new Meteor.Error('Error inserting receta: ' + err);
      });
   },
   'recetas.remove'(_id){
     Recetas.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error removing receta: ' + err);
     });
   }
})
