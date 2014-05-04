# U3.W8-9: 


# I worked on this challenge Eoin

# 2. Pseudocode
# DEFINE perfect square formula for fibonacci #1
# DEFINE perfect square formula for fibonacci #2
# WRITE Bolean

# The pseudo above didnt work becasue BIGNUM

# REFACTOR using while loop startig form a de first pair od the
# squence that do not include 1.

# 3. Initial Solution

# def is_fibonacci?(num)
# formula1 = (((5*num**2)+4)**0.5) % 1.0
# formula2 = (((5*num**2)-4)**0.5) % 1.0

# (formula1 == 0 || formula2 == 0) ? true : false

# end



# 4. Refactored Solution

def is_fibonacci?(num)
	return true if num == 0 || num == 1
	fb_pair = [2,3]

	while fb_pair.inject(:+) < num do
		fb_nxt_num = fb_pair.inject(:+)
		fb_pair.shift 
		fb_pair << fb_nxt_num
	end

	fb_pair[0] + fb_pair[1] == num ? true : false

end


# 1. DRIVER TESTS GO BELOW THIS LINE

def assert
	raise "Mr. Fibonacci is not working" unless yield
end

assert{is_fibonacci?(8670007398507948658051921) == true}
assert{is_fibonacci?(927372692193078999171)== false}
assert {is_fibonacci?(21) == true}
assert {is_fibonacci?(13) == true}
assert {is_fibonacci?(2584) == true}
assert {is_fibonacci?(31) == false}
assert {is_fibonacci?(14) == false}


# 5. Reflection 
# This was an excellent challenge.
# We spend around 2 hours trying to deal with fixnum and trying to make conditionals
# work using them. We learned a lot about them plus Bigdecimal.
# But at the end the root square of a bignum seems to be to far away from an
# Integer so we decided to find an other way to solve this.
# And it worked!.





