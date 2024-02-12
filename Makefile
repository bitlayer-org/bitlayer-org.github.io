ALL: Update Push Deploy

Push:
	git add . && git ci -m "fix content"
	git push origin main

Deploy:
	mkdocs gh-deploy

Update:
	git pull origin main