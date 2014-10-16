import EmberAdminRouteAdminMixin from 'ember-admin/mixins/routes/admin';
import AuthorizedRoute from 'ember-wknd/routes/authorized';

export default AuthorizedRoute.extend(EmberAdminRouteAdminMixin, {
	access: ['Host']
});