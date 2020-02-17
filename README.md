# django-vue-geo-flickr
# installation steps
1. Clone repository
git clone https://github.com/kirolga/django-vue-geo-flickr
2. Go to frontend folder
cd frontend
npm i
3. Create build folder
npm run build
4. Go to backend folder
cd backend
5. Create venv
pip install virtualenv
python -m venv env
6. Activate environment
cd env/Scripts/activate.bat
cd ..
cd ..
7. pip install -r requirements.txt
8. Create settings_deploy.py folder in backend/project with the following content:
FLICKR_KEY = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' #you may use your own key
FLICKR_SECRET = 'XXXXXXXXXXXXXXXX' #you should use your own secret

# example of DataBase params (write your own params)
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'geo_flickr',
        'USER': 'postgres',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '5433'
    }
}

9. python manage.py runserver


