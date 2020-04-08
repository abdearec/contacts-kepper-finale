first you need to install nodejs in your machine (google it) and run this code in your project folder in terminal : npm install
You need to add this file to: "/config/default.json", and you need to add this code in it:
{
"mongoURI": "mongodb+srv://username:password@clusterId.mongodb.net/NameCluster?retryWrites=true&w=majority",
"jwtsecret": "write here your code secret"
}

you need to get your mongoURI to connect your Backend Nodejs with your mongodb database.
jwtsecret : if you dont know what is jwt you need to google it ;)

For information:

- REACT project is in client folder
- the backend Project(nodejs) is the rest of the project , we use backend as API server
- to execute this project write the following code into a terminal :

  - to run full project [ (backend (Nodejs) and frontend (React) ] please write : npm run dev
  - to run backend (Nodejs API server) please write : npm run server
  - to run frontend (React) please write : npm run client

That is all and the project will work
