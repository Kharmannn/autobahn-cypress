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

  it(' TC8: Attempt to sign up with an already registered email from https://mail.tm.', () => {
    cy.fixture('signup/negative_tc_data.json').then((data) => {
      const { TC8 } = data;
      const { email, password} = TC8;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.checkButtonSignUpDisabled();
    });
  });
});