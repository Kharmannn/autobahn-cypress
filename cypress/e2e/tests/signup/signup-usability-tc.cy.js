import SignupPage from "../../../pages/signup/signup-page";
import pathUrls from "../../../../config/pathUrls";

context('Usability Cases', () => {
  beforeEach(() => {
    cy.visit(pathUrls.signup);
    SignupPage.checkSignUpModalVisible();
  })
  
  it('TC13: Check if the password field masks input.', () => {
    cy.fixture('signup/usability_tc_data.json').then((data) => {
      const { TC13 } = data;
      const { email, password} = TC13;

      SignupPage.fillSignUpFields(email, password)
      SignupPage.checkPasswordStrength('Strong');
      SignupPage.checkPasswordMaskedState('password');
    });
  });

  it('TC14: Verify that the signup form provides appropriate error messages for each validation failure.', () => {
    cy.fixture('signup/usability_tc_data.json').then((data) => {

      cy.get(SignupPage.inputEmail).click();
      cy.get(SignupPage.inputPassword).click();
      cy.get(SignupPage.inputEmail).click();
      SignupPage.checkErrorLabelVisibility();
    });
  });

  it("TC15: Verify that the 'Sign Up' button is disabled until all validation rules are met.", () => {
    cy.fixture('signup/usability_tc_data.json').then((data) => {
      const { TC15 } = data;
      const { email, password} = TC15;

      cy.get(SignupPage.inputEmail).click().type(email);
      SignupPage.checkButtonSignUpDisabled();
    });
  });
});