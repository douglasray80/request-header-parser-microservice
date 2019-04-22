const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({ optionSuccessStatus: 200 })) // some legacy browsers choke on 204

app.use(express.static('public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + 'index.html')
})

app.get('/api/whoami', (req, res) => {
	/* example output
	{
		"ipaddress":"159.20.14.100",
		"language":"en-US,en;q=0.5", 
		"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
	}
	*/
	res.json({ ipaddress: '', language: '', software: '' })
})

const listener = app.listen(process.env.PORT || 4000, () => {
	console.log('Your app is listening on port ' + listener.address().port)
})
