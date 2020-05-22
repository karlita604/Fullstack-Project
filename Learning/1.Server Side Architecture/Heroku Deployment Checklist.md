
## Heroku Deployment Checklist

* these will only need to be done exactly one time!
* get the application ready to be executed or hosted by Heroku
* a lot of these steps are used for a lot of different providers! 
* So this list is rather important 

**Dynamic Port Binding:** 

Heroku tells us which port our app will use, so we need to make sure that we listen to the port they tell us to.

* Expect us to listen to HTTP traffic on a very specific port.
* Heroku will expose the specific port to tell us where traffic will be coming from
* **const PORT = process.env.PORT || 5000;**
   **app.listen(PORT);**

We have to wait until the app is being executed 
by Heroku when we can look in the underlying environment 
to see if a port has been declared

If we are running in a developping environment this
variable may not be declared so we need to add the 5000 as default.

Or whatever port Heroku is telling us to listen to.

**Specify Node Environment:** 
We want to use a specific version of node, so we need to tell Heroku which version (of Node) we want.
* Inside your package.json you will specify what version you want to use
* Between "main" and "scripts"
* **"engines":  {
						"node": "8.1.1",
						"npm": "5.0.3"
						},**
*don't miss all the commas

**Specify start script:**
Instruct Heroku what command to run to start our server running

* inside package.json files, delete the "scripts" existing test script and replace with 
* **"scripts": {
		"start": "node index.js"
		},**
* whenever Heroku will run our application, it will execute the start command

**Create .gitignore file:**
we dont want to include dependencies, Heroku will do that for us.
* make sure we do not commit any dependencies we created or installed
* express is a dependency we installed
* traditionally we do not commit these to our git, we let Heroku install these dependencies itself.
*  We do not want to accidentally commit
* Make new fine inside server
* name it .gitignore
* Contains : node_modules
* Save
