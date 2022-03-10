# titlebot

## Solving Process

This is my attempt at creating Title Bot, a website that outputs a given website's title and favicon.
The way that I decided to create this tool is by using a NodeJS backend that takes an input of a URL.
With that URL, it parses the website as a DOM, and with the DOM, I am able to look for a title tag.
Then, the backend uses Google's API to determine the favicon of the website. There are many ways to determine
a website's Favicon. This was my main difficulty in creating this website. Looking through StackOverflow,
it seems like there is not one easy solution that can solve this problem. Also, there does not seem to be a
solution that covers all websites. However, this seemed to be the best option as it covered most cases. Also,
some of the solutions did not cover getting the favicon of ChatMeter's website, so I decided to just leave it
to Google. <br />
<br />

## Installation Process

U
