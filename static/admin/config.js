/**
 * Docs page collections require the following minimal dataset:
 *   name: [string] used in routes, ie.: /admin/collections/:slug/edit
 *   label: [string] used in CMS UI left nav
 *   label_singular: [string] used in CMS UI, ie.: 'New Post'
 *   description: [string] used in CMS UI
 */
const docsDefaults = (contentDirectory, imageDirectory) => ({
  folder: `content/en/docs/${contentDirectory}`,
  media_folder: `{{media_folder}}/${imageDirectory}`,
  public_folder: `{{public_folder}}/${imageDirectory}`,
  preview_path: `docs/${contentDirectory}/{{filename}}/`,
  create: true, // Allow users to create new documents in this collection
  delete: false, // Allow users to delete documents in this collection
  format: 'json-frontmatter', // Specify frontmatter for YAML or json-frontmatter for JSON
  fields: [
    { name: 'title', label: 'Title', widget: 'string' },
    { name: 'linkTitle', widget: 'hidden', required: false },
    { name: 'no_list', widget: 'hidden', required: false },
    { name: 'simple_list', widget: 'hidden', required: false },
    { name: 'draft', widget: 'hidden', required: false },
    { name: 'weight', widget: 'hidden', required: false },
    { name: 'date', widget: 'hidden', required: false },
    { name: 'description', label: 'Summary', widget: 'text', required: false },
    { name: 'body', label: 'Body', widget: 'markdown' },
  ],
})

/**
 * Post collections require the same minimal dataset as docs pages.
 */
const postDefaults = {
  create: true,
  delete: false,
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Author', name: 'author', widget: 'string' },
    { label: 'Publish Date', name: 'date', widget: 'datetime' },
    { label: 'Summary', name: 'description', widget: 'text' },
    { label: 'Image', name: 'image', widget: 'image', required: false },
    { label: 'Body', name: 'body', widget: 'markdown' },
  ],
}

