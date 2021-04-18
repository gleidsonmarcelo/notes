from flask import Flask

app = Flask(__name__)

from app.controllers import (routes, pwa)

app.register_blueprint(routes.notes)
app.register_blueprint(pwa.notes)
