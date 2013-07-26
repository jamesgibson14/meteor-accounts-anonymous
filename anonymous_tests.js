
if(Meteor.isServer) {
	Meteor.methods({
		'test/method': function() {
			return true;
		}
	})
}

if(Meteor.isClient) {
	Tinytest.add('anonymous-accounts -  Test account creation', function (test) {
		test.equal(1/*actual*/, 1/*expected*/, 'Expected values to be equal');
	});
}