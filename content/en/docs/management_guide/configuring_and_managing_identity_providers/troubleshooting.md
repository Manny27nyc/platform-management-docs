---
title: Troubleshooting
linkTitle: Troubleshooting
description: This section includes some error messages you may receive when configuring Identity Providers and suggested methods to resolve them.
weight: 70
date: 2021-08-12
---

The troubleshooting section includes details about issues you may come across when configuring IdPs, including error messages and why the message may have occurred, and suggested methods to resolve them.

## Email recipient to confirm domain association must be on same domain being verified

After domain ownership is verified and identity provider has been configured you must confirm the association of an IdP to the domain. Confirming the association is competed by sending a verification email to a user on the same domain as the domain that is being verified. When you get to the step to [select a user's email address to validate the association] (/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain) in the **Verification Recipient** field, the Platform only shows users with an email address that is using the domain that you want to verify. You need a user in your organization with an email with that domain to complete domain verification.

## Error messages

This section contains when you may see error messages and how to resolve them related to using external Identity Providers.

### "Destination URL validation failed" error message

A "destination URL validation failed" error is thrown by an IdP and has been seen with IdP setups that do not allow the `login_hint` parameter as part of the destinaton URL. The Amplify Platform will use the email address to find out which IdP setup to use to authenticate the user when logging into the Amplify Platform. Part of the call being made to the IdP is a destination URL which contains the `login_hint` as a parameter. This `login_hint` contains the email address of the user and is used to prepopulate the username field in the IdP login screen. To solve this issue, your IdP should accept the `login_hint` as a parameter.

### "Invalid Federated Identity Action Message" error message

An "InvalidFederatedIdentityActionMessage" error message can be seen when the user clicks the confirm domain ownership link in the email they receive and they are redirected to the Amplify Platform. Refer to [Confirming the association of an IdP to the domain](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain/) for details. This error can occur if you have an invalid X509 certificate configured for the [SAML v2.0 Identity Provider](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_a_saml_v2.0_idp/). Edit the SAML Identity Provider to use a valid X509 certificate.

### "Invalid username or password" error message

An "Invalid username or password" error message can be seen when authenticating through an external IdP after the confirming domain association step. This error is seen in rare cases when using the OIDC protocol with some IdPs, such as Microsoft ADFS, and occurs when the identity token that is returned from the IdP does not contain the claims for the email address, first name, and last name.

The organization administrator must add the Friendly Names of the Email Address, First Name, and Last Name attributes as claims in the Identity token. The friendly names can be found in the Attribute Mapping section of Organization - Settings - Identity Providers.

### "Session Invalidated" error message

A **Session Invalidated** message may appear in a couple of situations.

The following **Session Invalidated** message displays when one of the configured Attribute Mappers contains an invalid value.

![Session Invalidated dialog](/Images/360_invalid_mapper.png)

The organization administrator must edit the Identity Provider configuration value in the Dashboard from the **Action** menu. When the changes are saved, the configured email recipient will receive a new verification email since the previous one is no longer valid.

Another situation that will generate the **Session Invalidated** message is when the user has an active session but the organization administrator configures a new Identity Provider, which is confirmed. After the domain ownership is confirmed, all other users whose accounts are on that domain will be logged out and shown this message.

![Session Invalidated dialog](/Images/360_invalidated_sessions.png)

The user must sign in with their Identity Provider credentials.
