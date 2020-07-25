const Discord = require('discord.js');
var fs = require('fs');
const client = new Discord.Client();

const token = 'NzE3MTkzNjAyMDg1ODE0MzMy.XtW4Ow.G4cJ3Z_LWGrQQrhiZ1Re8t_ezXE';

var theMsg;
client.on('ready' , () =>{
    console.log('This bot is online');
})

client.on('message' , (msg) =>{
    theMsg = msg;
    console.log("sent by: "+msg.member.user.tag)
    console.log('Msg Recieved:'+msg.content);
    if ( msg.author == client.user ){
        return
    }

    var str = msg.content;
    if ( str.includes(':gooddesignishard:') ){
        //cue jam young
        msg.channel.send('good design is *HARD*');
    }else if( str.includes(':guderian:') ){
        msg.channel.send('Hello, it\'s me your internet friend, Robert Guderian!');
    }else if ( str.includes(':bristow:') ){
        msg.channel.send('C is a very *thin* wrapper around memory!');
    }

    if ( msg.content.charAt(0) == '!' ){
        var cmd = msg.content.toString().substring(1,msg.content.toString().length);
        processCommand(cmd);
       // msg.channel.send(cmd);
    }
    
}); //end client.on

function processCommand(command){
    
    if ( command == "idk" ){
        theMsg.channel.send("figure it out");
    }else if ( command == "listsuggestions" ){
        //read contents of file
        fs.readFile('suggestions.txt', function err(err,data){
            theMsg.channel.send("Current Suggestions\r---------------\r"+data);
        });
    }else if ( command.includes("suggestion") ){
        fs.appendFile('suggestions.txt',command.substring(11,command.length)+" : "+theMsg.member.user.tag+"\r",function(err){
            if ( err ) throw err;
            console.log("suggestion Saved!");
            theMsg.channel.send("Suggestion recorded!");
        });
    }else if ( command == "help" ){
        var helpMsg = "Enter !suggestion followed by a prof youd like to see in the bot to the developer!\rEnter !listsuggestions to view the suggestions that have currently been made!";
        theMsg.channel.send(helpMsg);
    }else if ( command == "begone" ){
        if ( theMsg.member.user.tag == "brogrammer39#8849" ){
            theMsg.channel.send("i was just learning to love :(");
            client.destroy();
        }else{
            theMsg.channel.send("fuck you, youre not my real dad");
        }
        
    }
}

client.login(token);
