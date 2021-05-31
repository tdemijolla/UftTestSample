wait 1
Browser("Advantage Shopping").Page("Advantage Shopping").Link("1").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
wait 1
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
wait 1
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set"Toto123"
wait 1
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").Set"123Soleil"
wait 1
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Check CheckPoint("safepay_username")
wait 1
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click


