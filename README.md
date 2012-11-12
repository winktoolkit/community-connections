Showcase webapp
===============
This is a Wink showcase webapp. For more info about wink, please visit http://www.winktoolkit.org/ or contact us at winktoolkit@gmail.com


Setting the webapp up
=====================
To use the Dojo Foundation "Community Connections" webapp, download the latest versions of Wink Toolkit and the Dojo toolkit. Copy the entire Wink directory at the root of the project. Copy the dojo toolkit's "dijit", "dojo" and "dojox" folders at the root of the project


Building with Dojo
==================

If you want to build all the JS together:

1) copy dojo toolkit's "util" folder at the root of the project

2) copy wink-profile.js in "util/buildscripts/profiles"

3) from the "util/buildscripts/profiles" directory, run "build.sh (or build.bat) -p profiles/wink-profile.js"