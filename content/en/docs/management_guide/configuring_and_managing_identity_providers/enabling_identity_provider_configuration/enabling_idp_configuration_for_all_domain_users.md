---
title: Enabling IdP configuration for all domain users
linkTitle: Enabling IdP configuration for all domain users
description: 
weight: 20
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Tasks in step 1a\* (add and verify a domain) or step 1b\* (configure an IdP) can be completed in any order.{{% /alert %}}

| Complete (**✓)** | Step | Task |
| --- | --- | --- |
| **✓** | 1a\* | ( **✓** ) [Add a domain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_domain/) and ( **✓** ) [Verify domain ownership](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/verifying_domain_ownership/) |
| **✓** | 1b\* | Configure an [OIDC](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_an_openid_connect_idp/) or [SAML v2.0](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_a_saml_v2.0_idp/) IdP |
| **✓** | 2 | [Confirm the association of an IdP to the domain](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain/) |
| **✓** | 3 | [Enable the IdP configuration for all domain users](#) |
| \- | 4 | (_Optional_) [Add a subdomain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_subdomain/) |

After confirming the association of your IdP to the domain, you can enable the configuration for all users on the domain.

1. For the domain you want to confirm, select **Enable** from the **Actions** (**...**) menu from the **Email Domain** table.

    ![](/Images/domain_enable_dropdown.png)
2. One of the following modals dialogs displays:
    * _If there are other users on the domain that are in the Platform_, but not in the org, a **Consolidate Users** modal dialog displays. The modal explains that all users must be in the org and displays a table showing the missing users. Click **Add Users** to the add the users to the org and the default team with the Developer role. These users' roles and team membership can be managed on the organization's Members page.

        ![](/Images/domain_consolidate_users.png)
    * _If all of the users on the confirmed domain are in the org_, then the **Enable Identity Provider** modal dialog displays. The modal explains that all steps have been completed to enable the IdP for all users on the domain. Click **Enable**.

        ![](/Images/domain_enable.png)

    After the IdP is enabled for all users on the domain, the following occurs:

    * The users on the domain are signed out of the Platform and must use their IdP to authenticate with the Platform.
    * The Email Domain table displays **Confirmed** in the **Confirmed** column.
![](/Images/domain_confirmed_table.png)
