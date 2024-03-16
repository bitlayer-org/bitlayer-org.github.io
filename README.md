# bitlayer docs

## edit
```
git clone git@github.com:bitlayer-org/bitlayer-org.github.io.git 
git checkout -b main origin/main
...
git add .
git commit -m"update doc"
git push
```

## preview locally

```bash
mkdocs serve
```

## publish
```
git checkout main
mkdocs gh-deploy 
```
