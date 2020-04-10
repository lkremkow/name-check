const fs = require('fs');

// adjust this to determine the number of characters in the string
// default length is 5 for 6 characters
let string_length = 3;

let string_position_counter = new Array(string_length);

// 0 to 9 to a to z
// let start_char = 48; // 0
// let end_char = 122; // z

// 0 to 9
// let start_char = 48; // 0
// let end_char = 57; // 9

// a to z
let start_char = 97; // a
let end_char = 122; // z

for (let counter = 0; counter < string_length; counter++) {
  string_position_counter[counter] = start_char;
};

let total_strings_processed = 0;

save_new_string();

function increment_by_one(): void {
  string_position_counter[string_length-1]++;
  if (string_position_counter[string_length-1] === 58) { // skip over symbols
    string_position_counter[string_length-1] = 97;
  };

  for (let counter = string_length-1; counter >= 0; counter--) {
    if ((string_position_counter[counter] > end_char) && (counter > 0)) {
      string_position_counter[counter] = start_char;
      string_position_counter[counter-1]++;
      if (string_position_counter[counter-1] === 58) {
        string_position_counter[counter-1] = 97;
      };
    };
  };
  total_strings_processed++;

  if (string_position_counter[0] <= end_char) {
    save_new_string();
  };

};

function print_new_string(): void {
  console.log(total_strings_processed + " [" + get_new_string() + "]");
};

function save_new_string(): void {
  if ((total_strings_processed % 50000) === 0) {
    print_new_string();
  };

  fs.appendFile("host_names.txt", get_new_string() + "\n", function (error) {
    if (error) throw error;
    increment_by_one();
  });
};

function get_new_string(): string {
  let new_string = "";
  for (let counter = 0; counter < string_length; counter++) {
    new_string = new_string + String.fromCharCode(string_position_counter[counter]);
  };

  return new_string;
};
