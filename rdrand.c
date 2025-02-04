#include <stdio.h>
#include <stdint.h>

// build: gcc -shared  -o librdrand.so rdrand.c
int is_rdrand_supported()
{
    uint32_t eax, ebx, ecx, edx;
    eax = 1;
    __asm__ volatile(
        "cpuid"
        : "=a"(eax), "=b"(ebx), "=c"(ecx), "=d"(edx)
        : "a"(eax));
    return (ecx >> 30) & 1;
}

int rdrand32()
{
    uint32_t rand;
    unsigned char ok;
    __asm__ volatile(
        "rdrand %%eax; setc %0"
        : "=r"(ok), "=a"(rand)
        :
        : "cc");
    return (uint32_t)rand;
}

int rdseed32()
{
    uint32_t rand;
    unsigned char ok;
    __asm__ volatile(
        "rdseed %%eax; setc %0"
        : "=r"(ok), "=a"(rand)
        :
        : "cc");
    return (uint32_t)rand;
}

int rdrand64()
{
    uint64_t rand;
    unsigned char ok;
    __asm__ volatile(
        "rdrand %%rax; setc %0"
        : "=r"(ok), "=a"(rand)
        :
        : "cc");
    return (uint64_t)rand;
}

int rdseed64()
{
    uint64_t rand;
    unsigned char ok;
    __asm__ volatile(
        "rdseed %%rax; setc %0"
        : "=r"(ok), "=a"(rand)
        :
        : "cc");
    return (uint64_t)rand;
}