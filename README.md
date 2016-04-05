# construct2-speech
This is a speech recognition plugin for construct2, the game engine.
I made this plugin for my 4th grade science project and to help game developers easily add acessibility to their games. I haven't fully 
solved the problem, but I have for all construct2 game developers. If you use Construct2, all you have to do is use the tutorial video
below to load my plugin (download found in branch) into your Construct 2 copy:

<a href="https://construct2.s3.amazonaws.com/chris/video.html" target="_blank">
<img border="0" alt="Video" src="http://onlineimageupoader.weebly.com/uploads/6/6/8/8/66889447/6717986_orig.jpg" width="100" height="100"></a>

<img src="https://construct2.s3.amazonaws.com/chris/construct2.png"/>
The speech plugin in action with code. There are onspeech started, onspeech ended, and word recognized events.


I also made an example game with the plugin inside. Say the word "jump" to jump over the holes. You can try it out on Chrome by clicking the image below:

<a href="https://construct2.s3.amazonaws.com/chris/science/index.html" target="_blank"> 
<img border="0" alt="W3Schools" src="http://onlineimageupoader.weebly.com/uploads/6/6/8/8/66889447/6499799_orig.png" width="100" height="100"></a>

I am still working out a few problems though. One problem is that the recognizer is slow. How do I fix this? I do not know yet, but I will keep trying to figure it out and update it when I do. I hope this helps game developers. And I hope the veterans and others who have arm or hand disability will be able to play this as well. So far, http://theshockingmind.weebly.com/reading.html has used my code to help kids read.









<img src="https://construct2.s3.amazonaws.com/chris/sayit.png"/>

STEM Fair Project

February 2016

# Chris Izatt

Mrs. Kraus' class





For disabled gamers, playing games can be more than just play. Some of these disabled players cannot use their hands to use any computing devices. Game developers need an easy way to add accessibility to their games. How can I help?



**HYPOTHESIS**

If I create a voice-controlled game engine plugin, then disabled people can play games because they can use their voice instead.



**MATERIALS**

- ❖❖Windows desktop computer
- ❖❖Construct 2 game design software
- ❖❖Notepad++ editor
- ❖❖Github source control repository
- ❖❖Microphone



**PROCEDURE**

1. 1.I designed a voice-controlled game engine plugin using JavaScript code.
2. 2.I created a simple, keyboard-controlled platformer game called "RUN" using Construct 2 game design software.
3. 3.I tested my plugin prototype using "RUN", and worked out the bugs and recorded changes using the GitHub source control repository as I worked.
4. 4.I had five subjects test the accuracy of the voice recognition plugin on my game using a desktop computer.
5. 5.I finalized my project and graphics to allow it to be played on a computer or mobile device by any user using the assigned voice commands.

| **PROTOTYPE TESTING** |
| --- |
<img src="https://construct2.s3.amazonaws.com/chris/chart.png"/>

VOICE CONTROL ACCURACY TEST


 |
| Test Subjects | Test 1 | Test 2 | Test 3 |
| David Izatt (male, 38) | David | 10 | 8 | 10 |
| Lisa Izatt (female, 38) | Lisa | 10 | 10 | 10 |
| Benjamin Izatt (male, 10) | Ben | 4 | 9 | 8 |
| Allison Izatt (female, 5) | Allie | 7 | 7 | 5 |
| Jonathan Izatt (male 7) | Jon | 8 | 5 | 10 |





**ABSTRACT**

My idea was to create an easy way for game developers to add accessibility to their games for disabled gamers. First, I gathered research to learn about ways to use inputs to make plugins so game developers can easily add accessibility to their games. Using the information, I constructed my problem statement: _For disabled gamers, playing games can be more than just play. Some of these disabled players cannot use their hands to use any computing devices. Game developers need an easy way to add accessibility to their games. How can I help?_

My hypothesis was "If I create a voice-controlled game engine plugin, then disabled people can play games because they can use their voice instead."

I designed and wrote the code for my voice-controlled game engine plugin using Construct 2 (game design software) plugin guidelines and the Web Speech API. Then I created a simple keyboard controlled platformer game in Construct 2. I created my plugin using JavaScript code and tested it using my platformer game. My dad has been teaching me to write code, and helped me to learn and create the code for this project. As I was writing and testing the plugin code, I ran into two main problems. One is that recognition was slow, and the other was that sometimes the recognizer would not recognize your voice command correctly. I addressed these problems by making the recognizer continuously listen, then pause when any speech was recognized. I recorded bug fixes and changes on GitHub.\*

I set up my game "RUN" with the voice-controlled plugin prototype on a computer in a quiet room. This game tests a starting command "play game" and during the game, you use the command "jump". When the game starts, the character moves and the player controls it by speaking the word "jump". I asked five test subjects in my family to test the game by saying "jump" every few seconds on a level with no holes to fall in to test the game's response accuracy. I learned that it was helpful to speak clearly and be patient after each command before saying another command. I also learned that the older the subject was, the more accurate the voice recognition was. My mom and dad had better accuracy than my brothers and sister. There is a slight delay for the speech recognition, which I tried to minimize as much as I could. The voice command accuracy in my tests was 86%. If I had more resources available, I would have liked to make this 100% accurate and with no delay at all, but I feel like 86% is a good accuracy level. One of my subjects was able to achieve 100% accuracy, it also depends on the user.

After testing, I was able to finalize the graphics and game functions in order to demonstrate the game as part of my science project. I have also published my code so that other game developers can use it to create games for disabled gamers who can't use their hands.

\*https://github.com/chrisizatt/construct2-speech

















**CONCLUSION**

My hypothesis was "If I create a voice-controlled game engine plugin, then disabled people can play games because they can use their voice instead."

After researching how people can use computers without hands, the solution that I came up with was to create a voice-controlled plugin for game developers who use the Construct 2 game design software like me. This would allow players to speak their commands, such as "forward", "back", or "jump". Using this plugin, developers would be able to create accessibility for disabled gamers who can't use their hands to play.

I was able to create this plugin by using JavaScript coding, according to the Construct 2 plugin guidelines. I also created a platformer game called "RUN", using Construct 2,  in order to test the plugin.

As planned, I created a tool to provide voice-control capability for game developers using Construct 2, since there were no existing tools like this. I have freely published this plugin and example game code online, and hope that other game developers will use it to create games that can be used by gamers who can't use their hands to play. I would also like to bring my game to be played by disabled gamers at the VA hospital, because I think everyone should have a chance to play fun video games.



<img src="https://construct2.s3.amazonaws.com/chris/dexter.png"/>
