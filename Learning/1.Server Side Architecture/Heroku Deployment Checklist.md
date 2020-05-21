## Heroku Deployment Checklist

**Dynamic Port Binding:** 

Heroku tells us which port our app will use, so we need to make sure that we listen to the port they tell us to.

**Specify Node Environment:** 

We want to use a specific version of node, so we need to tell Heroku which version we want.

**Specify start script:**

Instruct Heroku what command to run to start our server running

**Create .gitignore file:**

we dont want to include dependencies, Heroku will do that for us.
