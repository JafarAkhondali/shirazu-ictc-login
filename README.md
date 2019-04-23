# Shirazu-ictc-login
A cli internet-connector instead of ictc.hs/login

# Why?
As we all(Shiraz university students) know, sometimes ictc.hs/login take a year to load and the reason is some of it's resources might fail to load !   
This script will simply calculate hash of password on your computer and uses cached hash function instead of loading them again from ictc.hs
All you have to do is copy .env.example to .env, and set you creditenals in ".env" file

Usage
----
```
git clone https://github.com/JafarAkhondali/shirazu-ictc-login.git
cd shirazu-ictc-login
npm i
cp .env.example .env
nano .env
node index.js
```

Shortcut
---
```
alias connect="cd /home/black-hole/projects/shirazu-ictc-login/ && node index.js";
```
