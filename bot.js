var Botkit = require('botkit')

var controller = Botkit.slackbot({
    debug: false,
    retry: 10,
    studio_token: 'xoxb-110414350851-qxeONEPsor4iVbrt2KyjAzeB'
})

var bot = controller.spawn({
    token: controller.studio_token
}).startRTM();
