# Display the characters in a string in reverse order

# define test case:
string = 'abcdefg';


# Fastest & easiest route utilizes extended slice to copy in reverse
# leaving start/end blank copies whole string
#
print string[::-1]


# Can use built-in reverse function and concatenation:
#
print ''.join(reversed(string))


# Iterative:
#
def reverse_string(string):
	reversed = ''
	for characters in string:
	  reversed = characters + reversed
	return reversed
print reverse_string(string)
