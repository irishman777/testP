describe('Main Page', () => {
    it('should Title main page is present and correct text', function () {
        browser.url('https://stage.pasv.us/');
        const titleProgressMonitor= $("//span[@id='site-name']");
        const text = titleProgressMonitor.getText(); //Progress Monitor
        expect(text).toEqual('Progress Monitor')

    });

    it('should Title main page is clickable', function () {
        browser.url('https://stage.pasv.us/');
        const titleProgressMonitor= "//span[@id='site-name']";
        const result = $(titleProgressMonitor).isClickable(); //true false
        expect(result).toEqual(true);

    });

    it('should veryfy login buttom clickable ', function () {
        browser.url('https://stage.pasv.us/');
        const loginButtom= $("//a[@qa='login-link']");
        const result = loginButtom.isClickable(); //true false
        expect(result).toEqual(true);

    });
})
