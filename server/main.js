import { Meteor } from 'meteor/meteor';
import { Recetas } from '../imports/api/receta.js';

Meteor.startup(() => {

});

let seedRecetas = () => {
  return [
    {
      title: 'Programacion IV Angular',
      description: 'Programación 4',
      formula: 'Meth'
    },
    {
      title: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos',
      formula: 'Meth'
    },
    {
      title: 'Programacion IV',
      description: 'Programación 4',
      formula: 'Meth'
    },
    {
      title: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos',
      formula: 'Meth'
    },
    {
      title: 'Programacion IV',
      description: 'Programación 4',
      formula: 'Meth'
    },
    {
      title: 'Estructuras de datos',
      description: 'Bases sobre estructuras de datos',
      formula: 'Meth'
    }
  ]
}
