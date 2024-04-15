// cypress/e2e/tests/api/verify-domain.spec.js
import '../../../support/commands';
import { apiHeaders } from '../../../support/header';
import pathUrls from "../../../../config/pathUrls";


context('Verify Signup page Api test', () => {
    it('Verify domain should verify an eligible email', () => {
      cy.apiGet(
        pathUrls.apiVerifyDomain,
        { email: 'akram-atbh11@awgarstone.com' },
        apiHeaders
      ).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('valid').to.be.true;
      });
    });

    it('Verify check user account api should verify an eligible email', () => {
      cy.apiGet(
        pathUrls.apiCheckuserAccount,
        { email: 'akram-atbh11@awgarstone.com' },
        apiHeaders
      ).then(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.eq(false);
      });
    });
  });