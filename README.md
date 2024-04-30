# Bitlayer docs

## Edit
```bash
git clone git@github.com:bitlayer-org/bitlayer-org.github.io.git 
cd bitlayer-org.github.io
git checkout -b main origin/main

# edit docs locally
```

## Preview locally
make sure you have node, python and npm installed on your system

```bash
cd bitlayer-org.github.io
npm ci
npm run build
cd build
python -m SimpleHTTPServer 8000  # python3 -m http.server 8000
# http://127.0.0.1:8000
```

## Publish
```bash
cd bitlayer-org.github.io
git add .
git commit -m"update doc"
git push

# auto publish
```
