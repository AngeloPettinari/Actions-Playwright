// @ts-check
import { _android as android, } from 'playwright';
const { test } = require('@playwright/test');

test("Run in Android - Chrome", async () => {

    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);

    await device.screenshot({ path: 'device.png' });

    await device.shell('am force-stop com.android.chrome');
    const context = await device.launchBrowser();

    const page = await context.newPage();
    await page.goto('https://drvn.cc');
    console.log(await page.evaluate(() => window.location.href));
    await page.screenshot({ path: 'page.png' });



    await context.close();
    await device.close();
});

