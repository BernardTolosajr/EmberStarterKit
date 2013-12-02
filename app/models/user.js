var User = DS.Model.extend({
	name     : DS.attr()
});

User.reopenClass({
	FIXTURES:[
		{
			id: '1', name: 'Bernard'
		},{
			id: '2', name: 'alvin'
		}
]});

export default User;
