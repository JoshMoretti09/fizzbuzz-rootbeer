function beer (){
	for (var i = 99; i > 0; i--)
		console.log(i + " Bottles of beer of the wall, " + i + " Bottles of beer of the wall... " 
			+ "take one down and pass it around, ") 
	if (i === 0) {
		console.log(i + " bottles of beer on the wall! " + "Your outta beer ya drunk!")
	}
}
beer();