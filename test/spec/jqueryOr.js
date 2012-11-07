describe("jQuery Or", function() {

	var $elem, $fakeElem;
	var fallBackId = '#fallBack';

	beforeEach(function() {
		$elem = $('#exists');
		$fakeElem = $('#doesntExist');
	});

	it("should exist", function() {
		expect( $.fn.or ).toBeDefined();
		expect( $elem.or ).toBeDefined();
	});

	it("returns the element if it exists", function() {
		expect( $elem.or().attr('id') ).toEqual('exists');
	});

	it("returns the body element if the element doesn't exist and no fallback is provided", function() {
		expect( $fakeElem.or().is('body') ).toEqual( true );
	});

	it("returns the fallback element if the element doesnt exist and a fallback is provided", function() {
		expect( $fakeElem.or(fallBackId).is(fallBackId) ).toEqual( true );
	});

});