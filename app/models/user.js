import Ember from 'ember';
import { attr, Model } from 'ember-cli-simple-store/model';

var User = Model.extend({
    simpleStore: Ember.inject.service(),
    name: attr(),
    wat: Ember.computed(function() {
      return this.get('simpleStore').find('user');
    }),
    serialize: function() {
        return {
            name: this.get('name')
        };
    }
});

export default User;
