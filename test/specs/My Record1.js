describe("My Record1", () => {
  it("tests My Record1", async () => {
    await browser.setWindowSize(1263, 153)
    await browser.url("chrome://new-tab-page-third-party/")
    await expect(browser).toHaveUrl("chrome://new-tab-page-third-party/")
    await browser.$("aria/Google[role=\"link\"]").click()
    await browser.url("https://www.google.com/")
    await expect(browser).toHaveUrl("https://www.google.com/")
    await browser.$("#APjFqb").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#APjFqb").setValue("selenium ")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await expect(browser).toHaveUrl("https://www.google.com/search?q=selenium+&sca_esv=2f61a0c390a4d1ff&sxsrf=ACQVn082OFSD2RNuoCIAGfPLtNVx7u8mdQ%3A1714539817459&source=hp&ei=Kc0xZu_YGeLd2roPsLSp2A4&iflsig=ANes7DEAAAAAZjHbOXSPnHdEHOrtk2q11jf4JC_Y2Iko&ved=0ahUKEwivkZXG1uuFAxXirlYBHTBaCusQ4dUDCBU&uact=5&oq=selenium+&gs_lp=Egdnd3Mtd2l6IglzZWxlbml1bSAyChAjGIAEGCcYigUyChAjGIAEGCcYigUyChAjGIAEGCcYigUyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDSLlMUL4gWJJHcAF4AJABAJgB-gGgAZoMqgEFMC44LjG4AQPIAQD4AQGYAgqgAtoMqAIKwgIHECMYJxjqAsICBBAjGCfCAgsQABiABBixAxiDAcICERAuGIAEGLEDGNEDGIMBGMcBwgIUEC4YgAQYsQMY0QMYgwEYxwEYigXCAg4QLhiABBjHARiOBRivAcICCBAuGIAEGLEDwgIOEC4YgAQYsQMYxwEYrwHCAgsQLhiABBixAxiDAZgDCpIHBTEuNy4yoAfOag&sclient=gws-wiz")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("aria/ Selenium Selenium https://www.selenium.dev").click()
    await expect(browser).toHaveUrl("https://www.selenium.dev/")
    await browser.$("aria/Selenium WebDriver[role=\"heading\"]").click()
    await browser.$("//*[@id=\"selenium_webdriver\"]/path[2]").click()
    await browser.$("/html/body/div/main/section[2]/div/div/div[1]/div/div[2]/div/a").click()
    await expect(browser).toHaveUrl("https://www.selenium.dev/documentation/webdriver/")
  });
});
