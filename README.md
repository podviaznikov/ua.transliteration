# transliteration.ua

JavaScript library for transliteration cyrillic ukrainian words to latin.
Was implemented with following Ukrainian law in mind: http://zakon1.rada.gov.ua/cgi-bin/laws/main.cgi?nreg=55-2010-%EF.

All test cases from the law are implemented.

Library can be used in browser on node.js platform.
Minified version can be found in the min directory.

Published as npm package - transliteration.ua.

## How to use

There is simple transliteration global object.

For transliterating simple do this:

    var transliteratedValue=transliteration.ua.transliterate('Алушта');

## License

(The MIT License)

Copyright (c) 2011 Enginimation Studio (http://enginimation.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
