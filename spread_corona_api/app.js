const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()

// This line is required to parse the request body
app.use(express.json())
app.use(cors({
    origin: '*',
}))

// Create - POST method
app.post('/highscore', (req, res) => {
    // Gets the existing high score data
    const existHighScores = getHighScoreData()
    
    // Gets the new high score data from post request
    const highScoreData = req.body

    // Checks if the highScoreData fields are missing
    if (highScoreData.player_name == null || highScoreData.infected_score == null || highScoreData.score_time == null) {
        return res.status(400).send({error: true, msg: 'High score data missing'})
    }

    // Appends the high score data
    existHighScores.push(highScoreData)

    existHighScores.sort((a, b) => {
        if (a.score_time > b.score_time)
            return -1
        if (a.score_time < b.score_time)
            return 1
        return 0
    })

    if (existHighScores.length > 10) existHighScores.splice(-1, 1)

    // Save the new high score data
    saveHighScoreData(existHighScores);
    res.send({success: true, msg: 'High score data added successfully'})
})

// Read - GET method
app.get('/highscore', (req, res) => {
    const highScore = getHighScoreData()
    res.send(highScore)
})

// Gets the high score data from json file
const getHighScoreData = () => {
    const jsonData = fs.readFileSync('high_score.json')
    const highScore = JSON.parse(jsonData)
    for (let i = 0; i < highScore.length; i++) {
        highScore[i].rank = i + 1
    }
    return highScore
}

// Read the high score data from json file
const saveHighScoreData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('high_score.json', stringifyData)
}

// Configures the server port
app.listen(3030, () => {
    console.log('Server runs on port 3030')
})