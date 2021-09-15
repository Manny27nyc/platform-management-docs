---
title: Confirming the association of an IdP to the domain
linkTitle: Confirming the association of an IdP to the domain
description: A selected user on the domain must confirm the association of the Identity Provider to the domain.
weight: 10
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Tasks in step 1a\* (add and verify a domain) or step 1b\* (configure an IdP) can be completed in any order.{{% /alert %}}

| Complete (**✓**) | Step | Task |
---------|----------|---------
| **✓** | 1a\* | ( **✓** ) [Adding a Domain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_domain/) and ( **✓** ) [Verify domain ownership](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/verifying_domain_ownership/) |
| **✓** | 1b\* | Configure an [OIDC](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_an_openid_connect_idp/) or [SAML v2.0](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_a_saml_v2.0_idp/) IdP |
| **✓** | 2 | [Confirm the association of an IdP to the domain](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain/) |
| \- | 3 | [Enable the IdP configuration for all domain users](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/enabling_idp_configuration_for_all_domain_users/) |
| \- | 4 | (_Optional_) [Add a subdomain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_subdomain/) |

After [domain ownership is verified](/docs/management_guide/configuring_and_managing_identity_providers_idps/managing_domains/verifying_domain_ownership/) and an [OpenID Connect (OIDC)](/docs/management_guide/configuring_and_managing_identity_providers_idps/managing_identity_provider_configuration/configuring_an_openid_connect_oidc_idp/) or [SAML v2.0](/docs/management_guide/configuring_and_managing_identity_providers_idps/managing_identity_provider_configuration/configuring_a_saml_v2.0_idp/) Identity Provider has been configured, a selected user on the domain must confirm the association of the Identity Provider to the domain.

1. For the domain you want to confirm, select **Confirm IdP Association** from the **Actions** (**...**) menu from the **Email Domain** table.
    ![Confirm IdP Association link](/Images/domain_confirm_association_dropdown.png)
2. The **Confirm Domain Association** modal dialog displays. The association of the domain to the configured Identity Provider must be confirmed. Do the following:
    1. Select a user's email address to validate the association in the **Verification Recipient** field. You can only select email addresses that have the same domain as the domain for which you want to confirm the association.
    2. Select the Identity Provider to which the domain is associated in the **Identity Provider** field.
    3. Click **Send Verification Email**.

        ![Confirm Domain Association modal](/Images/domain_confirm_association.png)
3. The verification recipient will be logged out of the Platform and will receive an email from the {{% variables/platform_prod_name %}} to confirm domain ownership. The user must click the link in the email they receive to be taken to the login page of the configured IdP, where they must log in using the email address where they received the confirm domain ownership link. The user is returned to the Platform where they receive a message that domain ownership has been successfully confirmed. They can then click **Continue to the Amplify Platform** where they are logging into that organization.

    ![Domain Association Confirmed dialog](/Images/email_confirmed.png)

    After domain ownership is verified, the domain appears in the Email Domain table as **Associated** in the **Associated** column and **Pending** in the **Confirmed** column.
