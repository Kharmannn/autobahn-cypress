1. **Positive Test Cases:**
   - TC1: Sign up with a valid email from https://mail.tm and a password that meets all the required rules.
     - **Email Example**: `akram-atbh1@awgarstone.com`
     - **Password Example**: `QuantumLeap!2024`

2. **Negative Test Cases:**
   - TC2: Attempt to sign up with an email with a password less than 8 characters.
     - **Password Example**: `Abc!1`
   - TC3: Attempt to sign up with a password that lacks an uppercase letter.
     - **Password Example**: `quasarlight123!`
   - TC4: Attempt to sign up with a password that lacks a lowercase letter.
     - **Password Example**: `NEBULAEXPLORE123!`
   - TC5: Attempt to sign up with a password that lacks a number.
     - **Password Example**: `StellarWind!!!`
   - TC6: Attempt to sign up with a password that lacks a special character.
     - **Password Example**: `PulsarRadiation123`
   - TC7: Attempt to sign up with a password that contains empty spaces.
     - **Password Example**: `Cosmic Dust123!`
   - TC8: Attempt to sign up with an already registered email from https://mail.tm.
     - **Password Example**: `QuantumLeap!2024`
   - TC9: Cannot click startUsingAutobahn if the firstname not complete, other field already complete
     - **Password Example**: `QuantumLeap!2024`
   - TC10: Cannot click startUsingAutobahn if the lastname not complete, other field already complete
   - TC16: Cannot click startUsingAutobahn if the phone number not complete, other field already complete
   - TC17: Error should show if firstname able to input number value 
   - TC18: Error should show if lastname able to input number value
   - TC20: Email not using the gmail (corporate email)

3. **Boundary Test Cases:**
   - TC11: Sign up with a password that is just below the maximum allowed length (if there's a maximum set).
     - **Password Example**: `Z3$q!er` (Assuming 50 is just below the maximum length)

4. **Usability Test Cases:**
   - TC13: Check if the password field masks input.
     - **Password Example**: `PasswordVisibility!23`
   - TC14: Verify that the signup form provides appropriate error messages for each validation failure.
     - **Password Example**: `abc` (To trigger error message)
   - TC15: Verify that the 'Sign Up' button is disabled until all validation rules are met.
     - **Password Example**: `GalaxyTraverse!8`