ALL: push

push:
	git pull
	git add . 
	git commit -m "update docs" 
	git push origin main
