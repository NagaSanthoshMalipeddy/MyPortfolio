#!/bin/bash
# Simple deployment script for GitHub Pages
# This is an alternative to the GitHub Actions workflow

echo "Building the application..."
npm run build

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete! Your site will be available at:"
echo "https://nagasanthoshmalipeddy.github.io/MyPortfolio"