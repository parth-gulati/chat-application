run:
	run-android run-ios
run-ios:
	cd app && npm run ios --simulator='iPhone 16'
run-android:
	cd app && npm run android
server:
	. env/bin/activate && cd api && python3 manage.py runserver