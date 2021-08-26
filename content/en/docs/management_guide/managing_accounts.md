---
title: Managing accounts
linkTitle: Managing accounts
description: Access the accounts area of the interface to manage aspects of your Platform account.
weight: 10
date: 2021-08-12
---

## Account left navigation

To manage your account information, select **Account** from the [User menu](/docs/getting_started_with_amplify_platform_management/navigation/#user-menu). The left navigation includes the following tabs:

![Account left navigation menu](/Images/account_left_hand_menu.png)

* Account
* Orgs & Roles (for accounts with multiple organizations)
* Credentials
* Settings
* Activity

## Manage accounts

Selecting Account from the left navigation opens the **Account** page.

![Account page](/Images/account_tab.png)

The Account Information page includes the following account information:

* **First Name** - Verify and edit the first name on your account.
* **Last Name** - Verify and edit the last name on your account.
* **Email** - Lists your email address.
* **Phone Number** - Verify your phone number. Refer to [Verify your phone number](#verify-your-phone-number).
* **Timezone** - Your selected time zone. Click the **Edit Account** button to choose a different time zone.
* **Joined** - Lists when you joined the listed organization.
* **Last Updated** - Provides the date and time you last updated your user account information.

Click the **Members** link at the top of the User Account page to be taken to the Members page. Refer to Managing organization members in [Managing Organizations](/docs/management_guide/organizations/managing_organizations/).

## Edit account

To edit your account details, click the **Edit Account** button.

![Edit account page](/Images/edit_account.png)

Clicking the **Edit Account** button enables the editing of the **First Name** and **Last Name** fields. It also enables the **Phone Number** field and the verification of the entered phone number. For additional instructions on verifying your phone number, refer to [Verify your phone number](#verify-your-phone-number). Clicking on the Edit Account button also enables the **Timezone** dropdown menu. Once you have finished editing your user account information, click the **Save** button.

### Verify your phone number

Verifying your phone number is optional but **highly recommended** for increased security with multi-factor authentication. It must be SMS-capable and will be used to receive activation codes. **Standard text-messaging rates apply.**

To verify your phone number:

1. Complete the **Phone Number** field. The phone number should be entered as digits only in the format _\[+\]\[country code\] \[number including area code\]_.
2. Click the **Verify** button. When the **Verify** button is clicked, Dashboard sends a phone verification code to the phone number entered in the **Phone Number** field, and the **Verification Code** field is displayed. If you do not receive a verification code, click **Resend**.
    ![Verify your phone number](/Images/phone_number_verification_latest.png)
3. Enter the received verification code in the **Verification Code** field.
    Once a valid verification code is entered, Dashboard will process the verification and update the verification status of the phone number.
    ![Phone number verification code](/Images/phone_number_verified_latest.png)

## View organizations and roles

The **Orgs & Roles** link lists the organizations you are a member of by org name and assigned roles. This menu appears for accounts with multiple organizations only. To view organization details, click on a selected **Org Name** link.

![Orgs & Roles page](/Images/orgs_and_roles_tab.png)

## Manage credentials

The **Credentials** link takes you to the view where you can change your account password and enable or disable multi-factor authentication. If your organization is using an Identity Provider, the Credentials link takes you to the view where you can create and change the password you use for tooling. Refer to [Configuring Tooling Credentials](/docs/management_guide/configuring_and_managing_identity_providers/configuring_tooling_credentials).

### Change your password

To change your password:

1. Select the **Credentials** link.
2. Enter a new password in the **Change Password** field. The password should be at least eight characters. As you enter a new password in the **Change Password** field, the **Confirm Password** field is displayed.
    ![Change and confirm password](/Images/change_password_latest.png)
3. Confirm the new password in the **Confirm Password** field. The entry in the **Confirm Password** field must be the same as the entry in the **Password** field.
4. Select the **Force Logout** checkbox to force the log out of any current sessions.
5. Click the **Save** button. The password changes are saved, and the Dashboard sends an Account Information Changed notification email.

### Manage multi-factor authentication

Enable multi-factor authentication for increased security with authentication verification by an authenticator app, email, or SMS. Using MFA is optional, but **highly recommended.**

MFA definition (from Wikipedia)

_Multi-factor authentication (MFA; encompassing Two-factor authentication or 2FA, along with similar terms) is an  **electronic authentication method** in which a computer user is granted access to a website or application only after successfully  **presenting two or more pieces of evidence** (or factors) to an authentication mechanism: knowledge (something only the user knows), possession (something only the user has), and inherence (something only the user is). MFA protects the user from an unknown person trying to access their data such as personal ID details or financial assets. A third-party authenticator (TPA) app enables two-factor authentication, usually by showing a randomly-generated and constantly refreshing code to use for authentication._

Multi-factor authentication in the Amplify Platform is possible when your user account is managed in the Platform. If your account is managed by an external Identity Provider, then MFA is handled by that component.

To enable multi-factor authentication:

1. Select the **Credentials** tab.
2. Select **Enabled** next to the **Multi-Factor Authentication** option. The **Preferred MFA Method** options becomes available.
3. For the **Preferred MFA Method**, select the default method a multi-factor authentication token will be generated for when logging in from a new device. Options are **Authenticator App**, **Email**, and **SMS**.

    | Preferred MFA method | How this works | When can this be used |
    | ---| --- | --- |
    | Authenticator App | A random code is generated within the app that needs to be provided when the user logs into the Platform. | Only available when an authenticator app has been configured for your account. See [Setup Authenticator App](#setup-authenticator-app) for details. |
    | Email | A code is sent to your email address that needs to be provided when the user logs into the Platform. | Always available, uses the email address linked to your account. |
    | SMS | A code is sent through SMS that needs to be provided when the user logs into the Platform. | Only available when a phone number is linked to your account. See [Verify your phone number](#verify-your-phone-number) for details. |

4. Click **Save**. Once the Enabled checkbox is selected and the account saved, multi-factor authentication will be enabled, and a notification email will be sent.

5. Depending on the preferred MFA method you selected, make sure to complete these steps:
    * Authenticator App - [Setup Authenticator App](#setup-authenticator-app)
    * SMS - [Verify your phone number](#verify-your-phone-number)
6. After you have enabled MFA and you login you will see a notification asking you to enter an authorization code. You might need to use another browser or a private browser session to test this. Enter the Authorization code provided by your Authenticator App,  email, or SMS, and then click **Authorize**.

    When the code is correctly validated, you will be successfully logged into the Platform.

To disable multi-factor authentication:

1. Select the **Credentials** tab.
2. Deselect **Enabled** next to the **Multi-Factor Authentication** option.
3. Click **Save**.

Once the **Enabled** checkbox is deselected and the account saved, multi-factor authentication is disabled and a notification email is sent.

### Setup Authenticator App

Use an Authenticator App such as Google Authenticator or Microsoft Authenticator.

To setup an authenticator app:

1. Install an Authenticator App.
2. In the Platform, select the Credentials tab in the **Account** menu.
3. Click **Configure** next to **Set up Authentication App**. A popup appears with a QR code.
4. Scan the QR code with your Authenticator App.
5. Type the code from the Authenticator App into the modal dialog, and then click **Submit**. The Authenticator App is now configured.

## Manage settings

The **Settings** tab enables you to manage your organization account settings. You can configure the following settings:

* Select your organization account theme (Light, Dark, or Match OS)
* Expand or minimize side-bar menus
* Enable or disable demo data
* Select your org login rule
* Configure your inactivity logout timeframe
* Enable or disable restoring the previous page on your next login

![Branding page](/Images/settings_tab.png)

### Select the org login rule

If you are a member or owner of multiple accounts, to configure the login path and organization to log in to, select one of the following options from the **Org Login Rule** dropdown menu:

* **Use Last logged in Org** - The last account logged in to will be logged in to on the next login.
* **Use Default Org** - The default account will be logged in to on every login.
* **Always ask for Org** - You will be queried for which account to log in.

To view details of a listed organization, click on the organization name and refer to [Managing Organizations](/docs/management_guide/organizations/managing_organizations/).

### Configure your inactivity logout time

You can configure the amount of time before you are signed out of the **Amplify Platform** due to browser session inactivity. The options are 15 minutes, 30 minutes (default), 1 hour, or Disabled (do not log me out due to inactivity).

### Enable or disable restoring previous page on next login

You can enable or disable if you want to be redirected to the page previously viewed once signed back in after being signed out due to inactivity in the **Amplify Platform**. This setting is disabled by default (do not restore previous page on next login).

## View your user activity

Access the **Activity** page to filter and see more details about each of your user events.

1. From the _Recent Activity_ icon, click **View More** to view the _Activity_ page.
2. Filter your user events by:
    1. **Date Range Filter** - Filter the events by date and time.
        * Last 3 months (or previous months in 3-month intervals)
        * Last 30 days
        * Last 7 days
        * Last 24 hours
        * Last 60 minutes
        * Custom range
    2. **Event Types Filter** - Filter the events by the event type:
        * Org Events
        * User Events
        * Team Events
        * App Events
    3. **Search Box** - Type keywords to search by event description or contents.
3. Click to expand an event to view additional details.
