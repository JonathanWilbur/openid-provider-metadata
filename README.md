# OpenID Provider Metadata Schema and Types

* Author: [Jonathan M. Wilbur](https://github.com/JonathanWilbur) <[jonathan@wilbur.space](mailto:jonathan@wilbur.space)>
* Copyright Year: 2020
* License: [MIT License](https://mit-license.org/)

JSON Schema (both as a JavaScript Object and as JSON) and TypeScript
interfaces for representing OpenID Provider Metadata, as described
[here](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).

## Recreate

I am not going to implement scripts or automation for this, because it will
probably not going to change very often.

1. Compile `index.ts` to `index.js`: `tsc ./source/index.ts`.
2. Convert `index.js` to `index.json`: `node -e 'console.log(JSON.stringify(require(\"./source/index.js\").default));' > .\source\index.json`.
3. Convert `index.json` to `index.d.ts`: `node ./tools/compileInterfaces.js`.
