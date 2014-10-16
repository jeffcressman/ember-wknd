export default {
  name: 'admin-service',
  initialize: function(container, app) {
    app.inject('route', 'adminService', 'service:admin');
  }
};
