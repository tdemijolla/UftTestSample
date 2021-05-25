wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "toto" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Output CheckPoint("username") @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "60aceb49a7577487c5c2a5e1994871787b11a90a" @@ script infofile_;_ZIP::ssf3.xml_;_
wait 2
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ script infofile_;_ZIP::ssf4.xml_;_
