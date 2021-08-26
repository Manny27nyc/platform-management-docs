---
title: Role assignments
linkTitle: Role assignments
description: Administrators use the _Role Assignments_ section to define the platform roles and teams for a user when they log in to the platform the first time for a configured IdP. 
weight: 30
date: 2021-08-12
---

## Default role and team assignments

When new members of an organization sign in to the platform for this IdP, they are assigned these predefined roles and team assignments. Refer to the _Roles and features_ section in [Managing Organizations](/docs/management_guide/organizations/managing_organizations/) for details on the roles and capabilities available in the platform.

The _Role Assignments_ section defines:

* **Default Org Roles** - The _Default Org Roles_ section defines the org-level role a new user is assigned when they log in to the platform for the first time for the configured IdP. The default is the **Developer** role.
* **Default Teams** - The _Default Teams_ section defines any default teams a new user is assigned, and the roles they are given in the team or teams (if any) when they log in to the platform for the first time for the configured IdP. The default is the org's **Default** team with the **Developer** role.

## IdP managed role and team assignments

The _Advanced Role Management_ section allows an org administrator to manage platform role and team assignments from attributes provided by the IdP. An administrator can define any number of mappings for org roles and team assignments (if applicable). If a user has attributes that map to multiple default roles (platform or team roles), then the user is assigned the role that has the highest access level. Also the user is assigned all service or non-platform roles that are found.

Roles defined by these mappers are assigned to any matching user authenticating using the IdP. When their role assignment changes on their IdP, the users roles within the platform are automatically updated the next time the user logs in to the platform.

The _Advanced Role Management_ section is optional and hidden by default. The advanced mapping configuration could save time for larger organizations who have users on their IdP with defined roles and teams, but may not be applicable or advantageous to orgs that do not.

## Mapping roles and teams

Use the _Role Mapping_ section to map role assignments and the _Team Mapping_ section to map team assignments to the IdP provided attributes.

1. Click the **Actions** (**...**) menu on the _Identity Provider's_ detail page to display the _Role Mapping_ and _Team Mapping_ sections (these sections are hidden by default).
2. Click **\+ Role Mapping** or **+ Team Mapping**. A blank row appears.
3. Complete the following fields:
    * **Team** (applies to the team mapping section only) - Select the team to which the role mapping applies.
    * **Attribute Name** (for OIDC) or **Friendly Name** or **Attribute Name** (for SAML) - Copy the name of the property in the claim or assertion returned from the IdP during authentication from the Identity Provider configuration. For SAML IdPs, use either the Friendly Name or Attribute Name (not both) and the same value cannot be provided for Friendly and Attribute names across different mappers.
    * **Attribute Value** - Type the role or access defined for the user by the IdP. This value is case sensitive.
    * **Roles** - Select the role within the platform that will be assigned to the user when a user has a matching value for the defined attribute.

        ![Mapping roles and teams](/Images/advanced_roles_management__saml.png)

        {{% alert title="Note" color="primary" %}}The image is for SAML. The only difference between the OIDC and SAML configuration is that the OIDC requires the **Attribute Name** only and SAML requires the **Friendly Name** or **Attribute Name**.{{% /alert %}}

## Testing mapped attributes

After you have completed mapping roles and teams, you can test the configuration.

1. Click the **Actions** (**...**) menu from the Identity Provider page, and then select **Test Mapped Attributes**. A modal dialog displays.
2. Select a **User** and **Attribute**, and then click **Check User Attribute**.
3. Verify that the attribute mapper has stored the expected value on a user from the last time they logged into the platform.

    ![Test Mapped Attributes modal](/Images/test_mapped_attributes_filled.png)
