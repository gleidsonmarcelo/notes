from flask import (Blueprint, render_template)

notes = Blueprint('notes', __name__)

@notes.route("/")
@notes.route("/index")
def index():
    return render_template('notes/index.html')
