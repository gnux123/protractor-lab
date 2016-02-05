//設定mocha chai的使用
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

describe('網站驗證項目-首頁：', function(){
	browser.ignoreSynchronization = true;

	beforeEach(function(){
		browser.get('http://www.newegg.com.tw/');
		//等待頁面render時間
		browser.sleep(3000);
	});

	it("確認是否有標題", function() {
		var title = browser.getTitle();
		expect(title).to.eventually.eq('新蛋全球生活網');
	});

});
