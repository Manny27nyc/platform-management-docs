---
title: Viewing metrics
linkTitle: Viewing metrics
description: View metrics relevant to a product line to which your organization is subscribed.
weight: 50
date: 2021-08-12
---

## Overview

To access the Overview view, select the **Overview** menu on the Amplify Platform Dashboard view. The Overview view displays key metric information relevant to a product line to which your organization is subscribed.

Metrics are available for the following product lines:

{{% alert title="Note" color="primary" %}}Mobile Backend Services and Runtime Services are deprecated and will be discontinued effective September 1, 2022.{{% /alert %}}

* API Management
* Application Development
* Mobile Backend Services
* Runtime Services

View metrics by doing the following:

1. Use the product line selector menu to view metrics for a different product line.
2. Use the metrics selector to view details of another metric for that product line.
3. Use the time interval selector to filter the displayed metrics by time. For information on selecting a time interval or setting a custom time interval, refer to the **Data Filter** section of [Viewing Analytics](/docs/dashboard_guide/managing_applications/viewing_analytics/).
4. Use the environment selector to filter the displayed metrics by environment.
5. Select a metric to open a details page for that metric.
    ![](/Images/all_metrics.png)

View metrics details by doing the following:

1. Use the metrics selector to view details of another metric for that product line. Select Overview to return to the Overview view where you use the product line selector to change metrics to another product.
2. Use the time interval selector to filter the displayed metrics by time. For information on selecting a time interval or setting a custom time interval, refer to the **Data Filter** section of [Viewing Analytics](/docs/dashboard_guide/managing_applications/viewing_analytics/).
3. Use the environment selector to filter the displayed metrics by environment.
4. Toggle on and off displayed metrics information in the chart by clicking the item in the table legend.
5. Refresh the data by clicking the **Actions** (**...**) menu and selecting Refresh.
6. View the metrics data by clicking the **Actions** (**...**) menu and then selecting View as Custom Query. Refer to [Creating Custom Queries](/docs/dashboard_guide/managing_applications/creating_custom_queries/).
7. Download metrics for use in other programs by clicking the **Actions** (**...**) menu and selecting an option from the Download section. For details on downloading metrics, refer to the **Download Data** section of [Viewing Analytics](/docs/dashboard_guide/managing_applications/viewing_analytics/).
8. Click a category to show the metrics by that category. This does not apply to API Management.
9. Select **Scale to the current page**  to scale the metrics display to the current page.
    ![](/Images/metrics_details.png)

## Common metrics

On the Overview view, the total number of organization teams and users are displayed for all product lines. Click the [teams](/docs/management_guide/organizations/managing_organizations/#managing-teams) or [users](/docs/management_guide/organizations/managing_organizations/#managing-users) category to view the details.

## API Management metrics

On the Overview page, select **API Management** from the product line selector.

The API Management metrics comprise:

* **Transactions** – Total number of API transactions by type during the provided time range.
* **Discovered Assets** – Total number of Central API services during the provided time range.
* **Catalog Assets** – Total number of Catalog Assets events by event type during the provided time range.
* **Catalog Asset Subscriptions** – Total number of Catalog Asset subscriptions during the provided time range.
* **Connected environments** – Total number of Central Environment events by event type during the provided time range.

## Application Development metrics

On the Overview page, select **Application Development** from the product line selector.

The Application Development metrics comprise the following metrics overview and its details when selected:

* **Active Sessions** – Number of users in your applications at the moment.
* **Sessions** – Total number of user sessions for your applications during the provided time range. Filter metric details by application, platform, or geographic location for the selected time interval and environment.
* **Average Session Length** – Average length of use of your applications during the provided time range. Filter metric details by application or platform for the selected time interval and environment.
* **Application Installs** – Total number of installs of your applications during the provided time range. Filter metric details by application, platform, or geographic location for the selected time interval and environment.
* **Application Updates** - Total updates of your applications during the provided time range. Filter metric details by application, platform, or geographic location for the selected time interval and environment.
* **Average Per-minute Unique Devices** – Average per-minute unique devices using your applications during the provided time range. Filter metric details by the time interval and environment.
* **Crashes** - Displays detailed crash information metrics. Filter metric details by error, application, or platform for the selected time interval, environments, crash types (Crashes or Errors) and crash status (All Crashes, Pending, Resolved, or Unresolved).

    Use the Search to filter results by username.

    ![](/Images/crashes.png)

* **Events** – Total number of events generated by your applications during the provided time range. Filter metric details for event occurrences by application or event name for the selected time interval and environment.
* **Apps** – Total number of all applications in the organization.

## Mobile Backend Services metrics

On the Overview page, select **Mobile Backend Services** from the product line selector.

The Mobile Backend Services metrics comprise:

* **Events** – Total number of events generated by your applications during the provided time range. Filter event occurrences by application or event name for the selected time interval and environment.
* **Mobile Backend Services Requests** – The total number of Mobile Backend Services requests made during the provided time range. Filter detailed metrics for the Mobile Backend Services requests by application or application type for the selected time interval and environment.
* **Push Notifications** – Total number of push notifications sent during the provided time range. View detailed metrics for the selected time and environment.
* **Mobile Backend Services Datasources** – The total number of standalone Mobile Backend Services datasources (not created with a client application) in the organization.

## Runtime Services metrics

On the Overview page, select **Runtime Services** from the product line selector.

The Runtime Services metrics comprise:

* **Events** – Total number of events generated by your applications during the provided time range. Filter event occurrences by application or event name for the selected time interval and environment.
* **Runtime Services Requests** – Total number of Runtime Services requests made during the provided time range. Metrics details are for Runtime Services requests for the selected time interval.
* **Runtime Service Apps** – Total number of Runtime Service apps in the organization.
