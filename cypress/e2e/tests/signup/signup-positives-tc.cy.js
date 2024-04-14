import SignupPage from "../../../pages/signup/signup-page";
import pathUrls from "../../../../config/pathUrls";

context('Positive Cases', () => {
  beforeEach(() => {
    cy.visit(pathUrls.signup);
    SignupPage.checkSignUpModalVisible();
  })
  
  it('TC1: Sign up with a valid email from mail.tm and a password that meets all the required rules', () => {
    cy.fixture('signup/positive_tc_data.json').then((data) => {
      const { TC1 } = data;
      const { email, password, firstName, lastName } = TC1;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Very Strong');
      SignupPage.clickIfSignUpButtonIsEnable();
      SignupPage.fillFirstNameLastName(firstName, lastName);
      SignupPage.selectDropdownIndustryOptions('Insurance');
      SignupPage.selectDropdownNationPhoneNumber('Indonesia', '812999888');
      SignupPage.clickIfStartUsingAutobahnButtonIsEnable();
    });
  });

  it('TC11: Sign up with a password that is just below the maximum allowed length', () => {
    cy.fixture('signup/positive_tc_data.json').then((data) => {
      const { TC11 } = data;
      const { email, password} = TC11;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Weak');
      SignupPage.checkButtonSignUpDisabled();
    });
  });
});