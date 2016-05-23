xkcd-substitutions
==================

A small script that makes reading news more fun – based on http://xkcd.com/1288/, http://xkcd.com/1625/, and http://xkcd.com/1679/.

Usage
-----

Just create a new bookmark with the name “XKCD Substitutions” and with the code below as the URL:

    javascript:var s = document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='https://cdn.rawgit.com/michalkow/xkcd-substitutions/master/substitutions.js';void(0);

Then, when on a news page, open the bookmark to perform the substitutions on the current page.

License
-------
The xkcd-substitutions script is released under the [MIT license](http://opensource.org/licenses/mit-license.php).

Credits
-------
The xkcd-substitutions script was created by [Michał Kowalkowski](https://github.com/michalkow). You can contact me at [kowalkowski.michal@gmail.com](mailto:kowalkowski.michal@gmail.com).
