
# U3.W8-9: Numbers to English Words


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
# DEFINE a  method call in_words that passes an integer from 0 to 100.
# 	TRANSFORM the integer into an array where each digit is an element
# 	DEFINE an varibale named word as an empty string
# 	ITERATE over the array depeding its lenght and complete the word related to
# 	the case.
# END

# When translating my Pseudocode in to code I realize that
# dividing a number by 10 or modulo it was easier than the way I though before.
# So...
# DEFINE a method in_words that passes digit as a parameter
# 	DEFINE a 3 variables =to to digit / 100, digit / 10,  digit % 10
# 	DEFINE a variable word = to a empty string
# 	DEFINE the case for one hundred
#   Write an if statement to pass into words the corresponding tranlation
# 	for each case depending if the digits are teens or grater.
#   write a case to pass into word the units translation
# END


# # 3. Initial Solution
# def in_words digit
# 	h_p = digit / 100  #hundred place
# 	t_p = digit / 10   #tens place
# 	u_p = digit % 10   #unit place
	
# 	word = ""

# 	word = "one hundred" if h_p == 1

# 	if t_p == 1
# 		case digit
# 		when 11 then word << "eleven"
# 		when 12 then word << "twelve"
# 		when 13 then word << "thirteen"
# 		when 14 then word << "fourteen"
# 		when 15 then word << "fifteen"
# 		when 16 then word << "sixteen"
# 		when 17 then word << "seventeen"
# 		when 18 then word << "eightteen"
# 		when 19 then word << "nineteen"
# 		else
# 			word << ""
# 		end	
# 	elsif t_p >= 2 
# 		case t_p
# 		when 2 then word << "twenty "
# 		when 3 then word << "thrity "
# 		when 4 then word << "fourty "
# 		when 5 then word << "fifty "
# 		when 6 then word << "sixty "
# 		when 7 then word << "seventy "
# 		when 8 then word << "eighty "
# 		when 9 then word << "ninety "
# 		else
# 			word << ""
# 		end
# 	end

# 	case u_p
# 	when 1 then word << "one"
# 	when 2 then word << "two"
# 	when 3 then word << "three"
# 	when 4 then word << "four"
# 	when 5 then word << "five"
# 	when 6 then word << "six"
# 	when 7 then word << "seven"
# 	when 8 then word << "eight"
# 	when 9 then word << "nine"
# 	else
# 		word << ""
# 	end

# 	word
# end


# # 4. Refactored Solution


def in_words digit
	h_p = digit / 100  #hundred place
	t_p = digit / 10   #tens place
	u_p = digit % 10   #unit place

	return "one hundred" if h_p == 1

	word = ""

	if t_p == 1
		case digit
		when 11 then word << "eleven"
		when 12 then word << "twelve"
		when 13 then word << "thirteen"
		when 14 then word << "fourteen"
		when 15 then word << "fifteen"
		when 16 then word << "sixteen"
		when 17 then word << "seventeen"
		when 18 then word << "eightteen"
		when 19 then word << "nineteen"
		end	
	elsif t_p >= 2 
		case t_p
		when 2 then word << "twenty "
		when 3 then word << "thrity "
		when 4 then word << "fourty "
		when 5 then word << "fifty "
		when 6 then word << "sixty "
		when 7 then word << "seventy "
		when 8 then word << "eighty "
		when 9 then word << "ninety "
		else
		end
	end

	case u_p
	when 1 then word << "one"
	when 2 then word << "two"
	when 3 then word << "three"
	when 4 then word << "four"
	when 5 then word << "five"
	when 6 then word << "six"
	when 7 then word << "seven"
	when 8 then word << "eight"
	when 9 then word << "nine"
	else
	end

	word
end


# # 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
def assert
	raise "Something is wrong" unless yield
end

assert{in_words(4)} == "four"
assert{in_words(27)} == "twenty seven"
assert{in_words(92)} == "ninety two"
assert{in_words(100)} == "one hundred"


# 5. Reflection
# THIS IS NOT AN EFFICIENT PROGRAM, there a few things that I would fix
# The space after each a close tens place like 20 "twenty " 
# and well it works only for numbers less equal than a hundred.
# I liked that I started with something in mind and turn it to a completely different
# program. I think there showld be a easier wat to do this. I need to check what 
# others did.