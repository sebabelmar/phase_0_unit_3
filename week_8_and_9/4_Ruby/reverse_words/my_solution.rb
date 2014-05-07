# U3.W8-9: Reverse Words


# I worked on this challenge Kevin Kang, Clark Hinchcliff, Sebastian Belmar.

# 2. Pseudocode

# DEFINE method reverse_words that passes a string
# 	split map each reverse and join it!
# end


# 3. Initial Solution

def reverse_words (words)
	words.split.map! {|word| word.reverse}.join(" ")
end


# 4. Refactored Solution
# No refactor code because we came up with something efficient and readable.


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

def random_word(length = 5)
  rand(36**length).to_s(36)
end

def assert 
	raise "Something is wrong" unless yield
end

assert{reverse_words("") ==  ""}

word = random_word
assert{reverse_words(word) == word.reverse}

word1 = random_word
word2 = random_word
assert{reverse_words("#{word1} #{word2}") ==  "#{word1.reverse} #{word2.reverse}"}

assert{reverse_words("Ich bin ein Berliner") ==  "hcI nib nie renilreB"}

# 5. Reflection
# After translating th rspec was clear what to do.
# Writing this code was simple but when we decided to maybe solve it not using the method reverse in challenges us more.
# For a sake of time we decided to leave it with reverse.
