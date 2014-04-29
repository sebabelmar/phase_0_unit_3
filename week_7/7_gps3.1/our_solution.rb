# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1.Sebastian Belmar
# 2.Natalie Baer
 
# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to create a generic list of items
# As a user, I want to add items form the list
# As a user, I want to delete items form the list
# As a user, I want to see where items are in the list
# As a user, I want to display items from list


# Pseudocode
# Define a class named ShoppingList
#   Initialize (itmes) 
#   Define methods related to the user story
#Test the class ShoppingList and its methods
#Define a class named Item
 
 
class ShoppingList
  attr_reader :items
  
  def initialize(*items)
    @items = [] if items==nil
    @items = items
  end
  
  def add(*items)
    @items << items  
  end
  
  def display
    puts "Shopping List: "
    @items.flatten.each_with_index {|v, i| puts "#{i+1}. #{v}"}
  end  
  
  def delete(items)
     @items.delete(items)
  end  
    
end

# DRIVER CODE GOES HERE.
def assert
  raise "Something is wrong" unless yield
end

list = ShoppingList.new("apple", "banana")
assert {list.items[0] == "apple"}
assert {list.items == ["apple","banana"]}

list.add("cherries", "soap")
assert {list.items.flatten == ["apple","banana","cherries","soap"]}

list.delete("banana")
assert {list.items.flatten == ["apple","cherries", "soap"]}

list.display