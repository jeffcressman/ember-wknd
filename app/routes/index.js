import Ember from 'ember';

// We want to show speakers and workshops on the main page
// http://stackoverflow.com/questions/20521967/emberjs-how-to-load-multiple-models-on-the-same-route
// IMPROVE: instead we could simply have the IndexView render the speaker and workshop templates
//          into named outlets, which would load their respective controllers and thus models.
export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      speakers: this.store.find('speaker'),
      workshops: this.store.find('workshop')
    });
  }
});