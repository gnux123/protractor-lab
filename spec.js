//設定mocha chai的使用
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

//情境設定
describe('網站驗證項目-首頁：', function(){

	browser.ignoreSynchronization = true;

	beforeEach(function(){
		browser.get('/');
		//等待頁面render時間
		browser.sleep(3000);
	});

	//確認網站標題
	it("確認是否有標題", function() {
		var title = browser.getTitle();
		expect(title).to.eventually.eq('美國新蛋直購');
	});


	//確認選單項目數
	it("確認主選單項目數",function(){
		var menuTitleText = $('.toolbar h3').getText();
		// console.log(menuTitleText);
		expect(menuTitleText).to.eventually.eq('美國新蛋直購');

		var menuList = $$('.mainMenu li').count();
		expect(menuList).to.eventually.eq(13);
	});

});
