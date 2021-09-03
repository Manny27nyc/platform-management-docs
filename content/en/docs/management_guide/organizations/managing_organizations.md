---
title: Managing organizations
linkTitle: Managing organizations
description: A Platform administrator can perform various tasks to manage their organizations.
weight: 30
date: 2021-08-12
---

As an administrator the {{% variables/platform_prod_name %}} lets you:

* View details about your organization
* Manage the users and service accounts who have access to the Amplify Services
* Manage the applications created by organization users
* Configure Identity Providers

These functions are available through the **Organization** tab. To access the **Organization** tab, sign in to the  [{{% variables/platform_prod_name %}}](https://platform.axway.com/) and select **Organization** from the _User_ dropdown menu.

## Organization left navigation

To manage your organization information, select **Organization** from the _User_ menu. The left navigation includes the following tabs:

![Organization left navigation](/Images/organization_left_menu.png)

* Organization
* Teams
* Users
* Service Accounts
* Child Orgs (you must be an administrator)
* Usage
* Environments (you must be an administrator)
* Settings (you must be an administrator)
* Activity

## Managing an organization

The **Organization** tab enables you to select and update the organization name. It also provides detailed organization and subscription information.

![Managing organizations](/Images/organization_tab.png)

To update an organization name:

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Organization** tab from the left navigation.
4. Select the organization from the _Organization_ dropdown menu.
5. Select the **Actions** (**...**) menu at the upper right-hand side of the _Organization_ page.
6. Select **Edit** from the **Actions** menu.
7. Enter the desired organization name in the **Name** field.
8. Click **Save**.

To add a child organization, refer to [Creating an Organization](/docs/management_guide/organizations/creating_an_organization/).

## Managing users

The **Users** tab enables you to view and manage users of the selected organization.

![Managing users](/Images/dashboard_users.png)

### Invite a user to your organization

If you are an organization admin, you can add users to an organization. An organization admin can only add as many users as the number of available seats in the organization.

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Users** tab from the left navigation.
4. If you're a user of multiple organizations, select the organization you want to view from the _Users_ dropdown menu.
5. Click the **\+ User** button in the upper-right corner.
6. Enter the user's email address.
7. Select the user's roles from the _Org Roles_ dropdown menu. One platform role and zero, one or more service roles can be selected. Administrators can manage all users and applications in the organization.
8. In the **Teams** list, select the teams, if any, to which the user should be added.
9. Select the role the new organization member will fulfill on their assigned team from the _Roles_ dropdown menu.
10. Click **Save**.

An email invitation is sent to the user, providing a link to confirm their membership.

### View and modify a user's role or access

After you create or add a users to your organization, you can view and modify the user's access rights or role.

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Users** tab from the left navigation.
4. If you're a user of multiple organizations, select the organization you want to view from the _Users_ dropdown menu.
5. To change a user's role, select a different role or additional roles from the _Role_ dropdown menu. Note that the _Role_ dropdown menu selections are sorted by product roles. Administrators can manage all users and applications in the organization. All other user roles can view only applications to which they belong.
6. To remove a selected user from the organization, select the **Actions** menu (**...**), and select **Remove User** and then confirm the removal.
7. To view a user's team assignments, select the **Actions** icon, and select **View Teams**. Refer to [Managing teams](#managing-teams).

The user's last login is displayed in the _Last Login_ column, and their current multi-factor authentication status is shown in the _MFA_ column. For more information on multi-factor authentication, refer to [Manage multi-factor authentication](/docs/management_guide/managing_accounts/#manage-multi-factor-authentication).

## Managing service accounts

The **Service Accounts** tab enables you to view and manage service accounts of the selected organization.

![Managing Service Accounts](/Images/manage_service_accounts.png)

### Add a service account

If you are an organization admin, you can add new service accounts to an organization. An organization admin can only add as many service accounts as the number of available seats in the organization.

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Service Accounts** tab from the left navigation.
4. If you're a user of multiple organizations, select the organization you want to view from the _Service Account_ dropdown menu.
5. Click the **+** **Service Account** button in the upper-right corner.
6. Enter the service account name and optionally add a description.
7. (Optional) Select the service account's roles from the _Org Roles_ dropdown menu. One or more service roles can be selected. Administrators can manage all users and applications in the organization.
8. In the Authentication section, select one of the following authentication methods to authenticate the service account.
    * **Client Certificate** - Select this method to use a provided certificate or a Platform-generated certificate. Select **Provide public key** to use your own certificate, and then upload your public key for your certificate. Select **Platform-generated key pair** to use a Platform-generated certificate. Certificates generated by the Platform use 2048-bit RSA encryption. When you click **Save**, a modal dialog appears explaining that a certificate pair for the service account has been generated and you must download the generated private key to store securely.
    * **Client Secret** - Select this method to use a provided client secret or a Platform-generated secret. When you click **Save**, a modal dialog appears allowing you to view or copy the client secret to store securely.
9. (Optional) In the **Teams** list, select the teams, if any, to which the service account should be added. Select the role the new organization service account will fulfill on their assigned team from the _Roles_ dropdown menu.
10. Click **Save**.

### View and modify a service account's role or access

After you create or add a user to your organization, you can view and modify the service account's access or role.

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Service Accounts** tab from the left navigation.
4. If you're a user of multiple organizations, select the organization you want to view from the _Service Accounts_ dropdown menu.
5. To view the service account details, select a service account from the list. The details page appears.
6. To edit the service account, select the **Actions** menu (**...**), and select **Edit**.
    * To change the service account name, type a new name. When you change the service account name, the client ID is changed, and the existing client ID is no longer valid. These changes need to be applied anywhere this service account is used. If not, the service account will cease to function.
    * To change the authentication credentials, provide a new public key or client secret or generate a new key pair or client secret. If you change these values, the existing values are no longer valid. These changes need to be applied anywhere this service account is used. If not, the service account will cease to function.

        {{% alert title="Note" color="primary" %}}The service account Authentication method cannot be changed.{{% /alert %}}

    * To change a service account's role, select a different role from the _Team Roles_ dropdown menu. Administrators can manage all users and applications in the organization. All other user roles can view only applications to which they belong.
7. To download the service account authentication profile in JSON format, select the **Actions** menu (**...**), and select **Download JSON File** (available for Client Certificate authentication method).
8. To remove a selected service account from the organization, select the **Actions** menu (**...**), and select **Delete** and then confirm the deletion.
9. To view a service account's team assignments, select the **Actions** menu (**...**) and select **View Teams**. Refer to [Managing teams](#managing-teams).

## Managing teams

The **Teams** tab enables you to view and manage teams, their members and their assigned applications.

![Managing teams](/Images/teams_tab.png)

### Add a new team

To add a team:

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Teams** tab from the left navigation.
4. If you're a member of multiple organizations, select the organization you want to view from the _Teams_ dropdown menu.
5. Click the **\+ Teams** button.
6. Enter the team name in the **Name** field.
7. (Optional) Provide a team description in the **Description** field.
8. (Optional) Add team tags in the **Tags** field.
9. Add members (users or service accounts) to the team by selecting team members from the Add Members list by clicking the **+** icons.
10. Assign applications to the team by selecting applications from the Assign Applications list by clicking the **+** icons.
11. Click **Save**.
    ![Add a new team](/Images/add_new_team.png)

### Edit a team

To edit an existing team:

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Teams** tab from the left navigation.
4. If you're a member of multiple organizations, select the organization you want to view from the _Teams_ dropdown menu.
5. Select the **Actions** (**...**) menu associated with the team to edit.
6. Select **Edit**.
7. Make the necessary changes to the selected team. For additional information, refer to [Add a new team](#add-a-new-team).
8. Click **Save**.

### Set a team as default

To set a team as default:

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Teams** tab from the left navigation.
4. If you're a member of multiple organizations, select the organization you want to view from the _Teams_ dropdown menu.
5. Select the **Actions** (**...**) menu icon associated with the team to edit.
6. Select **Set as Default**.
7. Confirm setting the selected team as the default team by clicking **Continue** in the confirmation dialog.

### Remove a team

To remove a team:

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Teams** tab from the left navigation.
4. If you're a member of multiple organizations, select the organization you want to view from the _Teams_ dropdown menu.
5. Select the **Actions** (**...**) menu associated with the team to edit.
6. Select **Remove**.
7. (Optional) Select a team to which to transfer the team's assigned apps.
8. Confirm the removal of the deletion of the selected team, by entering the name of the team to delete permanently.
9. Click **I understand that this is a permanent and irreversible action. Continue**.

## Managing child organizations

The **Child Orgs** tab enables you to manage child organizations and to add a child organization to the selected parent organization. To add a child organization, refer to [Creating an Organization](/docs/management_guide/organizations/creating_an_organization/).

![Managing child organizations](/Images/child_orgs_tab.png)

## Viewing usage

The **Usage** tab enables you to view the usage of allocated resources for the selected organization for the selected product or all products for the selected period.

![Viewing usage](/Images/usage_tab.png)

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Usage** tab from the left navigation.
4. If you're a member of multiple organizations, select the organization you want to view from the _Usage_ dropdown menu.
5. Select **All Products** or a specific product from the dropdown.
6. Select a month and year from the dropdown.

Refer to the __*[Amplify Subscription Usage With Edge Agent 1.0](https://docs.axway.com/bundle/subusage_en/page/amplify_subscription_usage_and_reporting.html)*__ or __*[Amplify Subscription Usage](https://docs.axway.com/bundle/subusage_11_en/page/amplify_subscription_usage_and_reporting.html)*__ guide for details on configuring, reporting, and monitoring usage data for customer-managed on-premise Axway products that you use under subscription agreements.

## Selecting or creating environments for usage tracking

The **Environments** tab is used for usage tracking. Refer to manual entry reporting in the __*[Amplify Subscription Usage With Edge Agent 1.0](https://docs.axway.com/bundle/subusage_en/page/amplify_subscription_usage_and_reporting.html)*__ or __*[Amplify Subscription Usage](https://docs.axway.com/bundle/subusage_11_en/page/amplify_subscription_usage_and_reporting.html)*__ guide for details about how to select or create an environment for usage tracking.

## Managing organization settings

The **Settings** tab enables you to:

* Brand the Dashboard for the selected organization.
* Configure and manage entity providers for Amplify Platform authentication.

![Managing organization settings](/Images/settings_tab.png)

### Change the branding

To brand the Dashboard per your organization's branding requirements:

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Settings** tab from the left navigation. The _Branding_ page appears.
4. If you're a member of multiple organizations, select the organization you want to view from the _Branding_ dropdown menu.
5. Select your organization's logo. The logo will be displayed at a maximum height of 45 pixels, and the logo file must be less than 100KB.
    1. Click **Choose File**.
    2. Select the logo file to upload. Once the logo file is selected, the _Branding Preview_ will update to display the selected logo.
    3. To remove the selected icon file, click **Remove**.
6. Select your catalog colors. As you select your catalog colors, the _Branding Preview_ will update to display the selected colors.
    1. Select or enter the **Header Left** color.
    2. Select or enter the **Header Right** color.
    3. Select or enter the **Tile Border** color.
    4. Select or enter the **Tile Border on Hover** color.
7. Click **Save**.

### Manage Identity Providers

Refer to the [Configuring and Managing Identity Providers (IdPs)](/docs/management_guide/configuring_and_managing_identity_providers_idps/) page for details.

## Viewing organization activities

The **Activity** tab allows you to filter and see more details about each of the events for your organization.

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the **User & Org** menu and select **Organization**.
3. Click the **Activity** tab from the left navigation.
4. If you're a member of multiple organizations, select the organization you want to view from the _Activity_ dropdown menu.
5. Filter your user events by:
    1. **Date Range Filter** - Filter the events by date and time.
        * Last 3 months (or previous months in 3-month intervals)
        * Last 30 days
        * Last 7 days
        * Last 24 hours
        * Last 60 minutes
        * Custom range
    2. **All Event Types Filter** - Filter the events by the event type:

        {{% alert title="Note" color="primary" %}}Mobile Backend Services and Runtime Services are deprecated and will be discontinued effective September 1, 2022.{{% /alert %}}

        * Org Events
        * Team Events
        * App Events
        * Mobile Backend Services Events
        * Runtime Services Events
    3. **Search Box** - Type keywords to search by event description or contents.
6. Click to expand an event to view additional details.

## Troubleshooting

{{% alert title="Note" color="primary" %}}### I was recently promoted to Administrator, but I cannot see applications from other users

1. Sign out of the Amplify Platform.
2. Clear your browser's cache. You may need to restart the browser.
3. Sign back into the Amplify Platform.{{% /alert %}}
