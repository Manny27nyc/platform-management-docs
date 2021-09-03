---
title: Getting started with Mobile Backend Services datasources
linkTitle: Getting started with Mobile Backend Services datasources
description: How to get started with Mobile Backend Services datasources. 
weight: 10
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Mobile Backend Services is deprecated and will be discontinued effective September 1, 2022.{{% /alert %}}

This guide provides how-to instructions for getting started with Mobile Backend Services (MBS) datasources.

1. [Creating a datasource](#creating-a-datasource).
2. [Creating a user](#creating-a-user).
3. [Retrieving the app key](#retrieving-the-app-key).

## Creating a datasource

To create a standalone Mobile Backend Services datasource (an MBS datasource not tied to a specific client application):

1. Log into the [Platform](https://platform.axway.com/).
2. Click Dashboard from the _Services Links_ menu.
3. Click the **Actions** (**...**) menu in the upper right.
4. Select **Create MBS Datasource**.
5. Enter the **Name** for the datasource.
    ![Create Mobile Backend Services Datasource page](/Images/addmobileservice.png)
6. If you have multiple environments, select the environments to enable for the datasource.
7. Assign teams to the application by selecting the **+** icons from the Assign Teams list.
8. Click **Create**. Dashboard will redirect you to the **Overview** tab for the new MBS datasource.

For additional information on managing MBS datasources, refer to [Managing Mobile Backend Services Datasources](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/).

## Mobile Backend Services app left navigation

The left navigation includes the following tabs:

![Mobile Backend Services left navigation](/Images/dashboard_mbs_app_left_menu.png)

* App overview
* Apps
* Analytics
* Manage Data
* Logs
* Configuration
* Push Notifications
* Documentation

## Creating a user

{{% alert title="Note" color="primary" %}}When creating a user, the **Username**, **Email**, and **Password** fields must be completed. Entering information for the additional fields is optional.{{% /alert %}}

To create a user for the new MBS datasource:

1. Select the **Manage Data** tab.
2. From the _Environment_ dropdown, select either **Development** or **Production**.
3. Select **Users** from the _Manage Data Objects_ list.
4. Click **\+ User**. The _User_ view is displayed.
    ![Create a user for the MBS datasource](/Images/user_add.png)

5. At a minimum, enter the **Username**, **Email**, and **Password**.

    {{% alert title="Note" color="primary" %}}Record the username and password. You need the username and the password to configure connectivity to an MBS connector. For additional MBS connector information, refer to [MBS Connector](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/mbs_connector.html).{{% /alert %}}

6. Click **Save**.

For additional information on managing MBS data objects, refer to [Managing Mobile Backend Services data objects](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/managing_mobile_backend_services_data_objects/).

## Retrieving the app key

To retrieve the App Key for the new MBS datasource:

1. Select the **Configuration** tab.
2. Select the **Keys** tab.
3. Click **Show** to display the App Key.
    ![Retrieve the app key for the MBS datasource](/Images/app_key.png)

    {{% alert title="Note" color="primary" %}}Record the App Key. For additional MBS connector information, refer to [MBS Connector](https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/mbs_connector.html).{{% /alert %}}

4. Click **Hide** to hide the App Key.
