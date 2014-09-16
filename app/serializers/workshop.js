import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    registrations: {serialize: 'ids', deserialize: 'ids'}
  }
});