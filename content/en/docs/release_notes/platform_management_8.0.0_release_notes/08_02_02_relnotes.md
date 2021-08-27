---
title: Platform Management 8.2.2 release notes
linkTitle: Platform Management 8.2.2 release notes
description: New features, improvements, and bug fixes for the release.
weight: 216
date: 2021-08-12
Hide_readingtime: true
---

## Platform Management 8.2.2 - 15 October 2020

Platform Management 8.2.2 is a patch release, which includes a new feature and several bug fixes.

{{% alert title="Note" color="primary" %}}With this release, support for Internet Explorer 11 has been officially sunset.{{% /alert %}}

## New features

* Added two settings to the user _Account Settings_ view. The "Inactivity Logout" setting lets users select how long to allow browser sessions to be inactive before signing the user out. This default setting is 30 minutes. This behavior may also be disabled. The "Restore Page on next Login" setting lets users choose whether to be redirected to the page previously viewed once signed back in after being signed out due to inactivity. This setting is disabled by default (do not restore previous page on next login).

## Fixed issues

* Fixed an issue where **Runtime Services** app names may not appear in chart and table data saved on analytics views. Additionally, fixed an issue where some columns for **Mobile Backend Services** datasources may be empty in saved table data.
* Fixed an issue where starting a free trial from the _Explore More Products & Services_ view may not redirect users to the _Platform Home_ view showing the newly available capabilities.
* Fixed an issue where clicking **Amplify Platform** in the page header while on the _Signup_ view may cause an error.
