const koffi = require('koffi');
const path = require('path');

const libPath = path.resolve(__dirname, 'librdrand.'+((process.platform=='win32')?'dll':'so')); 
const lib = koffi.load(libPath);

module.exports.isRrdrandSupported= lib.func('int is_rdrand_supported()');
module.exports.rdRand32= lib.func('uint32 rdrand32()')
module.exports.rdRand64= lib.func('uint64 rdrand64()')
module.exports.rdSeed32= lib.func('uint32 rdseed32()')
module.exports.rdSeed64= lib.func('uint64 rdseed64()')
module.exports.normalizeUint32=(uint32)=> {
    return  uint32 / 0xFFFFFFFF;
}
module.exports.normalizeUint64=(uint64) => {
    const maxUint64 = BigInt('0xFFFFFFFFFFFFFFFF');
    const numerator = Number(uint64);
    const denominator = Number(maxUint64);
    return numerator / denominator;
}

