export default Ember.Route.extend({
	model: function(){
		return Em.Object.create({});	   
	},
	renderTemplate: function(){
		this.render('user.edit',{controller: 'users.Create'});				
	}
});
