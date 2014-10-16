import Ember from 'ember';
import EmberAdminServiceAdminMixin from 'ember-admin/mixins/services/admin';

export default Ember.Object.extend(EmberAdminServiceAdminMixin, {
	// Currently including all models which makes this unecessary but here for reference
	includedModels: ['speaker', 'guest', 'workshop', 'workshop', 'host', 'registration']
});
