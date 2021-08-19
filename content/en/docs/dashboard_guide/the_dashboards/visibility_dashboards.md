---
title: Amplify Visibility dashboards
linkTitle: Amplify Visibility dashboards
description: 
weight: 20
date: 2021-08-12
---

The Amplify Visibility dashboards provide a way to visualize the data that is ingested from various products. These dashboards are identified by Amplify Visibility site name on the page. The dashboards comprise API Dashboard and Search Audit. Each dashboard is customized to provide relevant details about the product's data. Depending on the product, you can use the dashboards to:

* Filter a large amount of data
* Display a subset of data using graphs
* Display a summary of information

{{% alert title="Note" color="primary" %}}If you do not have a valid role, an error page displays describing the situation and to contact your organization's administrator. You are presented with links to view your account or return to the Platform home.{{% /alert %}}

## Amplify Visibility Dashboard roles

Access to the Amplify Visibility dashboards is based on the Analytics and Auditor Visibility roles.

| Dashboard | Role |
| --- | --- |
| API Dashboard | Visibility Role: **Analytics Specialist** |
| Search Audit | Visibility Role: **Auditor** |

## Amplify Visibility Dashboard left navigation

The Amplify Visibility dashboards left navigation menu comprises the following:

{{% alert title="Note" color="primary" %}}The available menus on the Amplify Visibility Dashboard may vary based on your role and your organization's subscriptions. Click the **<** to collapse the menu or **\>** to expand the menu.{{% /alert %}}

![](/Images/visibility_menu_left_menu.png)

* API Dashboard
* Search Audit
* App Builder link
* API Observer link
* View Documentation link

## Viewing the API Dashboards

Click the **API Dashboard** menu to access the **API Report - Insights**, **API Report - Health and Usage**, and **API Report - API Traffic** Amplify Visibility dashboards. You must be assigned the Analytics Specialist Role to access the **API Dashboard** menu.

### Viewing the 10 most and least API performant values

The **API Report - Insights** dashboard shows a summary of the API metrics ingested inside the platform.
![](/Images/dashboard_insights.png)

The  **API Report - Insights** displays the API, the environment, and a consumers count (a distinct count of applications through which each API was called) for the following 10 performant values:

* **10 most performant APIs - by processing time** \- The results include the **API Name** with the **Min (ms)**, **Max (ms)**, and **Average (ms)** processing times
* **10 least performant APIs - by processing time** - The results include the **API Name** with the **Min (ms)**, **Max (ms)**, and **Average (ms)** processing times
* **10 most requested APIs - by number of calls** - The results include the **API Name** with the **Number of calls** and **Number of failures**
* **10 least requested APIs - by number of calls** - The results include the **API Name** with the **Number of calls** and **Number of failures**

Filter the data by using the pre-defined time intervals. The data results displayed are counted:

* **Today** - from the start of day until current date and time

* **This week** - from Monday until the current date and time
* **This month** - from the first of the month until the current date and time

Click the refresh button next to the filter to refresh the data displayed.

### Viewing the health and usage metrics for your APIs

The **API Report - Health and Usage** dashboard shows the API metrics ingested inside the platform.

![](/Images/dashboard_health_and_usage.png)

The  **API Report - Health and Usage** displays the following values for all APIs:

* API Name (by default, the values in the menu are sorted alphabetically by API name).
* Environment name
* Consumers count (a distinct count of applications through which each API was called)
* Min response time (ms)
* Max response time (ms)
* Average response time (ms)
* Number of calls
* Number of errors

Search, filter, and refresh the API data using the options located at the top of the dashboard:

* Type a keyword in the search field or complete a wildcard search (using an \*) to search for alternate spellings and variations on a root word.
* Filter the data by using the pre-defined time intervals. The data results displayed are counted:
    * **Today** - from the start of day until current date and time.

    * **This week** - from Monday until the current date and time.
    * **This month** - from the first of the month until the current date and time.
* Filter the data by the API name and environment.

You can do the following with the displayed results:

* Click the **Name** column to sort the data by the API name.
* Scroll down the page to dynamically load more data.
* Click the refresh button next to the filter to refresh the data displayed.

### Viewing the number of API calls in a given time period

The  **API Report - API Traffic** displays an evolution of the number of API calls to an application, in a given period.

![](/Images/dashboard_api_traffic.png)

* **Hours** \- Compares the number of calls per minute from the current hour with the data from 1 and 2 hours prior.
* **Days** -  Compares the number of calls per hour from the current day with the data from 1 and 2 days prior.
* **Weeks** \- Compares the number of calls per day from the current week with the data from 1 and 2 weeks prior.
* **Months** \- Compares the number of calls per day from the current month with the data from 1 and 2 months prior.
* **Years** - Compares the number of calls per month from the current year with the data from 1 and 2 years prior.

Filter the data by the application name, or you can select **All Applications** to get an overview. Click the refresh button next to the filter to refresh the data displayed.

## Viewing the Search Audit dashboard

Click the **Search Audit** menu to view the **Search Audit** Amplify Visibility dashboard. You must be assigned the Auditor Role to access the **Search Audit** menu. The **Search Audit** dashboard is used to display audit events showing sensitive data that is most relevant to an auditor.

![](/Images/dashboard_searchaudit.png)

The following event audit details are displayed:

* Event time
* Knowledge time
* Id
* User
* Capability name
* Operation
* Resource type
* Resource name
* Initial value
* New value
* IP address
* Comment

Filter and search the event data using the options located at the top of the dashboard.

* Filter the data by any of the fields displayed in the table.
* Narrow event search results by using the pre-defined time intervals or adding a custom time filter:
    * 5 minutes
    * 30 minutes
    * 1 hour
    * 6 hours
    * 1 day
    * 1 week
    * Custom time
* Click a column to sort the data by the **Event time** or **Knowledge time**

You can do the following with the displayed results:

* Scroll down the page to dynamically load more events
* Click the refresh button next to the filter to refresh the data displayed

## Accessing the  App Builder (Amplify Platform Dashboard)

Click the **App Builder ![](/Images/tab_app_builder.png)** menu to redirect you from the Visibility dashboards view into the Amplify Platform Dashboard (App Builder) dashboard. You will not see this menu if you are an Axway administrator. See [The Amplify Platform Dashboard](/docs/dashboard_guide/the_dashboards/platform_dashboard/) for details.

## Accessing the API Observer dashboard

Click the **API Observer**  ![](/Images/tab_apiobserver.png) menu to redirect you from the Visibility dashboards view into the [API Observer](https://docs.axway.com/bundle/axway-open-docs/page/docs/central/quickstart/index.html#monitor-api-traffic) dashboard. You must be assigned the Analytics Specialist Role to access the  API Observer menu. You will not see this menu if you are an Axway administrator.
