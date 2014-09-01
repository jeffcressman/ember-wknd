import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    register: function(workshop) {
        alert("Passed workshop to register for as param: " + workshop);
        // Get the logged in user and register
    }
  }
});