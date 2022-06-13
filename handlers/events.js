const {getFiles} = require("../util/functions")


module.exports = (bot, reload) =>{
    const {client} = bot
    let events = getFiles("./events/", ".js")

    if(events.lenght === 0){
        console.log("No events to load")
    }

    events.forEach((f, i) => {
        if(reload) 
            delete require.cache[require]
        const event = require(`../events/${f}`)
    })
}