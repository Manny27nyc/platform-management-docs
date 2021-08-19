---
title: Verifying domain ownership
linkTitle: Verifying domain ownership
description: 
weight: 20
date: 2021-08-12
---

{{% alert title="Note" color="primary" %}}Tasks in step 1a\* (add and verify a domain) or step 1b\* (configure an IdP) can be completed in any order.{{% /alert %}}

| Complete (**✓)** | Step | Task |
| --- | --- | --- |
| **✓** | 1a\* | ( **✓** ) [Adding a Domain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_domain/) and ( **✓** ) [Verify domain ownership](#) |
| \- | 1b\* | Configure an [OIDC](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_an_openid_connect_idp/) or [SAML v2.0](/docs/management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration/configuring_a_saml_v2.0_idp/) IdP |
| \- | 2 | [Confirm the association of an IdP to the domain](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/confirming_the_association_of_an_idp_to_the_domain/) |
| \- | 3 | [Enable the IdP configuration for all domain users](/docs/management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration/enabling_idp_configuration_for_all_domain_users/) |
| \- | 4 | (_Optional_) [Add a subdomain](/docs/management_guide/configuring_and_managing_identity_providers/managing_domains/adding_a_subdomain/) |

After a domain is added, domain ownership must be verified.

**To verify domain ownership**

1. After the TXT record has been configured for the domain, select **Check TXT Record** from the **Actions** (**...**) menu for the domain from the Email Domain table. The **Verify Domain Ownership** modal appears showing the domain to verify and the related TXT values for that domain. The **TXT Name** is not applicable if it is not supported by the provider.
    ![](/Images/domain_check_txt.png)
2. Click **Check TXT Record**.

    * _If the TXT record was not found_, a dialog appears with the TXT values for the domain and any found records. Make sure the above value is set with your DNS provider and try again.

        {{% alert title="Note" color="primary" %}}DNS changes can take up to 48 hours to propagate so you may need to check again later.{{% /alert %}}

        ![](/Images/domain_check_txt__no_matching_txt_record.png)

    * _If the TXT record was found_, a modal displays saying ownership has been confirmed and the DNS entry (TXT record) can be removed.

        ![](/Images/domain_verified.png)

        When the domain is confirmed as owned, the Email Domain table will be updated to show **Verified** in the **Owned** column, and **Pending** in the **Associated** column.
