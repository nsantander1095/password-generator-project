# Password Generator Refactor Project

## Table of Contents
1. [Description](#description)
2. [Visuals](#visuals)

## Description

The password generator web app now has a JavaScript file that gives it all of the necessary functionality. Now, when you click the button, there are a series of prompts that begin with one that asks you to choose a password length of between 8-128 characters. If the password falls outside of these parameters, the user is asked to reload the page. Next, it will ask whether to include uppercase, lowercase, numeric, or special characters (excluding 'space') and it will generate a password matching that criteria. For example, if the user selects lowercase but does not require any of the other possible character set, the password will consist solely of lowercase character. The password is then presented in an alert to the user, in lieu of the textbox on the webpage.

## Visuals
![Screenshot of live site](./Assets/images/password-generator-screenshot.jpg)