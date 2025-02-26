---
title: Adding a domain
linkTitle: Adding a domain
description: How to add a domain for Identity Providers. 
weight: 10
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Tasks in step 1a\* (add and verify a domain) or step 1b\* (configure an IdP) can be completed in any order.{{% /alert %}}

| Complete (**✓)** | Step | Task |
| --- | --- | --- |
| \- | 1a\* | ( **✓** ) [Add a domain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_domain/) and ( - ) [Verify domain ownership](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/verifying_domain_ownership/) |
| \- | 1b\* | Configure an [OIDC](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_an_openid_connect_idp/) or [SAML v2.0](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_a_saml_v2.0_idp/) IdP |
| \- | 2 | [Confirm the association of an IdP to the domain](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain/) |
| \- | 3 | [Enable the IdP configuration for all domain users](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/enabling_idp_configuration_for_all_domain_users/) |
| \- | 4 | (_Optional_) [Add a subdomain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_subdomain/) |

At least one email domain used by the Identity Provider must be added to the org and domain ownership must be confirmed by a TXT record set on the domain's DNS that matches one that is displayed in the Platform.

We recommend that you check your DNS provider's documentation about specific configuration.

## To add a domain

1. From the _Identity Provider_ page click the **\+ Email Domain**.

    The **Add Domain** modal dialog appears.

    ![Add Domain modal](/Images/domain_add.png)
2. Using the **TXT Name** (if supported by the DNS provider), **TXT Value**, and **TTL** values displayed configure a TXT record with your DNS provider for the domain being added. Make sure to associate an email domain that is controlled by your Identify Provider and not by Axway.

    The screen shots represent adding the domain called `example.com` for users, such as `john.smith@example.com`. Replace `example.com` with a domain that is in your DNS.
3. Enter the domain in the modal, and then click **Add**. After adding the domain, it will appear in the Email Domain table as **Pending** in the **Owned** column.
    ![Identity Provider pending status](/Images/domain_check_txt_dropdown.png)
