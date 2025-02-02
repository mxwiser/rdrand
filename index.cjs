const ffi = require('ffi-napi');




const mylib = ffi.Library('./librdrand', {
    'is_rdrand_supported': ['int', []],
    'rdrand32': ['uint32', []],
    'rdrand64': ['uint64', []],
    'rdseed32': ['uint32', []],
    'rdseed64': ['uint64', []],
})


module.exports.isRrdrandSupported= mylib.is_rdrand_supported;
module.exports.rdRand32= mylib.rdrand32;
module.exports.rdRand64= mylib.rdrand64;
module.exports.rdSeed32= mylib.rdseed32;
module.exports.rdSeed64= mylib.rdseed64;
module.exports.normalizeUint32=(uint32)=> {
    return  uint32 / 0xFFFFFFFF;
}
module.exports.normalizeUint64=(uint64) => {
    const maxUint64 = BigInt('0xFFFFFFFFFFFFFFFF');
    const numerator = Number(uint64);
    const denominator = Number(maxUint64);
    return numerator / denominator;
}

