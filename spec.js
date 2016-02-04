var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

describe('protractor Demo App', function(){
	// var firstNum  = element(by.model('first'));
	// var secondNum = element(by.model('second'));
	// var goBtn = element(by.id('gobutton'));
	// var results = element(by.binding('latest'));
	// var history = element.all(by.repeater('result in memory'));
	//
	// function add(a, b){
	// 	firstNum.sendKeys(a);
	//     secondNum.sendKeys(b);
	//     goBtn.click();
	// }

	browser.ignoreSynchronization = true;


	beforeEach(function(){
		browser.get('/');
		//等待頁面render時間
		browser.sleep(3000);
	});

	it("確認是否有標題", function() {
		var title = browser.getTitle();
		expect(title).to.eventually.eq('test-123');
	});

	it("確認主選單項目數",function(){
		var menuList = element.all(by.css('.mainMenu li')).count();
		expect(menuList).to.eventually.eq(13);
	});

	// it('should have a  history',function(){
	// 	add(1,2);
	// 	add(3,4);
	//
	// 	expect(history.count()).toEqual(2);
	//
	// 	add(5, 6);
	//
	// 	expect(history.count()).toEqual(3);
	//
	// });

	// it('should add one and two', function(){
	//
	// 	firstNum.sendKeys(1);
	// 	secondNum.sendKeys(2);
	//
	// 	goBtn.click();
	//
	// 	expect(results.getText()).toEqual('3');
	// });
	//
	// it('should add four and six', function(){
	//
	// 	firstNum.sendKeys(4);
	// 	secondNum.sendKeys(6);
	//
	// 	goBtn.click();
	//
	// 	expect(results.getText()).toEqual('10');
	// });
});
