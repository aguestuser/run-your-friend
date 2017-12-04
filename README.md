# Run your Friend

## Summary

In our imaginations, this is a this tool to encourage your friend to run for office!

In reality, it is a WIP take-home assignment for a job application to Fight For the Future. (See `INSTRUCTIONS.md`).

One nice feature is that the text of the splash page is written in markdown, but rendered in React. This means that you can edit markdown in your text editor, click save, and watch the page hot-reload instantly for faster editing cycles for non-technical users.

Other than that, it's just your run of the mill single page app with a bit lower test coverage than I'd like and some fun GIF's.

If anyone is interested in expanding it to actually deploy and use, hit me up!

If you are interested in running and editing it, see the `Hacking` section below!


## Next Steps

In keeping with the assignment that generated it, this is a working prototype, intended to show to collaborators to see if the idea has traction before proceeding further. All state is stored in the browser, which means that users could not actually (1) share a link with friends, (2) accumulate supporters for a given nominee, or (3) hope to have emails sent to anyone.

If collaborators liked this idea, to move toward an MVP, I would:

* Add a supporters form to the nominee homepage (so that once someone is nominated, others may sign up to support them)
* Add a thin Rails backend that responds with JSON to queries from the browser
* Add social media sharing buttons to the nominee page
* Add functionality to send an email to the nominee once a threshold is reached
* Add the ability to change the threshold of supporters for "nomination" to kick in (a la Kickstarter)
* Add ability nominate people for various offices
* Add pictures and profile pages for nominees (or something to make reading about them a bit more personable and visually appealing)
* Or... (do you have ideas?)

## Hacking

To run from source:

### 1. Install Node Version Manager

Use your favorite package manager to make sure you've got [nvm](https://github.com/creationix/nvm) installed. That's likely [homebrew](https://brew.sh/) for Mac, `apt-get` for Debian-based GNU/Linux distros).

On Mac:

```shell
$ brew install nvm
```

On Debian:

``` shell
$ sudo apt-get install nvm
```

### 2. Install the latest stable branch of node:

``` shell
$ nvm install stable && nvm use stable
```

### 3. Clone this repo:

``` shell
$ cd ~/path/to/where/you/want/to/keep/this/repo
$ git clone https://github.com/aguestuser/run-your-friend
```

### 4. Run the app:

``` shell
$ cd run-your-friend
$ npm start
```

### 5. Make some edits!

The text of the splash page can be found in `run-your/friend/src/text/splash-page.md`. Try editing it while the app is running. Cool, huh?
