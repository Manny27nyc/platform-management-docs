---
title: Managing client applications
linkTitle: Managing client applications
description: This section provides information on app overview and service keys, what the API Builder, test, and performance tabs entail, how to view real-time and aggregated analytics, and managing application team members.
weight: 10
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Client applications support ends March 1, 2022. Refer to the [End of Support announcement](https://devblog.axway.com/featured/product-update-changes-to-application-development-services-appcelerator/) for details.{{% /alert %}}

## App Overview and service keys

When you select a client application from the **Apps** tab, its **Overview** tab opens. The **Overview** tab displays basic information about the application, including its name, description, and application GUID, category, creator, admin, and assigned teams. It also includes [key metrics](/docs/dashboard_guide/managing_applications/viewing_metrics/) collected by the Analytics service.

## Apps left navigation

The left navigation includes the following tabs:

![Apps ledt navigation](/Images/titanium_apps_left_menu.png)

For Titanium applications, the **Overview** tab also specifies the **App ID** and **SDK Version** assigned to the application when it was created. The Titanium applications **Overview** tab also the application's publisher, copyright, and URL information.

![Apps overview](/Images/app_overview_latest.png)

Native iOS and Android applications include the same basic information on the **App Info** tab as Titanium applications. The **App Info** tab includes Category, Creator, and Admin information. Additionally, you can click the **Actions** (**...**) menu in the upper-right of the screen and select **Edit** to edit the Name, Category, and Description of your application for iOS and Android applications. Once you have completed your edits, click the **Save** button to save your edits. To return the **Overview** tab without saving your edits, click the **Cancel** button.

![Edit iOS and Android apps](/Images/edit_app.png)

For Titanium applications, you can click the **Actions** (**...**) menu in the upper-right of the screen and select **Edit** to edit the Name, App ID, Copyright, URL, and Description of your application. Once you have completed your edits, click the **Save** button to save your edits. To return the **Overview** tab without saving your edits, click the **Cancel** button.

{{% alert title="Note" color="primary" %}}Changes you make here will not affect your local application. Make sure to mirror the changes in your `tiapp.xml` file, or these will be overwritten the next time you build your app.{{% /alert %}}

![Edit Titanium apps](/Images/edit_titanium_app.png)

You can also permanently delete the selected application by clicking the **Action Menu** icon and selecting **Delete**. To confirm the deletion of the selected application, type the name of the application you would like to delete permanently, and then select, **I understand that this a permanent and irreversible action. Continue**.

## APIs tab

The **APIs** tab lists the Services, APIs, {{% variables/apibuilder_prod_name %}} (**Service**) applications, and Mobile Backend Services (**Data**) used by the application. Click an item in the list to view or manage its services. See [Managing Mobile Backend Services Datasources](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/) for details.

{{% alert title="Note" color="primary" %}}Mobile Backend Services and Runtime Services are deprecated and will be discontinued effective September 1, 2022.{{% /alert %}}

![APIs page](/Images/apis_latest.png)

## Crashes tab

The **Crashes** tab displays the total number of crashes of your application for the selected time frame and the crash rate for your application. The crash for your application is calculated by dividing the total number of crashes by the total number of sessions. Additionally, error messages, time of the first occurrence, time of the last occurrence, total occurrences, and triage status are displayed for each operating system (for example, Windows, iOS, and Android). The displayed crash analytics can be filtered by the environment, crash type, and crash status. To export the crash analytics information, click the **Actions** (**...**) menu, and select either **Chart** or **Table**.

![Crashes page](/Images/crashes.png)

To upload symbol files:

1. Click the **Actions** (**...**) menu icon and select **Upload Symbols**.
2. Select the **Platform**.
3. Select the **Version**.
4. Choose the symbol file to upload.
5. Click **Upload**.

To filter and search crashes by username:

1. Enter the username in the **Search by username** field.
2. Click **Search.**

## Viewing real-time and aggregated analytics

The **Analytics** tab displays real-time analytics, such as the number of active users, the number of installs, the number of sessions, and the number of events.

You can also view custom events captured by your application using the Titanium.Analytics object, or the performance APIs provided by the Platform Services SDK for [iOS](https://docs.axway.com/bundle/Amplify_Appcelerator_Services_allOS_en/page/aps_analytics_for_ios.html) or [Android](https://docs.axway.com/bundle/Amplify_Appcelerator_Services_allOS_en/page/aps_analytics_for_android.html).

You can define event funnels, or custom ordered collections of captured events that track a particular user or business process, such as a sales funnel (for example, purchase and purchase confirm).

![Analytics page](/Images/analytics_event_funnels.png)

For more information, see [Viewing Analytics](/docs/dashboard_guide/managing_applications/viewing_analytics/).

## Application preview

You can upload and preview applications by clicking the **Actions** (...) menu icon for a selected app, and then selecting **App Preview**. For more information, see [Previewing Applications](/docs/dashboard_guide/managing_applications/managing_client_applications/previewing_applications/).
