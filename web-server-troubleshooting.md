# Web Server Fix

## When website doesn't work after upload:

1. **Upload files:**
   ```bash
   scp -r /path/to/project zephaniah@timberlea.cs.dal.ca:~/public_html/csci3172/activities/
   ```

2. **SSH to server:**
   ```bash
   ssh zephaniah@timberlea.cs.dal.ca
   ```

3. **Fix permissions:**
   ```bash
   find ~/public_html -type d -exec chmod 755 {} \;
   find ~/public_html -type f -exec chmod 644 {} \;
   ```

4. **Test website:**
   `https://web.cs.dal.ca/~zephaniah/csci3172/activities/projectname/`