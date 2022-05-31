# Random Password Generator

The task is to take  the existing code to set-up a mock password generator and make it functional. The starter code received included working HTML and CSS docs but had a JAVASCRIPT doc that was not working correctly. The goal was to make the password generator work while adhering to the criteria wanted by the end user.To do this, the interface needed to become responsive. To work on this I have updated the JAVASCRIPT and made it so that a user can generate a password that is at least 8 characters long but not longer than 128, and could have any combination of four types of characters: uppercase letters,lowercase letters, numbers, and special symbols. 

## Acceptance Criteria

GIVEN I need a new, secure password<br />
WHEN I click the button to generate a password<br />
THEN I am presented with a series of prompts for password criteria<br />
WHEN prompted for password criteria<br />
THEN I select which criteria to include in the password<br />
WHEN prompted for the length of the password<br />
THEN I choose a length of at least 8 characters and no more than 128 characters<br />
WHEN asked for character types to include in the password<br />
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters<br />
WHEN I answer each prompt<br />
THEN my input should be validated and at least one character type should be selected<br />
WHEN all prompts are answered<br />
THEN a password is generated that matches the selected criteria<br />
WHEN the password is generated<br />
THEN the password is either displayed in an alert or written to the page<br />

## Deployed Site

https://besarrrr.github.io/Passwords-Challenge-3/Develop/index.html

## Github Repository

https://github.com/besarrrr/Passwords-Challenge-3

## What, Why, How

### What:
The goal was to refactor the existing code to get it to generate a random password in an interactive manner. 

### Why:
I was motivated to apply the JAVASCRIPT concepts that I have learned thus far and grow in my understanding of the language. I learn best while doing and by trial and error. This allowed for both. 

### How:
Completing this task was difficult. I relied on all the resources available to me to complete it including, youtube, google, tutors, askBCS, and of course my course work. However, I still found it difficult to obtain all the required elements in my code. For example, while I do have a timer and the code does note where the time is at when the quiz is over and register it as a score, I was only able to save the initials into localstorage and not the score. Further, my high scores button is not working due to not being able to pull high scores from the local storage into my site. Another shortcoming of my code is that when going through the test, no matter what answer, the code reads it as “wrong” and shows the “wrong” alert. Lastly, there is no time penalty when an answer is wrong. The timer is set to a minute to begin and continues to count down at a seconds pace instead of dropping the time for each wrong answer. It is important to note that I was able to get the score to drop by 10 for every wrong answer but this did not affect the timer, it would only show at the end towards the score. For this reason I took this away and left in the code that shows the score as being the seconds left when the quiz is finished. <br>

I am submitting this assignment without all of the requirements due to wanting detailed feedback of how to improve and solve the issues outlined above. Class policy dictates that I can submit this up to 3 times and plan to do so once I receive feedback. Trial and error is one of the best forms of learning so I figured I could engage in that process now. In my professional experience rough drafts of proposals/projects are often submitted various times, with lots of feedback, before being approved. I am looking at this as my rough draft project and look forward to getting feedback that I can implement and improve my code upon. 
