testAsyncMulti('anonymous-accounts -  Test account creation', [
	function(test, expect) {
		Meteor.loginAnonymously(expect(function(err, res) {
			test.isTrue((res.token && res.id))
		}));
	}
]);