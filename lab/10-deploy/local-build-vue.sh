## VUE SCRIPT
## adapted from https://cli.vuejs.org/guide/deployment.html#pushing-updates-manually
## CAUTION: this will overwrite whatever you currently have on your 'gh-pages' branch

# start in the top level of the app, where the 'package.json' file is
# build the Vue app, which compiles code into a /dist directory
npm run build # alternative: yarn build

# change to the /dist directory
cd dist

# create a temporary standalone repo inside the /dist directory (defaults to 'main' branch)
git init

# add all unstaged files in directory
git add .

# commit files on 'gh-pages' branch
git commit -m "[local-build-vue.sh] add /dist for gh-pages branch" # OPTIONAL update commit message

# set your thesis repo as the remote for this temporary standalone repo
git remote add origin $URL

# push to the 'gh-pages' branch on your thesis repo
git push origin main:gh-pages --force

# delete the temporary standalone repo
rm -rf .git

# return to top level of the app
cd ..
