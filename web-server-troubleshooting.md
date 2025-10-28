# Web Server Fix

## When website doesn't work after upload:

1. **Upload files:**
   ```bash
   scp -r /path/to/project zephaniah@timberlea.cs.dal.ca:~/public_html/csci3172/activities/


   for instance 
 scp -r /Users/zephaniahchizulu/Desktop/3172/labs/lab2 zephaniah@timberlea.cs.dal.ca:~/public_html/csci3172/labs/
   ```

2. **SSH to server:**
   ```bash
   ssh zephaniah@timberlea.cs.dal.ca
   ```

3. **Fix permissions:**
   ```bash
   ssh yourCSID@timberlea.cs.dal.ca
   cd public_html/csci3172/labs/lab2
   find . -type d -exec chmod 755 {} \;
  find . -type f -exec chmod 644 {} \;
   ```

4. **Test website:**
   `https://web.cs.dal.ca/~zephaniah/csci3172/activities/projectname/`