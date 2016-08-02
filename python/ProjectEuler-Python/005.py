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

while found is False:
    for x in range(MAX-1,0,-1): # 9,8,7..
        found = True
        if current_number%x != 0:
            found = False
            current_number += step
            # print(current_number)
            break

print(current_number)

end = time.clock()
print(end - start) # 0.417451

# Answer:
#     232792560