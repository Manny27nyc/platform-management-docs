---
title: Managing Mobile Backend Services datasources
linkTitle: Managing Mobile Backend Services datasources
description: 
weight: 20
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Mobile Backend Services is deprecated and will be discontinued effective September 1, 2022. Refer to the [End of Support announcement](https://devblog.axway.com/featured/product-update-changes-to-application-development-services-appcelerator/) for details.{{% /alert %}}

To view service details and manage data properties for a Mobile Backend Services (MBS) datasource, select it from the Dashboard home page **Apps** tab.

## Create a new datasource

To create a standalone Mobile Backend Services datasource (an MBS datasource that is not tied to a specific client application), refer to the [Getting Started with Mobile Backend Services Datasources](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/getting_started_with_mobile_backend_services_datasources/).

## Change the name of the datasource

To change the name of the datasource:

1. Log into the [Amplify Platform](https://platform.axway.com/).
2. Click Dashboard from the _Service Links_ menu.
3. Select the datasource from the apps list.
4. In the datasource details page, click the **Actions** (**...**) menu in the upper-right of the screen and select **Edit**.
5. Enter a new name for the datasource.
    ![](/Images/rename_new.png)
6. (Optional) Enter a datasource description.
7. Click **OK**.

## Delete the datasource

To delete the datasource:

1. Click the **Actions** (**...**) menu.
2. Select **Delete**.
3. Confirm you want to delete the datasource. To permanently delete the datasource, type the name of the data store (datasource) you would like to permanently delete and select, **I understand that this a permanent and irreversible action. Continue**. Click the **Cancel** button to return the Overview tab without deleting the data store.

## View API usage data

The **Overview** tab displays the Mobile Backend Services Usage data and includes the number of Mobile Backend Services Requests made to MBS, the number of devices connected to receive [push notifications](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/sending_and_scheduling_push_notifications/), the number of email templates available to the application, and the amount of disk storage used. The **Overview** tab also displays the App GUID, Description, Teams, Created, and Creator information for the selected MBS application.

![](/Images/overview_new.png)

## View connected applications

The **Apps** tab displays a list of applications (Titanium or native) that are consuming the selected Mobile Backend Service app. Select an application from the list to manage it.

![](/Images/apps_new.png)

## View API analytics

The **Analytics** tab displays the total number of API calls for the selected period by API type (Chats or Users APIs, for instance) or by individual application. For additional information, see [Viewing Analytics](/docs/dashboard_guide/managing_applications/viewing_analytics/).

![](/Images/analytics_new.png)

## Manage data

The **Manage Data** tab displays the number of each type of MBS object created by the selected application. Click the MBS type in the table to view, edit, create and delete objects (see [Managing Data Objects](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/managing_mobile_backend_services_data_objects/)).

To export your application's MBS data in a JSON format, click the **Actions** (**...**) menu icon and select **Export Data.** To delete your application's data, click the **Actions** (**...**) menu icon and select **Delete Data.**

![](/Images/manage_data_new.png)

## View and filter API logs

The **Logs** tab displays a paginated table of all API calls made by your application to the selected MBS service.

![](/Images/logs_new.png)

The table includes the following fields:

* **Method** – HTTP method used.
* **Path** – Path of the HTTP request.
* **Status** – HTTP status of the request.
* **Date** – Date and time of the request in UTC.

Clicking a table row expands it to display the following additional fields:

* **Source IP** – IP address of the client that made the request.
* **Parameters** – Click **Show** to view a list of request parameters, and the full URL request.

You can filter MBS API requests by their date.

![](/Images/filter_logs_latest.png)

## Configuration

On the **Configuration** tab you can select from the following sub-tabs:

* **Keys** – View your {{% variables/apibuilder_prod_name %}} application key and OAuth consumer key and OAuth secret.
* **Settings** – Change {{% variables/apibuilder_prod_name %}} settings such as enable or disable new user email verification, friend request type (two-way or one-way), and whether users can be created from the application or only from Dashboard.
* **Email** – Provide SMTP or MessageGears server settings for Dashboard to send an email on behalf of your application. Additionally, you can enable or disable the email test mode.

For details, see [Configuring Cloud Services](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/configuring_cloud_services/).

![](/Images/configuration_latest.png)

## Manage push notifications

The **Push Notifications** tab lets you select from the following sub-tabs:

* **Send –** See [Sending and Scheduling Push Notifications](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/sending_and_scheduling_push_notifications/) for details.
* **Logs** – Paginated and filterable table of push notification log items. See [Push Notification Logs](#push-notification-logs).
* **iOS** – Configure {{% variables/apibuilder_prod_name %}} Push to communicate with the Apple Push Notification Service (APNS). See [iOS and Android Push Notification Settings](#push-notification-settings) for details.
* **Android** - Configure Firebase Cloud Messaging service for Android (FCM) on behalf of your application. [Firebase Cloud Messaging](http://firebase.google.com/docs/cloud-messaging/) (FCM) is the new version of GCM. See [iOS and Android Push Notification Settings](#push-notification-settings) for details.
* **Devices** – View a list of devices subscribed to receive push notifications. See [View Subscribed Devices](#view-subscribed-devices).
* **Scheduled**  – View a list of scheduled pushes.

### Push notification logs

Click the **Logs** tab to view a paginated table of push notifications delivered by Dashboard, and the status of the notification. Each row contains the following fields:

* **Payload –** The JSON notification payload.
* **Channel –** The name of the subscription channel to which the notification was delivered.
* **Processed –** The time and date the push notification was processed.
* **Notification ID** – ID of the delivered notification.
* **iOS** – The number of iOS devices that received the push.
* **Android** – The number of Android devices that received the push.
* **Devices** – The total number of devices that received the push.
* **Status** – The status of the notification (Success or Fail).
* **Sent** – Time and date the notification was sent.

You can filter the listing of push notifications by channel name or creation date.

### Push notification settings

The **iOS** and **Android** tabs are where you configure Dashboard to use the APNS or either the FCM or GCM push notification services. For details, see [Configuring Push Services](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/sending_and_scheduling_push_notifications/).

#### iOS push notification settings

Click the **iOS** tab to configure the application to use the Apple Push Notification service. Before configuring APN, you need to create a Push Notification Certificate and export it as a PKCS #8 or #12 file. For instructions, see [Configuring push services for iOS devices](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/sending_and_scheduling_push_notifications/).

To configure the p8 format

1. Click **Browse** in the Push Certificate field.
2. Locate the PKCS #8 file with your Push Notification certificate and click **Choose File**.
3. Select p8 for the **Certificate Format**.
4. Complete the following fields.
    * **Key ID** - is a 10 character string (for example, TJ9953DRAJ) and can be found at [https://developer.apple.com/account/resources/authkeys/review](https://developer.apple.com/account/resources/authkeys/review).
    * **Team ID** - is a 10 character string (for example, JKVJBKSZOR) and can be found at [https://developer.apple.com/account/#/membership](https://developer.apple.com/account/#/membership).
5. (Optional) Enter the bundle ID in the **Bundle ID** field.
6. Click **Save**.

    ![](/Images/ios_push_latest_p8.png)

To configure the p12 format_

1. Click **Browse** in the Push Certificate field.
2. Locate the PKCS #12 file with your Push Notification certificate and click **Choose File**.
3. Enter the certificate's password in the **Certificate Password** field.
4. Select p12 for the **Certificate Format**.
5. (Optional) Enter the bundle ID in the **Bundle ID** field.
6. Click **Save**.
    ![](/Images/ios_push_latest_p12.png)

#### Android cloud messaging settings

Click the **Android** tab to configure the application to use the Firebase Cloud Messaging (FCM) service. [Firebase Cloud Messaging](http://firebase.google.com/docs/cloud-messaging/) (FCM) is the new version of GCM. FCM HTTPv1 and FCM legacy HTTP is supported. Before configuring FCM legacy HTTP, you need to obtain an FCM or GCM sender ID and Google API server key. For instructions, see [Configuring push services for Android devices](/docs/dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/sending_and_scheduling_push_notifications/).

_To configure FCM HTTPv1_, select a service account JSON file from your Firebase console Service Accounts page.

![](/Images/android_cloud_messaging_httpv1.png)

To configure FCM Legacy HTTP

1. Enter the Google API server key in the **Server Key** field.
2. Enter the FCM or GCM sender ID in the **Sender ID** field.
3. Click **Save**.

    ![](/Images/android_cloud_messaging_latest.png)

### View subscribed devices

Click the **Devices** tab to view a list of subscribed users, devices, and channel subscriptions. Each list row contains the following columns:

* **Channel** – The notification channel(s) the device is subscribed to.
* **Type** – The subscription's push notification type **(Android** or **iOS).**
* **User** – The full name of the {{% variables/apibuilder_prod_name %}} user subscribed to the channel. For token-based subscriptions, this field is empty.
* **Device Token** – The device token obtained from the Firebase Cloud Messaging or Apple Push Notification service. Click the expander (**+**) button to view the complete device token.

You can filter the list of subscribed devices by channel, type, or user ID. To filter the list:

1. Click the **Filter** button.
2. In the first drop-down, select either **User ID**, **Type**, or **Channel** to filter the list according to that criteria.
3. You can only select **Equals** in the second drop-down.
4. In the last field, enter the value you want to filter by:
    1. For **User ID**, enter the object ID of the User.
    2. For **Type**, either enter `android` or `ios` **.**
    3. For **Channel**, enter the name of the channel.
5. Click **Apply Filters**.

To remove the filter, click **Clear Filter**.

### View scheduled notifications

Click the **Scheduled** tab to display a list of one-time or recurring scheduled notifications. Initially, the list displays the following fields:

* **Name**  – Schedule name.
* **Recurring** - A Boolean that indicates if the schedule is recurring (Yes) or one-time (No).
* **Payload** - The JSON payload to deliver with the notification.
* **Start Time** -  The date and time (in UTC) that the notifications are scheduled to start being delivered.

Click the expander button (**+**) next a list item to view details about the schedule, or to edit or delete the schedule. The details view contains the following fields:

* **Channel** – Name of the channel the notification will be sent.
* **To Users** – The {{% variables/apibuilder_prod_name %}} Users to which the message will be sent.
* **Starts On/Ends On** – Start and end date and time the scheduled starts and expires.
* **Recurs** – How often the schedule repeats. Possible values are Daily, Weekly, or Monthly.

## View documentation

The **Documentation** tab displays a list of links to the Mobile Backend Services guides and other resources.
