# Name Check

  Generate all possible host names sequentially and check if they are used within a domain.


## Notes

   Generate a file with all the possible names that can be generated from a list of permitted characters.

   Check against DNS if these names are registered in DNS.


## Requirements

   * [Node.js](https://nodejs.org/en/); tested with 8.9.4, 8.11.1, 8.11.3 LTS, 12.16.2
   * [NPM](https://www.npmjs.com); tested with 5.6.0, 6.1.0, 6.3.0, 6.14.4
   * [TypeScript](https://www.npmjs.com/package/typescript); tested with 3.8.3

   Check that npm is up to date: `sudo npm i -g npm`

   Clear npm cache `sudo npm cache clean -f`

   Install the helper "n": `sudo npm install -g n`

   Install latest stable Node.js version: `sudo n stable`

   Install TypeScript `npm install -g typescript`


## Installation

   `git clone https://github.com/SeparateLevel/name-check.git name-check`

   `cd name-check`

   `npm install`

   Change "start_char" and "end_char" in "src/main.ts" to define in which range of characters to generate names.

   Change ".tftg.net" to the domain you are enumerating in "src/check_names.ts".

   `tsc`


## Usage

   To generate names: `node dist/main.js`

   To check the names: `node dist/check_names.js`


## Contributing

   TODO: Write instructions how to reports bugs and contribute. Link to public repository.


## History

   TODO: Write history.


## Credits

   TODO: Write credits.


## License

   Copyright (C) 2020 Leif Kremkow <kremkow@tftg.net> (http://www.tftg.com)

   This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, version 3 of the License.

   This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

   You should have received a copy of the GNU Affero General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.
