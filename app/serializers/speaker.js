import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    workshops: {serialize: 'ids', deserialize: 'ids'}
  }
});