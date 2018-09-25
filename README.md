# Name Check

  Generate all possible host names sequentially and check if they are used within a domain.


## Notes

   TODO: Describe what this does.


## Requirements

   * [Node.js](https://nodejs.org/en/); tested with 8.9.4, 8.11.1 and 8.11.3 LTS
   * [NPM](https://www.npmjs.com); tested with 5.6.0, 6.1.0, and 6.3.0


## Installation

   `git clone https://github.com/SeparateLevel/name-check.git name-check`

   `cd name-check`

   `npm install`

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

   Copyright (C) 2018 Leif Kremkow <kremkow@tftg.net> (http://www.tftg.com)

   This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, version 3 of the License.

   This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

   You should have received a copy of the GNU Affero General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.
