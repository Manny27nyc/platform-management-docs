---
title: Creating an organization
linkTitle: Creating an organization
description: How to create organizations.
weight: 40
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}**Enterprise Subscription Required!** </br>
This Amplify Services feature requires an Enterprise Subscription.{{% /alert %}}

If you are an administrator of your organization, you can create child organizations under your parent organization. Child organizations share the user and device resources with the parent organization and cannot be allotted more than what the parent has not used.

If your organization is an authorized Amplify Services Reseller and you are an admin user, you can create two kinds of organization:

* Internal organizations, called **Groups**, are the same as children organizations that will use your parent organization's allotted user and device resources.
* External organizations, called **Customers**, is a group that has purchased Amplify services, which is allotted a pool of user and device resources.

To create an organization:

1. Sign in to the [Platform](https://platform.axway.com/).
2. Click on the _User_ dropdown menu and select **Organization**.
3. If you're a member of multiple organizations, select the organization from the **Organization** dropdown menu you want to which you want to add an organization.
4. On the **Organization** tab, click the **Action Menu** icon in the upper-right corner of the screen and select either **New Child Org** or **New Org**.
5. In the **Name** field, enter the name of the organization.
6. In the **Admin Email** field, enter the email address of the person who will be administrating the organization.
7. (New Org) In the **Dashboard Users** field, enter the number of seats to allocate for Dashboard users in the new organization.
8. (New Org) To invite users to the new organization, click **Invite Members to this Organization.**

    {{% alert title="Note" color="primary" %}}This button is disabled if the specified number of **Dashboard Users** is not greater than 1.{{% /alert %}}

9. Click **Create**.
