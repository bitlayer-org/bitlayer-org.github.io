all: update push deploy

update:
	git pull origin main

push:
	git add . && git ci -m "fix content"
	git push origin main

deploy:
	mkdocs gh-deploy
