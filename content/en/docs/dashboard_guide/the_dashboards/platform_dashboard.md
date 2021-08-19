---
title: The Amplify Platform dashboard
linkTitle: The Amplify Platform dashboard
description: 
weight: 10
date: 2021-08-12
---

## The Amplify Platform Dashboard

The Amplify Platform Dashboard left navigation comprises the following menu items:

{{% alert title="Note" color="primary" %}}The available menus on the Dashboard may vary based on your role and your organization's subscriptions.{{% /alert %}}

![](/Images/dashboard_left_menu.png)

* **Overview** - displays  key metric information relevant to a product line to which your organization is subscribed. All users will see the Overview tab.
* **API Observer** - navigates you to the [API Observer](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/quickstart/index.html#monitor-api-traffic) dashboard. Users with the Central Admin and Developer roles will see the API Observer tab .
* **Visibility** - you to the [Amplify Visibility Dashboards](/docs/dashboard_guide/the_dashboards/visibility_dashboards/). Users with the Auditor or Analytics Specialist Visibility roles will see the Visibility tab.
* **Apps** - displays the list of applications for your organization and where you can [manage your applications](/docs/dashboard_guide/managing_applications/). Organizations with Application Development, Cloud Capacity, or Runtime Services subscriptions will see the Apps tab.
* **Custom Queries** - if configured, displays custom query summary information and enables the creation of custom analytics queries. Organizations with the Application Development or API Management subscriptions will see the Custom Queries tab.
* **Premium Modules** - navigate to the _Download Premium Modules_ page. Organizations with Application Development Pro or Enterprise subscriptions will see this tab.

The left-side in the bottom navigation contains a link for enabling Demo Data mode. Click **Demo Data** to populate Dashboard with demonstration data to see how the Dashboard looks if you have several applications and APIs in production.

## Overview

The **Overview** displays key metric information relevant to the product line to which your organization is subscribed. For additional information on the key metrics, refer to [Viewing Metrics](/docs/dashboard_guide/managing_applications/viewing_metrics/).

![](/Images/dasbhoard_home_overview_tab.png)

## API Observer

**API Observer** redirects you to [API Observer](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/quickstart/index.html#monitor-api-traffic).

## Visibility

**Visibility** takes you to the Amplify Visibility Dashboards. The [Amplify Visibility Dashboards](/docs/dashboard_guide/the_dashboards/visibility_dashboards/) provide a way to visualize the data that is ingested from various products.

## Apps

**Apps** displays the list of applications for the selected organization. Select the **Show only my apps** checkbox to limit the displayed list of applications to only display your projects or applications. The list of apps can also be filtered by app type. You can also search the list of apps by app name, ID, or creator and select and pin apps from the list of apps.

{{% alert title="Note" color="primary" %}}Mobile Backend Services and Runtime Services are deprecated and will be discontinued effective September 1, 2022.{{% /alert %}}

![](/Images/dashboard_apps_home_tab.png)

To manage an application, select the application to manage from the list of applications.

If you haven't created any applications yet, you will be directed to the _You don't have any apps yet!_ page. Don't worry. It's easy to get started creating apps using the Amplify Platform. It should take you only a few minutes to create an app. Once you do, your Dashboard will have data here. To get started creating applications, click one of the following options:

* **Get the latest tools -** You will be forwarded to the _Get started with App Builder_ page where you can select to get started building apps with either [Axway Appcelerator Studio](https://docs.axway.com/bundle/Appcelerator_Studio_allOS_en/page/axway_appcelerator_studio.html) or [Appcelerator CLI](https://docs.axway.com/bundle/Appcelerator_CLI_allOS_en/page/appcelerator_cli.html).
* **Register App for Services** \- You will be forwarded to the _Register App for Services_ page.
* **Create MBS Datasource** \- If you do not have a subscription, you will be forwarded to the _Billing_ page where you can upgrade your plan to access locked items. Refer to [Managing Billing](/docs/management_guide/managing_billing/). If you have a subscription, you will be forwarded to the _Create Mobile Backend Services Datasource_ page.

![](/Images/dashboard_home_no_apps.png)

Once you have apps created, you can add new apps from the apps list page. Click the **Actions** ( **...** ) menu in the upper right, and then select **Register App for Services** or **Create MBS Datasource**.

### App list filtering

The apps list can be filtered by:

* All Apps
* Titanium SDK Apps
* APS SDK Apps
* Runtime Services
* Mobile Backend Services
* APIs/Microservices
* Website/Web Apps
* Other

To filter the apps list by a selected app type:

1. Select **All Apps**.
2. Select an app type from the _All Apps_ down-down menu.

The displayed apps list will be updated and will only display the apps matching the selected application type.

### Apps list sorting

The Name, Type, and Created columns in the apps list can be sorted either in ascending and descending order. Note that pinned apps will always appear at the top of the apps list in the sorted order.

### Apps list paging

The number of displayed applications per page can be selected using the _per page_ drop-down menu.

![](/Images/application_list_paging.png)

The number of applications displayed per page can be set to:

* 10 per page
* 25 per page (default)
* 50 per page
* 100 per page

### Select favorite apps

To pin an app or add an app as a favorite:

1. Click the **Actions** (**...**) menu associated with the app to pin.
2. Select **pin**.

The app will be updated to indicate it is pinned and it will be displayed at the beginning of the apps list.

To unpin an app or remove an app as a favorite:

1. Click the **Actions** (**...**) menu associated with the app to unpin.
2. Select **unpin**.

The app will be unpinned and will display alphabetically in the apps list.

### Delete apps

You must have the administrator role for the organization or team to see the **Delete** option and to delete apps.

To delete a single app:

1. Click the **Actions (...)** menu associated with the app to delete.
2. Select **Delete**.
3. Enter the name of application or datasource to delete.
4. To confirm the deletion, click **I understand that this a permanent and irreversible action. Continue**.

To delete multiple apps:

1. Select the apps to delete by using multi-select methods for your Operating System.
2. Click the **Actions (...)** menu located at the upper right of the apps list page.
3. Enter your Amplify Platform password.
4. To confirm the deletion, click **I understand that this a permanent and irreversible action. Continue**.

## Custom queries

**Custom Queries** displays custom query summary information and enables the creation of custom analytics queries. For information on creating custom queries, refer to [Creating Custom Queries](/docs/dashboard_guide/managing_applications/creating_custom_queries/).

![](/Images/dashboard_home_custom_queries_tab.png)

## Premium modules

**Premium Modules** takes you to the _Download Premium Modules_ page.

![](/Images/download_premium_modules.png)

To download a premium module, click the module download button associated with your current Titanium SDK installation. The following premium modules are available for download:

* **Appcelerator Crash Analytics** - Enables Appcelerator Crash Analytics. Appcelerator Crash Analytics allows you to identify and troubleshoot crashes in your mobile applications.
* **SQLite Database Encryption Module** - Provides transparent, secure 256-bit AES encryption of SQLite database files.
* **Appcelerator Crypto Module** - Provides access to the CCCrypt symmetric encryption interfaces such as AES128, DES, RC2, and RC4.
* **Appcelerator Geofence Module** - Enables monitoring of regional boundaries and alerts when specified boundaries are entered.
* **Appcelerator HTTPS Module** - Provides SSL Pinning support to prevent man-in-the-middle (MITM) attacks.
* **Appcelerator LDAP Module** - Provides access to LDAP directory servers by utilizing the UnboundID LDAP SDK for Java, allowing for binding and searching against the service.
* **ti.cloudpush** - Enables Mobile Backend Services Push Notifications for Android applications.