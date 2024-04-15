import SignupPage from "../../../pages/signup/signup-page";
import pathUrls from "../../../../config/pathUrls";

context('Negative Cases', () => {
  beforeEach(() => {
    cy.visit(pathUrls.signup);
    SignupPage.checkSignUpModalVisible();
  })
  
  it('TC2: Attempt to sign up with an email with a password less than 8 characters', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC2 } = data;
      const { email, password} = TC2;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Weak');
      SignupPage.checkButtonSignUpDisabled();
    });
  });

  it('TC3: Attempt to sign up with a password that lacks an uppercase letter', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC3 } = data;
      const { email, password} = TC3;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Weak');
      SignupPage.checkIfRuleDisabled('One uppercase letter');
    });
  });

  it('TC4: Attempt to sign up with a password that lacks a lowercase letter', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC4 } = data;
      const { email, password} = TC4;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Weak');
      SignupPage.checkIfRuleDisabled('One lowercase letter');
    });
  });

  it('TC5: Attempt to sign up with a password that lacks a number', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC5 } = data;
      const { email, password} = TC5;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Weak');
      SignupPage.checkIfRuleDisabled('One number');
    });
  });

  it('TC6: Attempt to sign up with a password that lacks a special character', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC6 } = data;
      const { email, password} = TC6;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Weak');
      SignupPage.checkIfRuleDisabled('One special character');
    });
  });

  it('TC7: Attempt to sign up with a password that contains empty spaces', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC7 } = data;
      const { email, password} = TC7;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Average');
      SignupPage.checkButtonSignUpDisabled('No empty space');
    });
  });

  it('TC8: Attempt to sign up with an already registered email from https://mail.tm.', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC8 } = data;
      const { email, password} = TC8;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.checkButtonSignUpDisabled();
    });
  });

  //
  it('TC9: Cannot click startUsingAutobahn if the firstname not complete, other field already complete', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC8 } = data;
      const { email, password, firstName, lastName } = TC8;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.clickIfSignUpButtonIsEnable();
      cy.get(SignupPage.inputFirstName).click().type(firstName);
      SignupPage.selectDropdownIndustryOptions('Insurance');
      SignupPage.selectDropdownNationPhoneNumber('Indonesia', '812999888');
      SignupPage.checkButtonStartUsingDisabled();
    });
  });

  it('TC10: Cannot click startUsingAutobahn if the lastname not complete, other field already complete', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC8 } = data;
      const { email, password, firstName, lastName } = TC8;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.clickIfSignUpButtonIsEnable();
      cy.get(SignupPage.inputLastName).click().type(firstName);
      SignupPage.selectDropdownIndustryOptions('Insurance');
      SignupPage.selectDropdownNationPhoneNumber('Indonesia', '812999888');
      SignupPage.checkButtonStartUsingDisabled();
    });
  });

  it('TC16: Cannot click startUsingAutobahn if the phone number not complete, other field already complete', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC8 } = data;
      const { email, password, firstName, lastName } = TC8;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.clickIfSignUpButtonIsEnable();
      SignupPage.fillFirstNameLastName(firstName, lastName);
      SignupPage.selectDropdownIndustryOptions('Insurance');
      SignupPage.checkButtonStartUsingDisabled();
    });
  });

  it('TC17: Error should show if firstname able to input number value', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC8 } = data;
      const { email, password, firstName, lastName } = TC8;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.clickIfSignUpButtonIsEnable();
      SignupPage.fillFirstNameLastName(`${firstName}123`, lastName);
      SignupPage.checkErrorLabelVisibility();
      SignupPage.selectDropdownIndustryOptions('Insurance');
      SignupPage.checkButtonStartUsingDisabled();
    });
  });

  it('TC18: Error should show if lastname able to input number value', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC8 } = data;
      const { email, password, firstName, lastName } = TC8;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.clickIfSignUpButtonIsEnable();
      SignupPage.fillFirstNameLastName(firstName, `${lastName}123`);
      SignupPage.checkErrorLabelVisibility();
      SignupPage.selectDropdownIndustryOptions('Insurance');
      SignupPage.checkButtonStartUsingDisabled();
    });
  });

  it('TC20: Email not using the gmail (corporate email)', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC20 } = data;
      const { email, password, firstName, lastName } = TC20;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.clickIfSignUpButtonIsEnable();
      SignupPage.checkErrorLabelVisibility();
    });
  });
});