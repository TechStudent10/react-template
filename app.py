# IMPORTS
from main import create_app

# INITIALIZATION
app = create_app()

# RUN FLASK
if __name__ == "__main__":
    app.run(debug=True)
