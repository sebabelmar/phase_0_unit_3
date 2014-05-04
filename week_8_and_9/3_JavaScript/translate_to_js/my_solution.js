// U3.W8-9: Challenge you're converting


// I worked on this challenge [by myself, with: ].

// 2. Pseudocode



// 3. Initial Solution

// def is_fibonacci?(num)
// 	return true if num == 0 || num == 1
// 	fb_pair = [2,3]

// 	while fb_pair.inject(:+) < num do
// 		fb_nxt_num = fb_pair.inject(:+)
// 		fb_pair.shift 
// 		fb_pair << fb_nxt_num
// 	end

// 	fb_pair[0] + fb_pair[1] == num ? true : false

// end


// 4. Refactored Solution

var isFibonnaci = function(num){
	if(num === 1 || num === 0){
		return true
	}

	var fb_pair = [1,2]
	while (fb_pair[0] + fb_pair[1] < num){
		var fb_nxt_num = fb_pair[0] + fb_pair[1]
		fb_pair.shift() 
		fb_pair.push(fb_nxt_num) 
	}

	if((fb_pair[0] + fb_pair[1]) === num ){
		return true
	}
	else{
		return false
	}

}



// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

console.log(isFibonnaci(1) === true)
console.log(isFibonnaci(8) === true)
console.log(isFibonnaci(13) === true)
console.log(isFibonnaci(40) === false)
console.log(isFibonnaci(323) === false)
console.log(isFibonnaci(927372692193078999171) === false)


// 5. Reflection 