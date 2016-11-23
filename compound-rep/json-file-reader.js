'use strict'

const fs = require ('fs')

let readThis = ( filename, callback ) => {
//read the customer data json
	fs.readFile( filename, 'utf8', ( err, data ) => {
		// parse the file t a readable object
		let parsedData = JSON.parse(data)
		callback ( parsedData )
	} ) 
}

module.exports = readThis