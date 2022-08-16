#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Sophie Damelio'),
  title: chalk.white('Software Engineer'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.gray('https://github.com/') + chalk.blue('sophiedamelio'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.gray('https://www.linkedin.com/in/') + chalk.cyan('sophiedamelio/'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.magenta('https://sophiedamelio.com/'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx sophiedamelio'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.title}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  //newline +
  //newline +
  //working +
  newline +
  //twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.magenta(boxen(output, options)))
