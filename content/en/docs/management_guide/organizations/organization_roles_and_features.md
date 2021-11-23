---
title: Organization roles and features
linkTitle: Organization roles and features
description: Users are assigned roles to grant them rights to the Platform.
weight: 20
date: 2021-08-12
---

This section is about organization user roles and features. Users can be assigned different roles that grant them the rights to the Platform associated with their assigned roles and capabilities. A user always needs to be assigned one platform role and can be assigned zero, one, or more of the other roles.

## Roles and capabilities

The following table shows the available roles and capabilities.

| Role | Short Description | Platform | App Dev | App Integration | Central | Catalog | ARS | MBaaS | Teams | Audit | Monitor | Flow Manager |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Platform Roles** |
| Administrator | Use for platform admin tasks | X | X | X | X | X |  |  | X |  |  |  |
| Developer | Use for development and integration projects | X | X | X | X | X | X | X | X |  |  |  |
| Insight | Use for business oversight | X | X |  |  |  |  |  |  |  |  |  |
| Consumer | Use for the consumption of services from the catalog |  |  |  |  | X |  |  |  |  |  |  |
| Runtime Services Admin | Use for all-encompassing access to Runtime Services. **Runtime Services Roles** (**Runtime Services is deprecated and will be discontinued effective September 1, 2022.)** |  |  |  |  |  | X | X |  |  |  |  |
| **Central Roles** |
| Central Admin | Use for all-encompassing access to Central |  |  |  | X | X |  |  |  |  |  |  |
| **Flow Manager Roles** |
| Access Manager | Use for full management of services, organizations, identity stores and users. Allows viewing and editing roles and privileges. |  |  |  |  |  |  |  |  |  |  | X |
| Integration Specialist | Use for management of applications, application groups, partners, flow patterns, templates, subscriptions, flows and transfers. Grants viewing of products, product configurations and partners. |  |  |  |  |  |  |  |  |  |  | X |
| IT Admin | Use for management of Flow Manager configurations, organizations, identity stores and users. Grants viewing of alerts management.<br /><br />Role enables access rights to user audit. |  |  |  |  |  |  |  |  |  |  | X |
| Products Admin | Use for full management of products, product configurations, policies, product groups. Grants viewing of user audit events. |  |  |  |  |  |  |  |  |  |  | X |
| Special Operations Admin | Use for forced deletion of templates and subscriptions. |  |  |  |  |  |  |  |  |  |  | X |
| Subscription Approver | Use to view published templates, approve subscriptions, and reject subscriptions. Grants viewing of partners, applications, and products. For business user for subscription approvals. |  |  |  |  |  |  |  |  |  |  | X |
| Subscription Specialist | Use to manage subscriptions |  |  |  |  |  |  |  |  |  |  | X |
| Template Publisher | Use to view, publish, and edit templates. For business user for template publishing. |  |  |  |  |  |  |  |  |  |  | X |
| Transfer CFT Admin | Use for full management of Transfer CFT |  |  |  |  |  |  |  |  |  |  | X |
| **Visibility Roles** |
| Auditor | Use for viewing auditing events of the platform |  |  |  |  |  |  |  |  | X |  |  |
| Analytics Specialist | Use for viewing logs |  |  |  |  |  |  |  |  |  | X |  |

## Team roles

Users also have a role in each team they belong to.

| Team Role | Short Description |
| --- | --- |
| Administrator | Use this role to manage the members of the team |
| Consumer | Use this role to view and consume assets in the Unified Catalog |
| Developer | Use this role to manage assets in Amplify Central and the Unified Catalog |
| Catalog Manager | Use this role to manage Unified Catalog items and approve subscriptions |

## Team roles and capabilities

The following table shows the available team roles and capabilities. The Central administrator role has access to all team capabilities.

Capabilities | Catalog Manager | Developer | Consumer | Team Admin
---------|---------|---------|----------|---------|
 **Unified Catalog** |  |  |  |  |
 Create catalog items | x (my team) | x (my team) | | |
 View catalog items | x (my team) | x (my team) | x |  |
 Delete catalog items | x (my team) |  |  |  |
 Share a catalog item | x (my team) |  | x |  |
 Edit a catalog item | x (my team) | x (my team) |  |  |
 Create my subscriptions | x (my team) | x (my team) | x (my team) |  |
 View my subscriptions | x (my team) | x (my team) | x (my team) |  |
 Update my subscriptions | x (my team) | x (my team) | x (my team) |  |
 View consumer's subscriptions | x (my team assets) |  |  |  |
 Delete consumer's subscriptions | x (my team assets) |  |  |  |
 Approve/reject consumer's subscriptions | x (my team assets) |  |  |  |
 Delete my subscriptions | x (my team) | x (my team) | x (my team) |  |
 **Environments** |  |  |  |  |
 Create environments |  |  |  |  |
 View environments |  |  |  |  |
 Delete environments |  |  |  |  |
 Update environments |  |  |  |  |
 **Categories** | *Team level/Enterprise* | *Team level/Enterprise* | *Enterprise level* | *Team level/Enterprise* |
 Create a category |  |  |  |  |
 View category |  |  |  |  |
 Delete a category |  |  |  |  |
 Update a category |  |  |  |  |
 Assign to a category |  |  |  |  |
 **Applications** |  |  |  |  |
 Create application | x |  |  |  |
 View application | x |  |  |  |
 Delete application | x |  |  |  |
 Update application | x |  |  |  |
 **Observer** |  |  |  |  |
 View transactions for my subscriptions | x | x | x | x |
 View transactions for my assets | x | x | x | x |
 **Teams & Members (Platform)** |  |  |  |  |
 Create a team |  |  |  |  |
 View teams | (x) my teams | (x) my teams |  | x (my team) |
 Update team |  |  |  | x (my team) |
 Delete team |  |  |  |  |