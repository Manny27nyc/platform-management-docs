---
title: Previewing applications
linkTitle: Previewing applications
description: The App Preview feature allows you to distribute different versions of your application to testers and stakeholders reviewing the application.
weight: 20
date: 2021-08-12
---

The App Preview functionality is available on the Dashboard. Previously, this functionality was only accessible from Axway Appcelerator Studio. The App Preview feature is available for Professional and Enterprise organizations and is accessible from the **Actions** menu for the selected app.

![Previwing an application](/Images/app_preview_01_new.png)

{{% alert title="Note" color="primary" %}}For first-time users of the App Preview feature, a description of the App Preview feature will be displayed when the **App Preview** option is selected. To navigate to the application upload flow, click the **Go to App Preview** button. To prevent the description of the App Preview feature being displayed again, select **Do not show this page again**.{{% /alert %}}

To access app preview:

1. Log into the [Amplify Platform](https://platform.axway.com/).
2. Click Dashboard from the _Services Links_ menu.
3. Select the app you want to preview.
4. Select the **App Preview** option from the **Actions** menu. For first-time users, click the **Go to App Preview** button to open the application upload navigation flow. The upload navigation flow will guide you through the steps to upload an application and make it available to the selected list of users. Applications can be uploaded as IPA or APK files.

![Upload IPA or APK files](/Images/app_preview_02_new.png)

Once an application is successfully uploaded, you can invite testers and stakeholders to test and review the application. The invited testers and stakeholders will be sent a notification email with invite information and a link to download the preview application to their mobile device for testing.

![Invite testers or stakeholders](/Images/app_preview_03_new.png)

Additionally, to upload additional versions of the application, click the **Upload New Version** button. Once the new version of the application is uploaded, you can choose to notify any current testers that a new build of the application is available. You can also invite additional testers by selecting the **Team** tab. The **TEAM** tab also lists the Invited Testers and Developers.

The **TEAM** tab also provides the anonymous application download link. If you want to send the application file to testers and stakeholders, you can download the application file using the anonymous download link.

![TEAM page](/Images/app_preview_05_new.png)

You can edit the Releases Notes by selecting the **INFO** tab.

The **SETTINGS** tab allows you to do daily or weekly monitoring of tester installations of the application by email notification. You can also anonymously check the status of the current build using the provided App Status URL.

The **BUILD HISTORY** tab provides a listing of the recent builds. If you select a previous build from the Recent Builds list, you can delete the build by clicking the **Delete Build** button or rollback to the selected build version by clicking the **Rollback to this version** button. You can also delete invited testers. If you select the latest build from the Recent Builds list, you can only delete invited testers.

The **Activity** panel tracks all application-related actions.
