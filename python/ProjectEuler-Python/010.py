# Summation of primes
# Problem 10

# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

# Find the sum of all the primes below two million.

import math
import time

FIND_PRIMES_BELOW = 10
FIND_PRIMES_BELOW = 2000000

def is_prime(n):
    if n > 1:
        if n == 2:
            return True

        if n % 2 == 0:
            return False

        # for x in range(3, n, 2):
        for x in range(3, int(math.sqrt(n)) + 1, 2):
            if n % x == 0:
                return False

        return True

    return False

start = time.clock()

sum = 0
for x in range(0, FIND_PRIMES_BELOW):
    if is_prime(x):
        print(x)
        sum += x

end = time.clock()

# Answer:
#     142913828922
# Completed on Mon, 3 Nov 2014, 19:08

print('{} - {}'.format(sum, end - start))


