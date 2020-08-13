const Discord = require('discord.js');
var fs = require('fs');
const client = new Discord.Client();

const token = '';

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
    }else if( str.includes(':brett:') ){
        msg.channel.send('```Damn bro, save some pussy for the rest of us```')
    }
    if ( msg.content.charAt(0) == '!' ){
        var cmd = msg.content.toString().substring(1,msg.content.toString().length);
        processCommand(cmd);
       // msg.channel.send(cmd);
    }
    if ( str.includes('http:') || str.includes('.com') ){
        console.log('somebody shared a link')
        retmsg = msg.member.user.tag+' shared link in message "'+msg+'" in the '+getChannelName(msg.channel.id)+' channel'
        //send msg to the moderation 
        client.channels.get('736741727125110837').send(retmsg)
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

function getChannelName(id){
    channelName = '';

     switch(id){
         case '570046290789007399':
             channelName = 'general';
             break;
         case '626482799725248512':
             channelName = 'jedi-council'
             break;
         case '717036152770527252':
             channelName = 'comp3350';
             break;
         case '735297752656773260':
             channelName = 'comp3430';
             break;
         case '735297337022480404':
             channelName = 'comp3010';
             break;
         case '735297594284179466':
             channelName = 'comp3170';
             break;
        case '570082851937189888':
            channelName = 'music-commands';
            break
        default:
            channelName = 'unknown'
     }
     return channelName;
}

client.login(token);
