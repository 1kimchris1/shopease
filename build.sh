#!/usr/bin/env bash
# Render.com build script for ShopEase
set -o errexit

# Install Python dependencies
pip install -r requirements.txt

# Collect all static files into /staticfiles
python manage.py collectstatic --no-input

# Apply database migrations
python manage.py migrate
