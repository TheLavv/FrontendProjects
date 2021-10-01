const {Builder, By, Key, until} = require('selenium-webdriver');

describe('integration test with selenium chromedriver', () => {
    // let d = new Builder().forBrowser('chrome').build();
    //
    // let chrome_driver;
    //
    // it('waits for the driver to start', () => {
    //     return d.then(_d => {
    //         chrome_driver = _d;
    //     })
    // })

    it('items list should not be empty', async () => {
        let driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000/auth');
        driver.executeScript(() => {
            localStorage.setItem('user', 'test');
        })
        await driver.sleep(500);
        await driver.get('http://localhost:3000/');
        let finderBox = await driver.findElement(By.className('finderBox-input'));
        finderBox.sendKeys('Звёздные');
        let findBtn = await driver.findElement(By.className('finderBox-btn'));
        findBtn.sendKeys(Key.ENTER);
        let list = await driver.wait(
            until.elementsLocated(By.className('cardBox')),
            20000
        );
        // if (login)
        //     console.log(login)
        // else
        //     throw new Error('Error')
        // driver.getAllWindowHandles().then((handles) => {
        //     driver.switchTo().window(handles[1]).then(() => {
        //         let loginInput = driver.wait(
        //             until.elementLocated(By.name('identifier')),
        //             2000
        //         )
        //         loginInput.sendKeys('gmail.com');
        //     })
        // })
        expect(list.length).toBeGreaterThanOrEqual(0);
        driver.quit();
    })
})