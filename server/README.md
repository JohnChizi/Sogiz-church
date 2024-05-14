in .env file, change SMTP_MAIL to the email you will use as you sender's email
    - in the email, go to manage account, security and enable two way authentication
    - on the search bar, search for 'App Password', click on it and type the custom name - nodemailer'
    - then click 'generate'. 
    - copy the one-time-view password and paste it inside the .env file under SMTP_PASSWORD
    - change SMTP_RECEIVER_MAIL to the mail you want to receive the sent mail