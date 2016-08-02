# Smallest multiple
# Problem 5

# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

MAX = 20

import time
start = time.clock()

found = False
step = MAX * (MAX-1) # ex: 10*9=90. we can increment by 90 as we go
current_number = step

primes = []
non_primes = []

def is_prime(n):
    if n == 2 or n == 3: return True
    if n < 2 or n%2 == 0: return False
    if n < 9: return True
    if n%3 == 0: return False
    r = int(n**0.5)
    f = 5
    while f <= r:
        print '\t',f
        if n%f == 0: return False
        if n%(f+2) == 0: return False
        f +=6
    return True  

# build descending lists of primes and non-primes
for x in range(MAX-1,0,-1): # 9,8,7..
    if is_prime(x):
        primes.append(x)
    else:
        non_primes.append(x)

print(primes)
print(non_primes)

while found is False:
    found = True

    # check the prime numbers first. these would be most likely to fail
    for x in primes:
        if current_number%x != 0:
            found = False
            current_number += step
            break

    # if found == False: # this check was intended to be more efficient, but oddly adds about 50% more time
    #     continue

    for x in non_primes:
        if current_number%x != 0:
            found = False
            current_number += step
            break

print(current_number)

end = time.clock()
print(end - start) # 0.173883

# Answer:
#     232792560