//Denpendencies 
var request = require("request");
var moment = require('moment');

//Logger timer setup
var start = process.hrtime();

//stolen from stackoverflow
var elapsed_time = function(note){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    console.log( moment().format('MMMM Do YYYY, h:mm:ss a') );
    start = process.hrtime(); // reset the timer
};

var reqOut = 1;
var reqFinished = 0;

//API Header Setup
var options = { method: 'POST',

//Taken from Postman -> Code -> NodeJS
url: 'http://someurltotest',
headers: 
 { 
   reqFinished: reqFinished,
   'cache-control': 'no-cache',
   Version: '1',
   Authorization: 'Bearer xyz',
   'Content-Type': 'application/json',
   Accept: 'application/json' },
body: '{}' 
};
    
//Timer Start
elapsed_time("start request 0 " );



// Initial API Request 
request(options, callback);


setInterval( function (){
  if ( reqOut < 1 )
  {
      if ( reqFinished > 25 )
      {
        process.exit();
      }

    //Timer Start
    reqOut++;
    elapsed_time("start request " + reqFinished);
    request(options, callback);
    
  }
  else {

  }
}, 2000 );

function callback (error, response, body ) {

  if (error)
  { 

     //If API Fails log time
     elapsed_time("stop request " + reqFinished + " due to failure");

    reqOut--;
    reqFinished++;
    
  } 
  else {
  elapsed_time("request "+ reqFinished + " succeeded"); 

  reqOut--;
  reqFinished++;
}

}




