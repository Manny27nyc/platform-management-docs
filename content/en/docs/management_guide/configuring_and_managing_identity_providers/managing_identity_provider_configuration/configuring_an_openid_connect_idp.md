---
title: Configuring an OpenID Connect IdP
linkTitle: Configuring an OpenID Connect IdP
description: How to configure an OpenID Connect Identity Provider for the Platform.
weight: 10
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Tasks in step 1a\* (add and verify a domain) or step 1b\* (configure an IdP) can be completed in any order.{{% /alert %}}

| Complete (**✓)** | Step | Task |
| --- | --- | --- |
| **\-** | 1a\* | ( - ) [Add a domain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_domain/) and ( - ) [Verify domain ownership](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/verifying_domain_ownership/) |
| **✓** | 1b\* | Configure an [OIDC](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_an_openid_connect_idp/) or [SAML v2.0](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_a_saml_v2.0_idp/) IdP |
| \- | 2 | [Confirm the association of an IdP to the domain](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain/) |
| \- | 3 | [Enable the IdP configuration for all domain users](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/enabling_idp_configuration_for_all_domain_users/) |
| \- | 4 | (_Optional_) [Add a subdomain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_subdomain/) |

This section includes details on configuring an OpenID Connect (OIDC) Identity Provider.

To create a new Identity Provider

1. From the _Identity Providers_ page, click **\+ Identity Provider**. The **New Identity Provider** form will be presented.
2. Select **OpenID Connect**. A blank form is presented.
3. Enter the **Issuer URL** and then click **Fetch** to retrieve and populate the OIDC provider configuration values exposed by the issuer. The values can also be manually entered.
4. Enter the **Client ID** and **Client Secret** fields from the values that are configured for your OIDC Identity Provider's Amplify Platform client.
5. Complete the **Advanced** configuration settings (**Logout URL** and **Backchannel Logout**) if they are applicable to your Identity Provider.
6. Confirm the provider configuration values for **Authorization** **URL**, **Token URL**, and **Attribute Mapping**.
7. Complete the _Role Assignments_ section. Refer to [Role assignments](/docs/management_guide/configuring_and_managing_identity_providers_idps/managing_identity_provider_configuration/role_assignments/) for details.
8. The following is an example of a completed OIDC form (before clicking **Save**).

    ![Completed form for adding an OIDC Identity Provider](/Images/oidc_new.png)

9. Click **Save**. A confirmation dialog appears with a message that, once the Identity Provider configuration is verified, all users on that domain will be required to log into the {{% variables/platform_prod_name %}} with their Identity Provider credentials.

    ![Confirm Identity Provider Configuration dialog](/Images/idp_save_configuration.png)

10. To complete the configuration, you must add values configured in the Platform _Identity Providers_ detail page to your Identity Provider.

    * Copy the **Redirect URI** and optionally the **Post-Logout Redirect URI** into the OIDC configuration manually or by clicking the clipboard icon.
        ![Completing OIDC configuration](/Images/oidc_overview.png)
    * Click **Save** in the OIDC  page.

When a new Identity Provider is being configured, the organization administrator can edit any field. After an OIDC Identity Provider is pending or verified, the organization administrator is not permitted to edit the **Authorization URL**, **Token URL**, and **Client ID** fields.
