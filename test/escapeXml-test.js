var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;

var raptorUtil = require('../'); // Load this module just to make sure it works

describe('raptor-util/escapeXml', function() {

    beforeEach(function(done) {
        done();
    });

    it ('should escape input string to HTML special chars', function () {
        var input = '<>&"\'\n';
        var output = raptorUtil.escapeXml(input);
        expect(output).to.equal('&lt;>&amp;"\'\n');
    });

    it ('should escape input array of string to HTML special chars', function () {
        var input = '<>&"\'\n';
        var output = raptorUtil.escapeXml([input]);
        expect(output).to.equal('&lt;>&amp;"\'\n');
    });

    it ('should escape input string to HTML special chars for attr', function () {
        var input = '<>&"\'\n';
        var output = raptorUtil.escapeXmlAttr(input);
        expect(output).to.equal('&lt;&gt;&amp;&quot;&#39;&#10;');
    });

    it ('should escape input array of string to HTML special chars for attr', function () {
        var input = '<>&"\'\n';
        var output = raptorUtil.escapeXmlAttr([input]);
        expect(output).to.equal('&lt;&gt;&amp;&quot;&#39;&#10;');
    });

});