/**
 * Add new collections here.
 */
 const collections = [{
  ...docsDefaults('', 'docbook/images/general'), // content directory, image directory
  name: 'docs',
  label: 'Documentation',
  description: 'Top level pages in Amplify Platform Management documentation.',
  format: 'frontmatter',
  create: false,
}, {
  ...docsDefaults('getting_started_with_amplify_platform_management', 'getting_started_with_amplify_platform_management'),
  name: 'getting_started_with_amplify_platform_management',
  label: 'Getting started with Amplify Platform Management',
  label_singular: 'page in Getting started with Amplify Platform Management section',
  description: 'All pages relating to Getting started with Amplify Platform Management section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('management_guide', 'management_guide'),
  name: 'management_guide',
  label: 'Amplify Platform Management Guide',
  label_singular: 'page in Amplify Platform Management Guide section',
  description: 'All pages relating to Amplify Platform Management Guide section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('management_guide/organizations', 'organizations'),
  name: 'organizations',
  label: 'Organizations',
  label_singular: 'page in Organizations section',
  description: 'All pages relating to Organizations section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('management_guide/configuring_and_managing_identity_providers', 'configuring_and_managing_identity_providers'),
  name: 'configuring_and_managing_identity_providers',
  label: 'Configuring and managing Identity Providers',
  label_singular: 'page in Configuring and managing Identify Providers section',
  description: 'All pages relating to Configuring and managing Identify Providers section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('management_guide/configuring_and_managing_identity_providers/managing_domains', 'managing_domains'),
  name: 'managing_domains',
  label: 'Managing domains',
  label_singular: 'page in Managing domains section',
  description: 'All pages relating to Managing domains section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('management_guide/configuring_and_managing_identity_providers/managing_identity_provider_configuration', 'managing_identity_provider_configuration'),
  name: 'managing_identity_provider_configuration',
  label: 'Managing Identity Provider configuration',
  label_singular: 'page in Managing Identity Provider configuration section',
  description: 'All pages relating to Managing Identity Provider configuration section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('management_guide/configuring_and_managing_identity_providers/enabling_identity_provider_configuration', 'enabling_identity_provider_configuration'),
  name: 'enabling_identity_provider_configuration',
  label: 'Enabling Identity Provider configuration',
  label_singular: 'page in Enabling Identity Provider configuration section',
  description: 'All pages relating to Enabling Identity Provider configuration section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('dashboard_guide', 'dashboard_guide'),
  name: 'dashboard_guide',
  label: 'Amplify Platform Dashboard Guide',
  label_singular: 'page in Amplify Platform Dashboard Guide section',
  description: 'All pages relating to Amplify Platform Dashboard Guide section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('dashboard_guide/the_dashboards', 'dashboard_guide'),
  name: 'the_dashboards',
  label: 'The dashboards',
  label_singular: 'page in The dashboards section',
  description: 'All pages relating to The dashboards section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('dashboard_guide/managing_applications', 'managing_applications'),
  name: 'managing_applications',
  label: 'Managing applications',
  label_singular: 'page in Managing applications section',
  description: 'All pages relating to Managing applications section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('dashboard_guide/managing_applications/managing_client_applications', 'managing_client_applications'),
  name: 'managing_client_applications',
  label: 'Managing client applications',
  label_singular: 'page in Managing client applications section',
  description: 'All pages relating to Managing client applications section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('dashboard_guide/managing_applications/managing_mobile_backend_services_datasources', 'managing_mobile_backend_services_datasources'),
  name: 'managing_mobile_backend_services_datasources',
  label: 'Managing Mobile Backend Services datasources',
  label_singular: 'page in Managing Mobile Backend Services datasources section',
  description: 'All pages relating to Managing Mobile Backend Services datasources section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('dashboard_guide/managing_applications/managing_mobile_backend_services_datasources/managing_mobile_backend_services_data_objects', 'managing_mobile_backend_services_data_objects'),
  name: 'managing_mobile_backend_services_data_objects',
  label: 'Managing Mobile Backend Services data objects',
  label_singular: 'page in Managing Mobile Backend Services data objects section',
  description: 'All pages relating to Managing Mobile Backend Services data objects section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('release_notes', 'release_notes'),
  name: 'release_notes',
  label: 'Release notes',
  label_singular: 'page in Release notes section',
  description: 'All pages relating to Release notes section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('release_notes/platform_management_8.0.0_release_notes', 'platform_management_8.0.0_release_notes'),
  name: 'platform_management_8.0.0_release_notes',
  label: 'Platform Management later than 8.0.0 release notes',
  label_singular: 'page in Platform Management later than 8.0.0 release notes section',
  description: 'All pages relating to Platform Management later than 8.0.0 release notes section.',
  format: 'frontmatter',
}, {
  ...docsDefaults('release_notes/platform_management_7.0.0_-_7.4.1_release_notes', 'platform_management_7.0.0_-_7.4.1_release_notes'),
  name: 'platform_management_7.0.0_-_7.4.1_release_notes',
  label: 'Platform Management 7.0.0 - 7.4.1 release notes',
  label_singular: 'page in Platform Management 7.0.0 - 7.4.1 release notes section',
  description: 'All pages relating to Platform Management 7.0.0 - 7.4.1 release notes section.',
  format: 'frontmatter',
},];

const cms_branch = window.location.hostname.includes('develop') ? 'develop' : 'master'; // Additional config for a develop branch and develop site

const config = {
  backend: {
    name: 'github',
    branch: cms_branch,
    repo: 'Axway/platform-management-docs', // Path to your GitHub repository.
    open_authoring: true,
  },
  publish_mode: 'editorial_workflow',
  media_folder: '/static/Images', // Media files will be stored in the repo under static/Images
  public_folder: '/Images', // The src attribute for uploaded media will begin with /Images
  site_url: 'https://platform.management.netlify.app/', // URL to netlify site
  collections,
};

// Make the config object available on the global scope for processing by
// subsequent scripts.Don't rename this to `CMS_CONFIG` - it will cause the
// config to be loaded without proper processing.
window.CMS_CONFIGURATION = config;

CMS.init({ config })
