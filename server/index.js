const express = require("express")

const app = express()

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db.js')(app)
require('./routes/admin/index.js')(app)

app.listen(9001,()=>{
	console.log("9001")
})

