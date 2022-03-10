# titlebot

## Description

This is my attempt at creating Title Bot, a website that outputs a given website's title and favicon.
I decided to use NodeJS for the backend and ReactJS for the frontend since I am most familiar with those
frameworks and these frameworks seem like reasonable solutions to the given problem.

## Solving Process

### Backend

The way that I decided to create this tool is by using a NodeJS backend that takes an input of a URL.
With that URL, it parses the website as a DOM, and with the DOM, I am able to look for a title tag.
Then, the backend uses Google's API to determine the favicon of the website. This was my main difficulty in
creating this website. Looking through StackOverflow, it seems like there is not one easy solution that can solve
this problem. Also, there does not seem to be asolution that covers all websites. However, this seemed to be the
best option as it covered most cases. Also, some of the solutions did not cover getting the favicon of ChatMeter's
website, so I decided to just leave it to Google. <br/>
<br/>

Also, in terms of storage, I decided not to build a database because I did not want to worry about building out
something too complex for a simple tool. I thought that just storing all the data in localStorage would be good
enough but if I were to build out a database for this tool, I could have used postgreSQL or some SQL database to
have done the job.

### Frontend

I built out the frontend using ReactJS since I am the most comfortable with this framework. My steps to creating
the frontend was creating a general sketch of what the website would look like. However, since the website is pretty
simple, it did not take me too long to develop a user friendly website.

## Installation Process

U
