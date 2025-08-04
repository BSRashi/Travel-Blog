Last login: Thu Jul 31 23:28:17 on ttys000
rashii@Rashenkas-MacBook-Air ~ % source ~/.zshrc                               

source: no such file or directory: /Users/rashii/.zshrc
rashii@Rashenkas-MacBook-Air ~ % nvm install --lts

zsh: command not found: nvm
rashii@Rashenkas-MacBook-Air ~ % # Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# in lieu of restarting the shell
\. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.4.1".
nvm current # Should print "v24.4.1".

# Verify npm version:
npm -v # Should print "11.4.2".

zsh: command not found: #
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 16631  100 16631    0     0  48373      0 --:--:-- --:--:-- --:--:-- 49204
=> nvm is already installed in /Users/rashii/.nvm, trying to update using git
=> => Compressing and cleaning up git repository

=> Profile not found. Tried ~/.bashrc, ~/.bash_profile, ~/.zprofile, ~/.zshrc, and ~/.profile.
=> Create one of them and run this script again
   OR
=> Append the following lines to the correct file yourself:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
zsh: command not found: #
zsh: command not found: #
Downloading and installing node v24.4.1...
Downloading https://nodejs.org/dist/v24.4.1/node-v24.4.1-darwin-arm64.tar.xz...
######################################################################### 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v24.4.1 (npm v11.4.2)
Creating default alias: default -> 24 (-> v24.4.1)
zsh: command not found: #
v24.4.1
v24.4.1
zsh: command not found: #
11.4.2
rashii@Rashenkas-MacBook-Air ~ % nvm install --lts

Installing latest LTS version.
Downloading and installing node v22.17.1...
Downloading https://nodejs.org/dist/v22.17.1/node-v22.17.1-darwin-arm64.tar.xz...
######################################################################### 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v22.17.1 (npm v10.9.2)
rashii@Rashenkas-MacBook-Air ~ % node -v
v22.17.1
rashii@Rashenkas-MacBook-Air ~ % npm -v
10.9.2
rashii@Rashenkas-MacBook-Air ~ % npm create vite@latest travelblog --template react 
Need to install the following packages:
create-vite@7.0.3
Ok to proceed? (y) y


> npx
> create-vite travelblog react

│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in /Users/rashii/travelblog...
│
└  Done. Now run:

  cd travelblog
  npm install
  npm run dev

npm notice
npm notice New major version of npm available! 10.9.2 -> 11.5.2
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.5.2
npm notice To update run: npm install -g npm@11.5.2
npm notice
rashii@Rashenkas-MacBook-Air ~ % cd travelblog
rashii@Rashenkas-MacBook-Air travelblog % npm install

added 152 packages, and audited 153 packages in 31s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
rashii@Rashenkas-MacBook-Air travelblog % npm run dev

> travelblog@0.0.0 dev
> vite


  VITE v7.0.6  ready in 315 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

hhhhhhhhhhhhh
h

  Shortcuts
  press r + enter to restart the server
  press u + enter to show server url
  press o + enter to open in browser
  press c + enter to clear console
  press q + enter to quit
rrrrr

r
12:15:47 AM [vite] server restarted.
o



