# browser-root-domain

Get root domain in browser.

## Install

```bash
npm install --save root-domain-lite
# or
yarn add root-domain-lite
```

## Why

Some domain sufixies are like `.net.cn`. See [Public Suffix List](https://publicsuffix.org/).

For now, especially in the browser side, we do not have any perfect idea to identify such cases. You will find enumerating not that easy.

Two idea would help us.

* if you set `document.domain` to `.net.cn` on a page, you would get an error;

* you will not succeed when setting cookie with a `domain=.net.cn` option.

With the former idea, we could set `document.domain` repeatedly until success. For example, first try `document.domain = 'net.cn'`, then try `document.domain = 'xyz.net.cn'`... Done!

Wait! Should we restore `document.domain`? Of course! Run `document.domain = origianl_domain`. Chrome, OK. Firefox? Oops! It seems that, once `document.domain` is set to a superior one in Firefox, you can never set it back. Bad news.

So we have to turn to the latter idea. Cookie is not as stricky as `document.domain`. Just take a look at the [source code][./index.js]~
