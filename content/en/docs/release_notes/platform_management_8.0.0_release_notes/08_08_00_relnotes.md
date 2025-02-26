---
title: Platform Management 8.8.0 release notes
linkTitle: Platform Management 8.8.0 release notes
description: New features, improvements, and bug fixes for the release.
weight: 120
date: 2021-08-12
Hide_readingtime: true
---

## Platform Management 8.8.0 - 22 July 2021

Platform Management 8.8.0 is a minor release which includes a new feature, several improvements, and a bug fix.

## New features

* Introduced Service Accounts in Platform organization and user management.  Service Accounts may be created and assigned Service Roles and as members of your organization's teams. Please see the [managing service accounts documentation](/docs/management_guide/organizations/managing_organizations/#managing-service-accounts) for more information.

## Improvements

* Added new service links and tasks on _Platform Home_ for managing your organization and its users and visiting **Repository** and **Support**. For organizations only subscribed to non-Amplify offerings, Platform Home is now available to access _Getting Started_ content and these services.
* Simplified signup and account activation process. Signup now requests first and last name, password, organization name, and region. Activation is now a one-click step by following the link in the "Activate your account" email. For users signing up from API Management marketing resources, **API Management Platform** and **Integration Builder** trials will be automatically subscribed once activated.
* Improved layout and consistency of authentication views.

Fixed issues

* Fixed an issue where updating organization _Users_ and _Teams_ views with members assigned roles that are no longer available may not be able to update a user or team. This issue arises due to expiry of subscription and loss of entitled services for assigned Service Roles. A banner is now displayed at the top of these views indicating which roles are no longer available and provides a means to search for members by role in order to correct the assignment.
