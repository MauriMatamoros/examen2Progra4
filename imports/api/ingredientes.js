export const Ingredientes = new Mongo.Collection('ingredientes');

let Schema = {};
Schema.ingrediente = new SimpleSchema({
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

Ingredientes.attachSchema(Schema.ingrediente);

Meteor.methods({
  'ingredientes.insert'(ingrediente){
      Ingredientes.insert(ingrediente, function(err){
        if(err)
          throw new Meteor.Error('Error inserting ingrediente: ' + err);
      });
   },
   'ingredientes.remove'(_id){
     Ingredientes.remove({_id: _id}, function(err){
       if(err)
        throw new Meteor.Error('Error removing ingrediente: ' + err);
     });
   }
})
