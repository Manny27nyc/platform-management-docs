---
title: Configuring an Okta IdP
linkTitle: Configuring an Okta IdP
description: How to configure your Platform organization with an Okta Identity Provider for authentication.
weight: 50
date: 2021-08-12
---

This page is specific to configuring your organization in the Amplify Platform with an Okta Identity Provider (IdP). Amplify is Okta-certified and you can sign up for a free Okta developer account.

## Prerequisites

You must review the [prerequisites](/docs/management_guide/configuring_and_managing_identity_providers/getting_started_with_identity_providers/#prerequisites) and all pages in the [Configuring and Managing Identity Providers (IdPs)](/docs/management_guide/configuring_and_managing_identity_providers/) section of this guide to understand and complete Okta configuration.

## Setup a domain in Amplify Platform

Set up a domain in the Amplify Platform.

1. Sign in to the [Amplify Platform](https://platform.axway.com/).
2. Navigate to Organization - Settings - **Identity Platform**. If you do not see the **Identity Provider** tab, you do not have the correct subscription and you can contact the Amplify Platform team to enable this functionality. When you access the  _Identity Provider_ page in the Platform for the first time, you will see a message that the organization is currently using the Amplify Platform for authentication.
3. Add a domain and make sure it has been Verified. Refer to [Managing Domains](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/) to add a domain and verify ownership.

## Setup Okta IdP

Sign up for a free Okta developer account at [https://developer.okta.com](https://developer.okta.com/login/).

## Create an app in Okta

An application in Okta is used to configure the authentication to the system to which you want your users to access. Create an application that defines the authentication to the Amplify Platform.

1. In Okta, make sure you are in the admin view to create the application.
2. Search for the **Axway - Amplify Platform** app, select it, and then click **Add**. The _General Settings_ page appears.
3. Click **Next** on the _General Settings_ page. The _Sign-On Options_ page appears.
4. Click SAML 2.0 or [OpenID Connect](https://devblog.axway.com/apis/understand-your-api-security-need-oauth-or-openid-connect/) and follow the instructions that you can find by clicking **View Setup Instructions**.

    {{% alert title="Note" color="primary" %}}For OIDC, during the process to set up the OIDC IdP, you will be asked for a `customer id`. This corresponds to the `configuration id` of the IdP configuration. The `configuration id` is provided by the Platform when you complete the Platform setup. Also, the Okta setup provides a `client id` and `client` `secret` that you use to complete the Platform setup.{{% /alert %}}

    1. For OIDC, take note of the `client id` and `secret`, which will be used to complete the [Platform setup](#complete-setup-in-the-platform).
    2. For OIDC, type a temporary value to use for the `configuration id`. You will need to get the real value for the `configuration id` when you complete the steps in the [Platform setup](#complete-setup-in-the-platform), and then follow the instructions to return to this setup to add the real value.

5. Assign the app to the users that need access to Amplify Platform.

## Complete setup in the Platform

Complete Okta IdP set up in the Platform.

1. In the Platform, complete the steps in [Configuring a SAML v2.0 IdP](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_a_saml_v2.0_idp/)  or [Configuring an OpenID Connect (OIDC) IdP](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_an_openid_connect_idp/).

    {{% alert title="Note" color="primary" %}}For OIDC, the Platform provides the `configuration id` of the IdP configuration that you will use to complete the [Okta setup](#create-an-app-in-okta). Also, you need the `client id` and `client secret` that Okta provided.{{% /alert %}}

    1. For OIDC, take note of the `configuration id` , which is used to complete the Okta setup.
    2. For OIDC, type the `client id` and `secret` from the [Okta setup](#create-an-app-in-okta).
2. In Okta, update the `configuration id` from the temporary value you had used with the value provided by the Platform.
3. Complete the steps in [Confirming the Association of an IdP to the Domain](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain/) association.
    1. Confirm your domain association using the **Send Verification Email**  option.
    2. Find the verification email, and then click **Confirm domain association**.
4. Sign in to the [Amplify Platform](https://platform.axway.com/) using your Okta account. You will see the Okta Sign In page.

    ![Okta Sign In page](/Images/okta_sign_in.png)
5. The **Domain Association Confirmed** dialog appears. Click **Continue to the Amplify Platform**.
    You are now logged in to the Amplify Platform using the Okta IdP for authentication.
