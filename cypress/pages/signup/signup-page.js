import '../../support/commands';

class SignupPage {

  constructor() {

    //input
    this.inputEmail = "[name='email']";
    this.inputPassword = "[name='password']";
    this.inputFirstName = "[name='first-name']";
    this.inputLastName = "[name='last-name']";
    this.inputPhoneNumber = "[name='phone-number']";

    //btn
    this.btnSignup = '.custom-button > .btn.primary.button-large';
    this.btnEye = '.input-group-icon > .fa';
    this.btnCountryName = '.iti__country-name';
    this.btnStartUsingAutobahn = '.btn.primary.button-large';

    //txt
    this.txtStrengthBar = ".strength-bar .bar-text";
    this.txtErrorLabel = '.input-set label';

    //dropdown
    this.dropdownIndustry = "[name='industry']";
    this.dropdownNation = '.iti__arrow';

    //modal
    this.modalSignup = '.main-content-wrapper';

    //list
    this.listRequiredRules = '.feedback-suggestion li';
  }

  checkSignUpModalVisible() {
    cy.get(this.modalSignup).should('be.visible');
  }

  fillSignUpFields(email, password) {

    cy.get(this.inputEmail).type(email);
    cy.get(this.inputPassword).type(password);
  }

  /**
   * @param {string} strength Types of password strength type. Weak, Average, Strong, Very Strong.
   */
  checkPasswordStrength(strength) {
    cy.get(this.txtStrengthBar).should('have.text', strength)
  };

  clickIfSignUpButtonIsEnable() {
    cy.clickIfElementEnabled(this.btnSignup);
  };

  clickIfStartUsingAutobahnButtonIsEnable() {
    cy.clickIfElementEnabled(this.btnStartUsingAutobahn);
  };

  checkButtonSignUpDisabled() {
    cy.checkIfElementDisabled(this.btnSignup);
  };

  checkIfRuleDisabled(rule) {
    cy.checkIfElementDisabled(cy.contains(this.listRequiredRules, rule))
  };

  /**
   * @param {string} type Types of field name for the error field. e/g password (for password field)
   */
  checkErrorLabelVisibility() {
    cy.get(this.txtErrorLabel)
      .should('be.visible')
  }

  /**
   * @param {string} state Types of states for the password field. password (masked) | text (unmasked)
   */
  checkPasswordMaskedState(state) {
    cy.get(this.inputPassword)
      .should('have.attr', 'type', state)
  }

  /**
   * @param {string} industry Types of industry from the dropdown
   */
  selectDropdownIndustryOptions(industry) {
    cy.get(this.dropdownIndustry).click();
    cy.contains('.menu .items', industry).click();
  };

  fillFirstNameLastName(firstName, lastName) {
    cy.get(this.inputFirstName).click().type(firstName);
    cy.get(this.inputLastName).click().type(lastName);
  };

  selectDropdownNationPhoneNumber(nation, phoneNumber) {
    cy.get(this.dropdownNation).click();
    cy.contains(this.btnCountryName, nation).click();
    cy.get(this.inputPhoneNumber).click().type(phoneNumber);
  };
}

module.exports = new SignupPage();