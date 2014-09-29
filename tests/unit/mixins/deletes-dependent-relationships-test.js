import Ember from 'ember';
import DeletesDependentRelationshipsMixin from 'ember-wknd/mixins/deletes-dependent-relationships';

module('DeletesDependentRelationshipsMixin');

// Replace this with your real tests.
test('it works', function() {
  var DeletesDependentRelationshipsObject = Ember.Object.extend(DeletesDependentRelationshipsMixin);
  var subject = DeletesDependentRelationshipsObject.create();
  ok(subject);
});
