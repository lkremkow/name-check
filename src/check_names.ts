let file_system = require('fs')
let event_stream = require('event-stream');

let lineNr: number = 0;

let dns = require('dns');

let domain_name: string = ".tftg.net";

let dns_options = {
  family: 4,
  hints: dns.ADDRCONFIG
};

var data_stream = file_system.createReadStream('host_names.txt')
    .pipe(event_stream.split())
    .pipe(event_stream.mapSync(function(line: string){

        // pause the readstream
        data_stream.pause();

        lineNr += 1;

        // console.log(lineNr + " " + line);
        if (line.length > 0 ) {
          query_dns(line);
        };
        
        // resume the readstream, possibly from a callback
        // data_stream.resume();
    })
    .on('error', function(err){
        console.log('Error while reading file.', err);
    })
    .on('end', function(){
        console.log('Read entire file.')
    })
);

function query_dns(hostname: string): void {

  dns.lookup(hostname + domain_name, dns_options, (error, address, family) => {
    if (error) {
      if (error['code'] === "ENOTFOUND") {
        // console.log(hostname + ": 0.0.0.0");
        save_finding(hostname + domain_name + " 0.0.0.0");
      } else {
        throw error;
      };
    } else {
      // console.log(hostname + ": " + address);
      save_finding(hostname + domain_name + " " + address);
      // save_finding(current_name + " " + address);
    };

    var wait_this_long: number = getRandomInt(145);
    setTimeout(data_stream.resume, wait_this_long);

  });

};

function save_finding(result_string: string): void {
  file_system.appendFile("results.txt", result_string + "\n", function (error) {
    if (error) throw error;
  });
};

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
};