cd /tmp

# try to remove the repo if it already exists
rm -rf costellonator; true

git clone https://github.com/davemckenna01/costellonator.git

cd costellonator

npm install

node app.js