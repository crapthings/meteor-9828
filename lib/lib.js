_ = require('lodash')

React = require('react')
render = require('react-dom').render

Router = require('react-router-dom').BrowserRouter
Route = require('react-router-dom').Route
Link = require('react-router-dom').Link

rekomposer = require('/imports/rekomposer').default

composeWithTracker = rekomposer.composeWithTracker

Test = new Mongo.Collection('test')
