const mongoose = require('mongoose');

(async () => {
	try {
		console.log('Connecting to database ...')
		await mongoose.connect(process.env.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('Connected to database successfully')
	} catch (error) {
		console.error('Error: failed to connect to database')
	}
})()
