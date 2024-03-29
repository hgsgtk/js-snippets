const CDP = require('chrome-remote-interface')

// https://github.com/cyrus-and/chrome-remote-interface
async function example() {
    let client;

    try {
        // connect to endpoint
        client = await CDP();

        // extract domains
        const {Network, Page} = client;

        // setup handlers
        Network.requestWillBeSent((params) => {
            console.log(params.request.url);
        });

        // enable events then start
        await Network.enable();
        await Page.enable();
        await Page.navigate({url: 'https://github.com'});
        await Page.loadEventFired();
    } catch (err) {
        console.log(err);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

example();