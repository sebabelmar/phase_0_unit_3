# U3.W8-9: 


# I worked on this challenge Eoin

# 2. Pseudocode
# DEFINE a method that takes an array as parameter. Name it super_fizzbuzz
# DEFINE an empty array name it result
# ITERATE on the array and replace values pushing them to the Result.
# RETRUN result


# 3. Initial Solution

# def super_fizzbuzz(array)
# 	result = []
	
# 	array.each do |element|
# 		if element % 15 == 0
# 			result << "FizzBuzz"
# 		elsif element % 3 == 0 
# 			result << "Fizz"
# 		elsif element % 15 == 0
# 			result << "Buzz" 
# 		else
# 			result << element
# 		end
# 	end
# 	p result
# end

# 4. Refactored Solution

def super_fizzbuzz(array)
	result = []
		array.each do |element|
		case	
		when element % 15 == 0
			result << "FizzBuzz"
		when element % 3 == 0 
			result << "Fizz"
		when element % 5 == 0
			result << "Buzz" 
		else
			result << element
		end
	end
	result
end

# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def assert
	raise 'Something is wrong' if yield
end

def random_input_array(base, size)
  (1..size).map { |i| base**(1+rand(15)) }
end

 
assert {super_fizzbuzz(random_input_array(3,100)) == "Fizz"*100}
assert {super_fizzbuzz(random_input_array(5,100)) == "Buzz"*100}
assert {super_fizzbuzz(random_input_array(15, 100)) == "FizzBuzz"*100}
assert {super_fizzbuzz([1,2,3]) == [1,2,'Fizz']}
assert {super_fizzbuzz([15, 5, 3, 1]) == ['FizzBuzz', 'Buzz', 'Fizz', 1]}


# 5. Reflection 
# This challenge was pretty streight forward. We went thru the logic of it fast and
# iot didnt took us much time.
# We struggle translating the rspec.
# It was really good practice and it's allways good to pair.
