import Ember from 'ember';
import config from './config/environment';
import adminRouter from 'ember-admin/router';

var Router = Ember.Router.extend({
  location: config.locationType
});

// Get rid of the # in URLs
Router.reopen({
	location: 'auto',
	rootURL: '/'
});

Router.map(function() {
	adminRouter(this);
	this.route('login');
	this.route('unauthorized');

	this.resource('guests', function () {} );

	// TODO: fix the Guest routes to make them more like the rest, nested under Guests
	this.resource('guest', { path: '/guest/:guest_id' }, function () {
		this.route('new');
		this.route('edit', { path: '/:guest_id/edit' });
		this.resource('guest.workshops', { path: '/workshops'}, function () {
			this.resource('guest.workshops.workshop', { path: '/:workshop_id'}, function () {
				this.resource('guest.workshops.workshop.speaker', { path: '/speaker/:speaker_id'} );
			});
		});
	});

	this.resource('speakers', function () {
		this.route('new');
		this.route('edit', { path: '/:speaker_id/edit' });
		this.resource('speakers.speaker', { path: '/:speaker_id'}, function () {});
	});

	this.resource('workshops', function () {
		this.route('new');
		this.route('edit', { path: '/:workshop_id/edit' });
		this.resource('workshops.workshop', { path: '/:workshop_id' }, function() {});
	});

	this.resource('registrations', function () {
		this.route('new');
		this.route('edit', { path: '/:registration_id/edit' });
		this.resource('registrations.registration', { path: '/:registration_id' });
	});
	
  this.route('admin');
});

export default Router;
