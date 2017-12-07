class HomeController < ApplicationController
  def index
    render html: <<~HTML.html_safe
      <!DOCTYPE html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Brunch</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="/site.css">
        <link rel="stylesheet" href="/app.css">
        <script src="/app.js"></script>
        <script>require('initialize');</script>
      </head>
      <body>
        <div id="app"></div>
      </body>
    HTML
  end
end
