---
title: Configuring a SAML v2.0 IdP
linkTitle: Configuring a SAML v2.0 IdP
description: 
weight: 20
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Tasks in step 1a\* (add and verify a domain) or step 1b\* (configure an IdP) can be completed in any order.{{% /alert %}}

| Complete (**✓)** | Step | Task |
| --- | --- | --- |
| **\-** | 1a\* | ( - ) [Add a domain](/docs/management_guide/configuring_and_managing_identity_providers_idps/managing_domains/adding_a_domain/) and ( - ) [Verify domain ownership](#) |
| **✓** | 1b\* | Configure an [OIDC](/docs/management_guide/configuring_and_managing_identity_providers_idps/managing_identity_provider_configuration/configuring_an_openid_connect_oidc_idp/) or [SAML v2.0](#) IdP |
| \- | 2 | [Confirm the association of an IdP to the domain](/docs/management_guide/configuring_and_managing_identity_providers_idps/enabling_the_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain/) |
| \- | 3 | [Enable the IdP configuration for all domain users](/docs/management_guide/configuring_and_managing_identity_providers_idps/enabling_the_identity_provider_configuration/) |
| \- | 4 | (_Optional_) [Add a subdomain](/docs/management_guide/configuring_and_managing_identity_providers_idps/managing_domains/adding_a_subdomain/) |

This section includes details on configuring a SAML v2.0 Identity Provider with an example of a Microsoft Azure Active Directory SAML-based Single Sign-On configuration.

{{% alert title="Note" color="primary" %}}Although the example in this section is for Microsoft Azure Active Directory, any SAML v2.0 Identity Provider is compatible.{{% /alert %}}

Refer to the [Microsoft configure SAML-based configure single sign on](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-single-sign-on-non-gallery-applications) article for details.

To create a new Identity Provider

1. From the _Identity Providers_ page, click the **\+ Identity Provider**. The **New Identity Provider** form will be presented.
2. Select **SAML v2.0**. A blank form is presented.
    ![](/Images/saml_new_empty.png)
3. Complete the fields based on the values that are configured for your Identity Provider. The example is for SAML v2.0 for Azure Active Directory. For example, the SAML v2.0 Identity Provider values are found in the Azure Active Directory admin center in the Single sign-on menu. Refer to the [Microsoft configure SAML-based configure single sign on](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-single-sign-on-non-gallery-applications) article and the following example for details.

    **Section 1**: These URLs (for example, Assertion Consumer Service URL) will be provided after the Amplify Platform Identity Provider configuration is saved, and then can be used on your Identity Provider.

    **Section 2**: The values to set in the **NameID Format** and **Attribute Mapping** fields in the Amplify Platform Identity Provider configuration form.

    **Section 3**: The values that will be set on the **Signature Algorithm** and **Validating X509 Certificates** section of the Amplify Platform Identity Provider configuration form. The certificate file whose contents will be used for that section of the Amplify Platform Identity Provider configuration page will be available from the download button for **Certificate (Base64)** on this view.

    **Section 4**: The values that will be used in the **Single Sign-On Service URL** and **Single Logout Service URL** fields on the Amplify Platform Identity Provider configuration page.

    ![](/Images/ad_overview.png)

4. Copy the mapping values from the Identity Provider configuration to complete **Single Sign-On Service URL** and ****Single Logout Service URL**** . See section 4 from the SAML v2.0 for Azure Active Directory example.
5. Copy the mapping values from the Identity Provider configuration to complete the **NameID Policy Format**, **Signature Algorithm**, and **Validating X509 Certificate**. See sections 2 and 3 from the SAML v2.0 for Azure Active Directory example.

    * **NameID Policy Format**: Click the field under **Required Claim** to show the format that will be used for the **NameID Policy Format** section in the Identity Provider configuration form.
        ![](/Images/ad_attribute_map_unique_name_id.png)
    * **Signature Algorithm**: Select the value that is configured for your Identity Provider.
    * **Validating X509 Certificates**: Download the contents. Then copy and paste the X509 certificate value into the text box making sure to omit \------BEGIN CERTIFICATE ----- and \------END CERTIFICATE--------.

        {{% alert title="Note" color="primary" %}}If you have multiple certificates that are required for your configuration, add the X509 certificate value for each certificate in that field, separated by a comma.{{% /alert %}}

        ![](/Images/ad_certs.png)

        ![](/Images/ad_certificate.png)

6. Copy the mapping values from the Identity Provider configuration to complete the **Attribute Mapping** fields (**Email Address**, **First Name**, and **Last Name**). See the **Additional claims** area in section 2 from the SAML v2.0 for Azure Active Directory example.
    ![](/Images/360_saml_v2_0_attribute_mapping_values.png)

    ![](/Images/ad_attribute_map_claims.png)
7. Complete the _Role Assignments_ section. Refer to [Role Assignments](/docs/management_guide/configuring_and_managing_identity_providers_idps/managing_identity_provider_configuration/role_assignments/) for details.

    The following is an example for a completed SAML v2.0 form (before clicking **Save**).
    ![](/Images/saml_new.png)
8. Click **Save**. A Confirmation dialog appears with a message that once the Identity Provider is verified, all users on that domain will be required to log into the Amplify Platform with their Identity Provider credentials.
    ![](/Images/idp_save_configuration.png)

9. To complete the configuration, you must add the values configured in the Amplify Platform identity configuration page to your Identity Provider's configuration.
    * Copy the **Entity ID**, **Assertion Consumer Service URL**, and optionally the **Post-Logout URL**values individually from the Platform's page manually or by clicking the clipboard icon.
        ![](/Images/saml_overview.png)

        {{% alert title="Note" color="primary" %}}The SAML Descriptor may include additional content that is applicable to your Identity Provider, such as the public key used for signed assertions. The SAML Descriptor includes options that may be applicable to your IdP: **View**, **Download**, or **Download Signing Certificate**.{{% /alert %}}

    * Paste the copied values into their respective fields in the SAML v2.0 configuration page.
        ![](/Images/ad_supplied_urls.png)
    * Click **Save** in the Azure Active Directory page.

When a new Identity Provider is being configured, the organization administrator can edit any field. After a SAML v2.0 Identity Provider is verified, the organization administrator is not permitted to edit the **Single Sign-On Service URL**, **NameID Policy Format**, and **Signature Algorithm** fields.
