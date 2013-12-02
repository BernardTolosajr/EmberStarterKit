export default Ember.ObjectController.extend({
	actions: {
		save: function(){
		
			// create a record and save it to the store
			var newUser = this.store.createRecord('user', this.get('model'));
			newUser.save();

			// redirects to the user itself
			this.transitionToRoute('user', newUser);
		}		 
	}
});
