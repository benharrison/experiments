# Largest prime factor
# Problem 3
# The prime factors of 13195 are 5, 7, 13 and 29.
import math
import time

start = time.clock()

n = 600851475143
# n = 13195
# n = 37

i = 2
# 2*2=4,3*3=9,4*4=16
# final total must be less than the square root of n
while i < n:
    while n % i == 0:
        n = n / i
        print('i: {}, n: {}'.format(i, n))
    i = i + 1

end = time.clock()

print('{} - {}'.format(int(n), end - start))
