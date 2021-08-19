---
title: Deleting an Identity Provider configuration
linkTitle: Deleting an Identity Provider configuration
description: 
weight: 40
date: 2021-08-12
---

The organization administrator can delete an Identity Provider by selecting **Delete** from the **Actions** (...) menu from the Identity Provider's detail page. Deleting an Identity Provider is a permanent and irreversible action.

When an organization administrator initiates deleting an Identify Provider, a confirmation modal is presented. The organization administrator must type their email address to confirm they understand that this action will permanently delete the configuration and all users on the associated domain(s) will revert to using the Amplify Platform for authentication.

![](/Images/360_delete_idp.png)

Any domains associated to the IdP being deleted will revert to **Owned** and will not need to re-establish ownership if using them for a new IdP after.
