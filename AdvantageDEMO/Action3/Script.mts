Browser("Advantage Shopping").Page("Advantage Shopping").Link("1").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set"Toto123"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").Set"123Soleil"
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Check CheckPoint("safepay_username")
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click


