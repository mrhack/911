function create_menu(e){var t=e=="null"?"":e;document.write('<table cellpadding="0" cellspaceing="0" border="0" style="width:98%"><tr><td class="td" valign="top"><ul><li><a href="'+t+'index.html">User Guide Home</a></li>'+'<li><a href="'+t+'toc.html">Table of Contents Page</a></li>'+"</ul>"+"<h3>Basic Info</h3>"+"<ul>"+'<li><a href="'+t+'general/requirements.html">Server Requirements</a></li>'+'<li><a href="'+t+'license.html">License Agreement</a></li>'+'<li><a href="'+t+'changelog.html">Change Log</a></li>'+'<li><a href="'+t+'general/credits.html">Credits</a></li>'+"</ul>"+"<h3>Installation</h3>"+"<ul>"+'<li><a href="'+t+'installation/downloads.html">Downloading CodeIgniter</a></li>'+'<li><a href="'+t+'installation/index.html">Installation Instructions</a></li>'+'<li><a href="'+t+'installation/upgrading.html">Upgrading from a Previous Version</a></li>'+'<li><a href="'+t+'installation/troubleshooting.html">Troubleshooting</a></li>'+"</ul>"+"<h3>Introduction</h3>"+"<ul>"+'<li><a href="'+t+'overview/getting_started.html">Getting Started</a></li>'+'<li><a href="'+t+'overview/at_a_glance.html">CodeIgniter at a Glance</a></li>'+'<li><a href="'+t+'overview/cheatsheets.html">CodeIgniter Cheatsheets</a></li>'+'<li><a href="'+t+'overview/features.html">Supported Features</a></li>'+'<li><a href="'+t+'overview/appflow.html">Application Flow Chart</a></li>'+'<li><a href="'+t+'overview/mvc.html">Model-View-Controller</a></li>'+'<li><a href="'+t+'overview/goals.html">Architectural Goals</a></li>'+"</ul>"+"<h3>Tutorial</h3>"+"<ul>"+'<li><a href="'+t+'tutorial/index.html">Introduction</a></li>'+'<li><a href="'+t+'tutorial/static_pages.html">Static pages</a></li>'+'<li><a href="'+t+'tutorial/news_section.html">News section</a></li>'+'<li><a href="'+t+'tutorial/create_news_items.html">Create news items</a></li>'+'<li><a href="'+t+'tutorial/conclusion.html">Conclusion</a></li>'+"</ul>"+'</td><td class="td_sep" valign="top">'+"<h3>General Topics</h3>"+"<ul>"+'<li><a href="'+t+'general/urls.html">CodeIgniter URLs</a></li>'+'<li><a href="'+t+'general/controllers.html">Controllers</a></li>'+'<li><a href="'+t+'general/reserved_names.html">Reserved Names</a></li>'+'<li><a href="'+t+'general/views.html">Views</a></li>'+'<li><a href="'+t+'general/models.html">Models</a></li>'+'<li><a href="'+t+'general/helpers.html">Helpers</a></li>'+'<li><a href="'+t+'general/libraries.html">Using CodeIgniter Libraries</a></li>'+'<li><a href="'+t+'general/creating_libraries.html">Creating Your Own Libraries</a></li>'+'<li><a href="'+t+'general/drivers.html">Using CodeIgniter Drivers</a></li>'+'<li><a href="'+t+'general/creating_drivers.html">Creating Your Own Drivers</a></li>'+'<li><a href="'+t+'general/core_classes.html">Creating Core Classes</a></li>'+'<li><a href="'+t+'general/hooks.html">Hooks - Extending the Core</a></li>'+'<li><a href="'+t+'general/autoloader.html">Auto-loading Resources</a></li>'+'<li><a href="'+t+'general/common_functions.html">Common Functions</a></li>'+'<li><a href="'+t+'general/routing.html">URI Routing</a></li>'+'<li><a href="'+t+'general/errors.html">Error Handling</a></li>'+'<li><a href="'+t+'general/caching.html">Caching</a></li>'+'<li><a href="'+t+'general/profiling.html">Profiling Your Application</a></li>'+'<li><a href="'+t+'general/cli.html">Running via the CLI</a></li>'+'<li><a href="'+t+'general/managing_apps.html">Managing Applications</a></li>'+'<li><a href="'+t+'general/environments.html">Handling Multiple Environments</a></li>'+'<li><a href="'+t+'general/alternative_php.html">Alternative PHP Syntax</a></li>'+'<li><a href="'+t+'general/security.html">Security</a></li>'+'<li><a href="'+t+'general/styleguide.html">PHP Style Guide</a></li>'+'<li><a href="'+t+'doc_style/index.html">Writing Documentation</a></li>'+"</ul>"+"<h3>Additional Resources</h3>"+"<ul>"+'<li><a href="http://codeigniter.com/forums/">Community Forums</a></li>'+'<li><a href="http://codeigniter.com/wiki/">Community Wiki</a></li>'+"</ul>"+'</td><td class="td_sep" valign="top">'+"<h3>Class Reference</h3>"+"<ul>"+'<li><a href="'+t+'libraries/benchmark.html">Benchmarking Class</a></li>'+'<li><a href="'+t+'libraries/calendar.html">Calendar Class</a></li>'+'<li><a href="'+t+'libraries/cart.html">Cart Class</a></li>'+'<li><a href="'+t+'libraries/config.html">Config Class</a></li>'+'<li><a href="'+t+'libraries/email.html">Email Class</a></li>'+'<li><a href="'+t+'libraries/encryption.html">Encryption Class</a></li>'+'<li><a href="'+t+'libraries/file_uploading.html">File Uploading Class</a></li>'+'<li><a href="'+t+'libraries/form_validation.html">Form Validation Class</a></li>'+'<li><a href="'+t+'libraries/ftp.html">FTP Class</a></li>'+'<li><a href="'+t+'libraries/table.html">HTML Table Class</a></li>'+'<li><a href="'+t+'libraries/image_lib.html">Image Manipulation Class</a></li>'+'<li><a href="'+t+'libraries/input.html">Input Class</a></li>'+'<li><a href="'+t+'libraries/javascript.html">Javascript Class</a></li>'+'<li><a href="'+t+'libraries/loader.html">Loader Class</a></li>'+'<li><a href="'+t+'libraries/language.html">Language Class</a></li>'+'<li><a href="'+t+'libraries/migration.html">Migration Class</a></li>'+'<li><a href="'+t+'libraries/output.html">Output Class</a></li>'+'<li><a href="'+t+'libraries/pagination.html">Pagination Class</a></li>'+'<li><a href="'+t+'libraries/security.html">Security Class</a></li>'+'<li><a href="'+t+'libraries/sessions.html">Session Class</a></li>'+'<li><a href="'+t+'libraries/trackback.html">Trackback Class</a></li>'+'<li><a href="'+t+'libraries/parser.html">Template Parser Class</a></li>'+'<li><a href="'+t+'libraries/typography.html">Typography Class</a></li>'+'<li><a href="'+t+'libraries/unit_testing.html">Unit Testing Class</a></li>'+'<li><a href="'+t+'libraries/uri.html">URI Class</a></li>'+'<li><a href="'+t+'libraries/user_agent.html">User Agent Class</a></li>'+'<li><a href="'+t+'libraries/xmlrpc.html">XML-RPC Class</a></li>'+'<li><a href="'+t+'libraries/zip.html">Zip Encoding Class</a></li>'+"</ul>"+'</td><td class="td_sep" valign="top">'+"<h3>Driver Reference</h3>"+"<ul>"+'<li><a href="'+t+'libraries/caching.html">Caching Class</a></li>'+'<li><a href="'+t+'database/index.html">Database Class</a></li>'+'<li><a href="'+t+'libraries/javascript.html">Javascript Class</a></li>'+"</ul>"+"<h3>Helper Reference</h3>"+"<ul>"+'<li><a href="'+t+'helpers/array_helper.html">Array Helper</a></li>'+'<li><a href="'+t+'helpers/captcha_helper.html">CAPTCHA Helper</a></li>'+'<li><a href="'+t+'helpers/cookie_helper.html">Cookie Helper</a></li>'+'<li><a href="'+t+'helpers/date_helper.html">Date Helper</a></li>'+'<li><a href="'+t+'helpers/directory_helper.html">Directory Helper</a></li>'+'<li><a href="'+t+'helpers/download_helper.html">Download Helper</a></li>'+'<li><a href="'+t+'helpers/email_helper.html">Email Helper</a></li>'+'<li><a href="'+t+'helpers/file_helper.html">File Helper</a></li>'+'<li><a href="'+t+'helpers/form_helper.html">Form Helper</a></li>'+'<li><a href="'+t+'helpers/html_helper.html">HTML Helper</a></li>'+'<li><a href="'+t+'helpers/inflector_helper.html">Inflector Helper</a></li>'+'<li><a href="'+t+'helpers/language_helper.html">Language Helper</a></li>'+'<li><a href="'+t+'helpers/number_helper.html">Number Helper</a></li>'+'<li><a href="'+t+'helpers/path_helper.html">Path Helper</a></li>'+'<li><a href="'+t+'helpers/security_helper.html">Security Helper</a></li>'+'<li><a href="'+t+'helpers/smiley_helper.html">Smiley Helper</a></li>'+'<li><a href="'+t+'helpers/string_helper.html">String Helper</a></li>'+'<li><a href="'+t+'helpers/text_helper.html">Text Helper</a></li>'+'<li><a href="'+t+'helpers/typography_helper.html">Typography Helper</a></li>'+'<li><a href="'+t+'helpers/url_helper.html">URL Helper</a></li>'+'<li><a href="'+t+'helpers/xml_helper.html">XML Helper</a></li>'+"</ul>"+"</td></tr></table>")};