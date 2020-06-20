const fs = require('fs')
const path = require('path')

const dictionary = fs.readFileSync(path.resolve(__dirname, 'dictionary.txt')).toString()
const wordList = dictionary.split(require('os').EOL)

/**
 * 
 * @param {Number} numberOfWords 
 * @param {Boolean} enableRandomNumber 
 */
module.exports = {
    generateUsernames({ numberOfWords = 2, enableRandomNumber = true }) {
        const userName = [];
        for (var i = 0; i < numberOfWords; i++) {
            userName.push(wordList[Math.floor(Math.random() * wordList.length)])
        }
        if (enableRandomNumber)
            userName.push(Math.floor(Math.random() * 100));
        return userName.join("")

    }
}