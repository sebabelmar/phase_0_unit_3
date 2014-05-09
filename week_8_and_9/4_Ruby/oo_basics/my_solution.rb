# U3.W8-9: OO Basics: Student


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode



# 3. Initial Solution



class Student
  attr_accessor :scores, :first_name

  def initialize(first_name, *scores)   #Use named arguments!
    @first_name = first_name
    @scores = scores
  end

  def average
  	return @scores.inject(:+) / @scores.length  
  end

  def letter_grade
  	case average
  	when 100...90 then "A"
  	when 80..89 then "B"
  	when 70..79 then "C"
  	when 60..69 then "D"
  	else
  	"F"
  	end	
  end
end

def linear_search(students, str)
	i = 0
	result = []
  	while i < arr.length do
  		result << i if students.first_name == str 
  		i += 1
  	end

  	if result == [] 
  		return -1
  	else
  		return result.pop
  	end
end



# 4. Refactored Solution






# 1. DRIVER TESTS GO BELOW THIS LINE
# Tests for release 0:
students = []
students << Student.new("Alex", 100, 100, 100, 0, 100)
students << Student.new("Berni", 60, 70, 100, 50, 100)
students << Student.new("Carlos", 100, 60, 900, 80, 60)
students << Student.new("David", 100, 100, 80, 80, 90)
students << Student.new("Eleen", 100, 100, 50, 70, 90)

p students[0].first_name == "Alex"
p students[0].scores.length == 5
p students[0].scores[0] == students[0].scores[4]
p students[0].scores[3] == 0


# Tests for release 1:

p students[0].average == 80
p students[0].letter_grade == 'B'

# # Tests for release 2:

linear_search(students, "Alex") == 0
# p linear_search(students, "NOT A STUDENT") == -1





# 5. Reflection 