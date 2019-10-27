# listr-silent-renderer [![Build Status](https://travis-ci.org/SamVerschueren/listr-silent-renderer.svg?branch=master)](https://travis-ci.org/SamVerschueren/listr-silent-renderer)

> Suppress [Listr](https://github.com/SamVerschueren/listr) rendering output


## Install

```
$ npm install --save listr-silent-renderer
```


## Usage

```js
const SilentRenderer = require('listr-silent-renderer');
const Listr = require('listr');

const list = new Listr([
    {
        title: 'foo',
        task: () => Promise.resolve('bar')
    }
], {
    renderer: SilentRenderer
});

list.run();
```


## Related

- [listr](https://github.com/SamVerschueren/listr) - Terminal task list
- [listr-update-renderer](https://github.com/SamVerschueren/listr-update-renderer) - Listr update renderer
- [listr-verbose-renderer](https://github.com/SamVerschueren/listr-verbose-renderer) - Listr verbose renderer


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-listr-silent-renderer?utm_source=npm-listr-silent-renderer&utm_medium=referral&utm_campaign=enterprise&utm_term=repo">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
