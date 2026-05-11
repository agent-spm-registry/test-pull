# test-pull

A new SPM skill package

## Overview

This is an SPM skill package created with the `starter` template.

## Usage

### Install as a dependency

```bash
spm pull test-pull
```

### Use in your project

```javascript
import { run } from 'spm_modules/test-pull/index.js';

const result = await run({ /* your input */ });
console.log(result);
```

## Development

### Test locally

```bash
node index.js
```

### Validate your package

```bash
spm validate
```

### Publish to the SPM registry

```bash
spm push
```

## License

MIT © lakshitsoni
