﻿wait 5
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("menuUser").Click @@ script infofile_;_ZIP::ssf1.xml_;_
wait 5
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "squashtf" @@ script infofile_;_ZIP::ssf2.xml_;_
wait 1
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Output CheckPoint("username") @@ script infofile_;_ZIP::ssf5.xml_;_
wait 1
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").Set "123Soleil" @@ script infofile_;_ZIP::ssf3.xml_;_
wait 2
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ script infofile_;_ZIP::ssf4.xml_;_
