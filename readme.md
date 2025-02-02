# rdrand-lite.js

The Intel CPU has a TRNG instructions called RDRAND/RDSEED.
You can generate a good-random numbers without any external, expensive hardware.
This NPM module enables you to use those instructions from Node.js,
applicable for simulation, analysis, games, or anything you want.

- Out of the box : No need to install additional build tools.
## API

```typescript
// node.js
const rng = require('rdrand-lite');

//and then

console.log(rng.rdRand32())
console.log(rng.rdRand64())
console.log(rng.rdSeed32())
console.log(rng.rdSeed64())
console.log(rng.normalizeUint32(rng.rdSeed32()))
console.log(rng.normalizeUint64(rng.rdSeed64()))


```

### Basic API

- `rng.isRrdrandSupported(): number` - If 1 is returned, it indicates support for rdrand.
- `rng.rdRand32(): uint32` - returns uint32; ramdom binary bits by rdrand.
- `rng.rdRand64(): uint64` - returns uint64; ramdom binary bits by rdrand.
- `rng.rdSeed32(): uint32` - returns uint32; ramdom binary bits by rdseek.
- `rng.rdSeed64(): uint64` - returns uint64; ramdom binary bits by rdseek.
- `rng.normalizeUint32(uint32): number` - returns [0, 1] .
- `rng.normalizeUint64(uint64): number` - returns [0, 1] .

### What is the difference between RDSeed and RDrand:
- A pseudorandom generator that's periodically seeded from that noise source, whose output is available through the RDRAND instruction;
- A true random generator that's driven off the noise source, whose output is available through the RDSEED instruction.










