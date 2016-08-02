# Largest palindrome product
# Problem 4

# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

MAX = 999

import time
start = time.clock()

def is_palindrome(n):
    strN = str(n)
    strReverse = strN[::-1]
    return strN == strReverse

def find_largest_palindrome(max_n):
    largest_palindrome = 0

    # there is no need to check numbers below the largest multiplier.
    # for instance on the first iteration the highest palindrome is 90909 (999 * 91).
    # 91 becomes the largest multiplier, so there is no need to check values 90 or below
    largest_multiplier = 0

    for x in range(max_n,largest_multiplier,-1):
        for y in range(max_n,largest_multiplier,-1):
            result = x * y
            is_p = is_palindrome(result)
            if is_p:
                if result > largest_palindrome:
                    print('{} {} {} {}'.format(x,y, result, is_p))
                    largest_palindrome = result

                if y > largest_multiplier:
                    largest_multiplier = y

                break

    return largest_palindrome

largest_palindrome = find_largest_palindrome(MAX)
print(largest_palindrome)

end = time.clock()
print(end - start)

# Answer:
#     906609
# Completed on Mon, 3 Nov 2014, 15:16 (Originally solved in C#)