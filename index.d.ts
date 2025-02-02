declare module 'index' {
    /**
     * Checks if the CPU supports the RDRAND instruction.
     * @returns 1 if supported, 0 if not supported
     */
    export function isRrdrandSupported(): number;
  
    /**
     * Generates a 32-bit random number by rdrand.
     * @returns An unsigned integer between 0x00000000 and 0xFFFFFFFF
     */
    export function rdRand32(): number;
  
    /**
     * Generates a 64-bit random number by rdrand.
     * @returns An unsigned integer between 0x0000000000000000 and 0xFFFFFFFFFFFFFFFF
     * @remarks Due to JavaScript's precision limitations, the actual return type is number
     */
    export function rdRand64(): number;

    /**
    * Generates a 32-bit random number by rdseed.
    * @returns An unsigned integer between 0x00000000 and 0xFFFFFFFF
    */
    export function rdSeed32(): number;

    /**
    * Generates a 64-bit random number by rdseed.
    * @returns An unsigned integer between 0x0000000000000000 and 0xFFFFFFFFFFFFFFFF
    * @remarks Due to JavaScript's precision limitations, the actual return type is number
    */
    export function rdSeed64(): number;
  
    /**
     * Normalizes a 32-bit unsigned integer to the [0, 1) range.
     * @returns A floating-point number between 0 and 1
     */
    export function normalizeUint32(uint32 :number): number;
  
    /**
     * Normalizes a 64-bit unsigned integer to the [0, 1) range.
     * @returns A floating-point number between 0 and 1
     * @remarks Due to JavaScript's precision limitations, values exceeding 2^53 will suffer from precision loss
     */
    export function normalizeUint64(uint64 :number): number;
  }