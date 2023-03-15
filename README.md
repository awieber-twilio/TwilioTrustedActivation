# Twilio Trusted Activation
Welcome to Twilio Trusted Activation with Verify and Lookup API. This project will allow you test Twilio Verify and Lookup API with your Twilio Account. This will help you reduce fraud to your business and increase engagement.

## Solution Description
SMS pumping fraud continues to be a problem for all businesses that allow their users to request for an SMS. Trusted Activation gives businesses the ability to reduce fraud to their business. By leveraging Twilio Lookup and Twilio Verify we can provide our customers and businesses a Trusted Activation.

[Twilio Lookup](https://www.twilio.com/docs/lookup/v2-api): 3 types of lookup API that will allow you to check if a number is formatted correctly before attempting to send a message. You can also check line type intelligence as well as caller name to personalize the engagement.

[Twilio Safe List](https://www.twilio.com/docs/verify/api/safe-list): This API allows you to control where and who you want to send verifications to and reduce fraud to your business. You have the capability to restrict a Geo and add a specific number to a safe list so those numbers are not blocked. You can also remove them from the list at any time.

[Twilio Verify](https://www.twilio.com/docs/verify/authentication-channels): Send verifications to your users channel of choice. Now with Silent Network Authentication your users no longer need to input an OTP to access their account.

## Solution Diagram

<img width="1278" alt="Screen Shot 2023-02-28 at 10 43 09 AM" src="https://user-images.githubusercontent.com/587503/221948976-de1da325-fa2f-4b61-a05d-284c25c66d40.png">

## Business Value
* Reduce fraud to your business
* Secure customers account with 2FA
* Personalize engagement with your customers

## Use Case and Industry
* All B2C/B2B with account access
* Promotional Signups

## Prerequisite
* [Twilio Account](https://console.twilio.com/)
* [Twilio Serverless](https://www.twilio.com/en-us/serverless)
* [Twilio Verify](https://www.twilio.com/verify)
*  [Twilio Lookup](https://www.twilio.com/en-us/trusted-activation/lookup)

## Getting Started
1. Create a [Twilio Service](https://console.twilio.com/us1/develop/functions/services)
<img width="1406" alt="Screen Shot 1" src="https://user-images.githubusercontent.com/587503/219128424-6192a1b7-c18a-49c7-8969-dfc63604f832.png">

2. Click on Add => Add Function
<img width="1406" alt="Screen Shot 2" src="https://user-images.githubusercontent.com/587503/219128847-cc8509c3-86ae-4f30-8d93-b15123c8639e.png">

3. Add lookup_type, safe_list, sent_otp, verify_otp and verify_sna to functions by copying and pasting the code from github project under functions folder, set your functions to Public (Replace Verify Services ID 'VAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'in sent_otp, verify_otp and verify_sna file )
<img width="1406" alt="Screen Shot 3" src="https://user-images.githubusercontent.com/587503/219130401-d08973fc-6830-40f9-bc13-80beb9007fc1.png">

4. Create a new [Twilio Verify Serice](https://console.twilio.com/us1/develop/verify/services) Provide Friendly name and select: SMS, Whatsapp (will need to request for [Whatsapp Sender](https://www.twilio.com/docs/whatsapp/tutorial/requesting-access-to-whatsapp)), Voice and Enable Fraud Guard. Set your parameter preference and save
<img width="1406" alt="Screen Shot 3" src="https://user-images.githubusercontent.com/587503/219750560-2b397c88-e182-4f2a-a433-c8119ba2dff4.png">

5. Replace Verify Service SID 'VAxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'in sent_otp, verify_otp and verify_sna function

6. Click on Add => Upload File => Upload index.html file from github project and set to Public

7. Change urlSend (5 instance of it in index.html) with your unique project URL, will be "https://projectName-XXXX.twil.io"
<img width="200" alt="Screen Shot 4" src="https://user-images.githubusercontent.com/587503/219131651-78b5ed2d-7e8a-4b14-9508-c4de3883fc2f.png">

8. Click on Deploy All from image above

9. Open Browser and go to "https://projectName-XXXX.twil.io/index.html"
<img width="1406" alt="Screen Shot 4" src="https://user-images.githubusercontent.com/587503/219133969-07a03440-309a-4524-8d48-c9cb7b951888.png">

10. Project Loaded, Have Fun!

## Demo Script
1. Input phone number and try the 3 different lookup type and see the info it displays
2. Go to [Verify Geo Permissions](https://console.twilio.com/us1/develop/verify/settings/geopermissions) and disable the SMS channel for United States(+1)
3. Input a phone number and check if it is on the safe list
4. Try to send a Verify via Send as SMS and see that you cannot send to the number
5. Add your number to the Safe List and try again, you can even try to Verify the code
6. Go to [SNA Live Test](https://console.twilio.com/us1/develop/verify/settings/sna) and register your phone number
7. From your mobile phone go to your project "https://projectName-XXXX.twil.io/index.html" and click on Send as SNA
8. Make sure you are not connected to WiFi and open the URL returned, then see that you are Verified by clicking on Verify SNA
