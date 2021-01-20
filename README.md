# Summary of what I've done.

## General
- AngularJS Routing
- Controller per page using it.
- tried to make functions reuseable.
- CSS- tried to set up a bunch of globel styles to used
- Used folders/external files for organisation

## index.html
- Focus landing point of webpage.
- Loads CSS/Script files
- Has the header title and navigation menu
- Had a div to signify the main content area, containing the <ng-view>

## home.html
- Includes Image, some into text and a hiding "sign up" form
- Sign up form
	- JavaScript controled
	- Hidden till you click on "Click here to sign up" (JavaScript)
	- JavaScript validation
		- on all inputs triggered on the submit button's click event.
		- onKeyUp validation for the email input to check there is a "@" and "."
		- alert()'s are used to let user know
		- inputs label is highlight red when it fails validation
		- an error message is shown when it fails validation
	- Once validation is passd
		- the input is saved in json format and
		- the displayed on the bottom of the form
		- the form is reset.

## todays-class.html
- AngularJS contolled
- Reads an external json file and prints it in a <table> on the page
	- ng-repeat
	- CSS using nth-child(odd) to help readbility

## prev-tracks.html
- AngularJS contolled
- Reads an external json file and prints it in a <table> on the page
	- ng-repeat & filter:
-  checkbox to select what type of "trackAim" tracks to display.
	- ng-show
    - I wanted to be able to add the "trackAim" selection to the filter directly but couldnt work out how, which is why I did it using checkboxes & ng-show
- When "All tracks" is selected you can
    - filter it by "track" field.
    - Order by "track" or "trackAim"

## submit-a-song.html
- AngularJS Controlled
- more simple form created
    - ng-submit
    - Saves input on submit to a varible (savedSuggestedTrackJson) - i wanted to either print to a file or print this variable back to a div (lines 26-33) on the page but I couldnt achieve either - i think for printing to the div it might be timing related.  So instead I jsut printed savedSuggestedTrackJson to alert() instead.

