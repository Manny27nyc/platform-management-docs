---
title: Organization concepts
linkTitle: Organization concepts
description: Concepts about organizations such as subscriptions, users and roles, service accounts, and teams. 
weight: 10
date: 2021-08-12
---

This section details which capabilities an organization can use, which assets a user can consume or what actions a user can take available from the **Organization** tab. To access the **Organization** tab, sign in to the [Amplify Platform](https://platform.axway.com/) and select **Organization** from the _User_ dropdown menu.

## Organizations

Let's start from the beginning and look at what an organization is in the Amplify Platform. An organization can be seen as a single instance of the platform. An organization is uniquely identified by an Organization Identifier (Org ID). As a best practice, an organization is a company, and the teams concept (see further below) is used to have a clear separation of assets between working groups such as departments, projects, and individual users.

![Organization details page](/Images/organization_org_id.png)

## Subscriptions

An organization is linked to one or more subscriptions. Subscriptions define the platform capabilities that the organization is allowed to use. For example, the test organization has an Enterprise subscription to Application Development and a terminated trial subscription to Application Integration.

![Subscriptions page](/Images/organization_subscriptions.png)

When you sign up for a trial of the platform, then an organization is automatically created and you become the administrator that manages the organization with a default list of subscriptions. When a customer purchases our platform capabilities, then an Axway administrator creates an organization, assigns the correct subscriptions, and makes a user of the customer an administrator of the platform.

## Child organizations

An organization can have child organizations. These child organizations are allocated resources from the parent organization. An administrator of the parent organization can create child organizations and manage both the parent and child organizations.

## Multiple organizations

A user (referred to as a member in the platform) can belong to multiple organizations. Select **Switch Org** from the User & Org menu to see which organizations you belong to and to switch to a different organization.

![Switch organization menu](/Images/organization_switch_org.png)

## Organization users and roles

Each organization has one or more users. At least one user needs to be an administrator. If a new organization is created, then the first user becomes an Administrator. An administrator can change the roles of the users, with the restriction that there always needs to be at least one user that has the Administrator role. The test organization currently contains five users.

![Users page](/Images/dashboard_users.png)

We can distinguish the following types of roles in the Amplify Platform:

* **Platform Roles** - a role that applies to all the capabilities of the platform and is mutually exclusive. You can only have 1 platform role, such as Administrator. This role can be different per organization to which you are a member.
* **Service Roles** - roles that are specific to a capability such as Amplify Central or Flow Manager. These roles are not mutually exclusive. A member can for example have one role in Amplify Central and three roles in Flow Manager for a specific organization.
* **Team Roles** - roles that define what a user is allowed to do with the assets of a team. Part of the team roles are mutually exclusive and part of them are not.

The roles that you have in a specific organization can be seen in the _Orgs & Roles_ page. The test organization shows a user belongs to 19 organizations and has specific roles per organization.

![Orgs & Roles page](/Images/organization_orgs_roles.png)

## Service accounts

A service account is a technical account that can be used by an application (not a user) to authenticate against different platform capabilities.

Similar to users, service accounts can be linked to roles and can be assigned to one or more teams. A service account can have any role except for the platform roles.

The authentication mechanism for a service account is different than how a user is authenticated. A different authentication method is needed because service accounts can be used in headless operations. Service accounts authenticate with a certificate or a secret.

You must have the Platform Administrator role to manage service accounts. With the Platform Developer role you are able to view the service accounts and with the Platform Consumer role you have no access to the service accounts.

## Teams

Users can belong to one or more teams or not belong to any teams at all. A team is a logical grouping of users and assets. The idea is to enable you to create teams so that certain groups of people can work together on and use the same assets. A team belongs to one organization and the members of a team also need to be a member of that organization. The same user can belong to multiple teams and can also have a different role in each team. Each organization always has a default team.

![Teams page](/Images/organization_teams.png)

When creating items such as API Proxies in Amplify Central or Unified Catalog Assets one team always needs to be chosen as an owner. Only members of the owning team can make changes or remove the items. The following is an example showing the owning team of Unified Catalog items.

![Unified Catalog team owners](/Images/teams_owning_team.png)

Unified Catalog items can be shared with other teams. The teams need to be belong to the same organization. The other teams can then discover and consume those items, but they cannot make changes to them.

![Sharing Unified Catalog items](/Images/teams_share_unified_catalog_items.png)
