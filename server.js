const express = require('express')
const app = express()
const axios = require('axios')

app.use(express.json())

app.post("/forwarder", async (req, res) => {
    const {text, name} = req.body
    const data = {text}
    try {
        const response = await axios.post(`https://api.funtranslations.com/translate/${name}.json`, data)
        return res.send(response.data)
    } catch(err){
        console.log(err)
    }
})

app.listen(6000, () => {
    console.log("Server is up on port 6000")
})

// data:
// contents:
// text: "hello how are you"
// translated: "You,  Force be with you how are"
// translation: "yoda"