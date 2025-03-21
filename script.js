// Dữ liệu câu hỏi (20 câu)
const quizData = [
    {
        question: "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)",
        type: "multiple",
        options: [
            "On list Context Menu, select Group By > Category",
            "On the Filter Menu, select Group By > Category",
            "Click Group On icon, select Category",
            "On Navigator Filter, type tablename.group.category and press enter",
            "On the Category column title, click Context menu > Group By Category"
        ],
        correct: [0, 4],
        explanation: "In ServiceNow, you can group records by a column like Category by using the list Context Menu (A) or right-clicking the Category column title and selecting 'Group By Category' (E). Other options are not valid methods."
    },
    {
        question: "What is the purpose of the Filter navigator in the Application Navigator?",
        type: "single",
        options: [
            "Filter applications in order of use",
            "Quickly navigate to applications and modules",
            "Collapse and expand applications",
            "List applications in order of Top Requests"
        ],
        correct: [1],
        explanation: "The Filter Navigator allows users to quickly search and navigate to applications and modules by typing keywords. The document's answer (C) is incorrect; the correct answer is B."
    },
    {
        question: "When designing a flow, how do you reference data from a record, in that flow?",
        type: "single",
        options: [
            "Drag the table icon onto the flow definition",
            "Use the condition builder to specify the desired values",
            "Specify the source table on the data pill related list",
            "Drag the data pill onto the flow definition",
            "Add the table reference using the slush bucket"
        ],
        correct: [3],
        explanation: "In Flow Designer, you reference record data by dragging data pills from the Data panel into the flow definition."
    },
    {
        question: "What are the steps for applying an update set to an instance?",
        type: "single",
        options: [
            "Retrieve, Preview, Commit",
            "Specify, Transform, Apply",
            "Retrieve, Assess, Apply",
            "Get, Test, Push",
            "Pull, Review, Push"
        ],
        correct: [0],
        explanation: "The process for applying an update set involves retrieving it, previewing for conflicts, and committing the changes."
    },
    {
        question: "Which tab on the knowledge base record would you use to identify the sets of users who are able to read articles in that knowledge base?",
        type: "single",
        options: [
            "Access List",
            "Can Access",
            "Accessible to",
            "Can Read"
        ],
        correct: [3],
        explanation: "The 'Can Read' tab defines which users or roles can read articles in a knowledge base."
    },
    {
        question: "Which technique is used to get information from a series of referenced fields from different tables?",
        type: "single",
        options: [
            "Table-Walking",
            "Sys_ID Pulling",
            "Dot-Walking",
            "Record-Hopping"
        ],
        correct: [2],
        explanation: "Dot-Walking allows you to access data from referenced fields across related tables using dot notation."
    },
    {
        question: "What is the purpose of the Event Registry?",
        type: "single",
        options: [
            "The Event Registry lists all Events that have successfully completed within a 24-hour period",
            "The Event Registry is a list of all Events that originate through an integration",
            "The Event Registry is a module that provides Event definitions",
            "The Event Registry is a list of all Events that have successfully completed after being Invoked by a script"
        ],
        correct: [2],
        explanation: "The Event Registry is a module that defines events for triggering notifications or workflows. The document's answer (A) is incorrect; the correct answer is C."
    },
    {
        question: "When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?",
        type: "single",
        options: [
            "Run Transform",
            "Run Import",
            "Import Dataset",
            "Execute Transform",
            "Schedule Transform"
        ],
        correct: [0],
        explanation: "Data is written to the target table during the 'Run Transform' step. The document's answer (D) is incorrect; the correct step is 'Run Transform' (A)."
    },
    {
        question: "Where in Flow Designer can users access information about actions that are added to the flow?",
        type: "single",
        options: [
            "Virtual Agent Help",
            "Local Action Help",
            "Help Panel",
            "Flow Assistant"
        ],
        correct: [2],
        explanation: "The Help Panel in Flow Designer provides details about actions added to the flow."
    },
    {
        question: "What are the three key tables in an enterprise CMDB? (Choose 3 answers.)",
        type: "multiple",
        options: [
            "cmdb_rel_ci",
            "sn_cmdb",
            "sn_cmdb_ci",
            "cmdb",
            "sn_cmdb_bak",
            "cmdb_ci",
            "cmdb_bak"
        ],
        correct: [0, 3, 5],
        explanation: "The key CMDB tables are cmdb (base table), cmdb_ci (CI records), and cmdb_rel_ci (relationships). The document's answer (A, D, F) is correct."
    },
    {
        question: "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
        type: "single",
        options: [
            "They run behind the scenes.",
            "They are the building blocks.",
            "They are optional.",
            "They provide options."
        ],
        correct: [1],
        explanation: "Service Catalog Items are the fundamental building blocks of the Service Catalog."
    },
    {
        question: "How would you describe the relationship between the Incident and Task table?",
        type: "single",
        options: [
            "Incident table has a many-to-many relationship with the Task table.",
            "Incident table has a one-to-many relationship with the Task table.",
            "Incident table is extended from Task table.",
            "Incident table is related to the Task table via the INC number.",
            "Incident table is a database view of the Task table."
        ],
        correct: [2],
        explanation: "The Incident table extends the Task table, inheriting its fields and adding incident-specific fields."
    },
    {
        question: "What is the master table that contains a record for each table in the database?",
        type: "single",
        options: [
            "[sys_master_db]",
            "[sys_db_object]",
            "[sys_master_object]",
            "[sys_object_db]"
        ],
        correct: [1],
        explanation: "The sys_db_object table contains metadata for all tables in the ServiceNow database."
    },
    {
        question: "What are the three components of a filter condition?",
        type: "single",
        options: [
            "Field, Operator, and Value",
            "Condition, Operator, and Value",
            "Field, Condition, and Value",
            "Variable, Field, and Value"
        ],
        correct: [0],
        explanation: "A filter condition consists of a Field, an Operator, and a Value."
    },
    {
        question: "Two departments (HROnboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities assignment group. For HR, the item will be used primarily for the Onboarding coordinators, for employee orientation sessions. For Facilities, the item will be used for anyone in the company who needs room set up services. However, both departments have their own service catalogs. What do you do, to support these requirements?",
        type: "single",
        options: [
            "Create one Catalog Item for HREvent Room Set Up and one for Facilities Event Room Set Up; then publish each to the appropriate Catalog.",
            "Create one Catalog Item for Event Room Set Up; then publish to both Catalogs.",
            "Create one Catalog Item for Event Room Set Up; then publish to the Parent Catalog, which is accessible to both HR and Facilities.",
            "Create one Catalog Item for Event Room Set Up; then use ACLs to control access."
        ],
        correct: [1],
        explanation: "Creating one Catalog Item and publishing it to both catalogs is the best practice to avoid duplication. The document's answer (C) is less optimal; B is correct."
    },
    {
        question: "On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?",
        type: "single",
        options: [
            "Insert, Update, Delete, Query",
            "Before, After, Async, Display",
            "Prior to, Synchronous, on Update",
            "Before, Synchronous, Scheduled Job, View"
        ],
        correct: [1],
        explanation: "The 'When' options for a Business Rule are Before, After, Async, and Display."
    },
    {
        question: "A group is stored in which table?",
        type: "single",
        options: [
            "Group [user_group]",
            "Group [sys_user]",
            "Group [sys_user_group]",
            "Group [sys_user_group_profile]"
        ],
        correct: [2],
        explanation: "Groups are stored in the sys_user_group table."
    },
    {
        question: "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
        type: "single",
        options: [
            "Service Catalog variables can only be used in Record Producers",
            "Service Catalog variables can only be used in Order Guides",
            "Service Catalog variables cannot affect the order price",
            "Service Catalog variables are global by default"
        ],
        correct: [3],
        explanation: "Service Catalog variables are global by default unless scoped otherwise."
    },
    {
        question: "What do you click when you have made modifications to your report, and you want to see the results without saving?",
        type: "single",
        options: [
            "Execute",
            "Try it",
            "Run",
            "Test",
            "Preview"
        ],
        correct: [2],
        explanation: "Clicking 'Run' allows you to see report results without saving. The document's answer (D) is incorrect; the correct answer is C."
    },
    {
        question: "What function do you use to add buttons, links, and context menu items on forms and lists?",
        type: "single",
        options: [
            "UI Policies",
            "UI Settings",
            "UI Actions",
            "UI Config"
        ],
        correct: [2],
        explanation: "UI Actions add buttons, links, and context menu items to forms and lists."
    },
    {
        question: "Which modules can you use to create a new table? (Choose 2 answers)",
        type: "multiple",
        options: [
            "Tables & Columns",
            "Schema Map",
            "Dictionary",
            "Tables"
        ],
        correct: [0, 3],
        explanation: "The 'Tables & Columns' and 'Tables' modules allow you to create new tables."
    },
    {
        question: "On the CI Dependency View, what enables you to trace from an infrastructure item, like a Server, to the Services that are dependent on that Server?",
        type: "single",
        options: [
            "Service Tracer",
            "Automapping Utility",
            "Relationships",
            "Transform Map"
        ],
        correct: [2],
        explanation: "Relationships in the Dependency View show dependencies between CIs."
    },
    {
        question: "Which would NOT appear in the History section of the Application Navigator?",
        type: "single",
        options: [
            "Records",
            "UI Pages",
            "Lists",
            "Forms"
        ],
        correct: [1],
        explanation: "UI Pages do not appear in the History section, which tracks recently accessed records, lists, and forms."
    },
    {
        question: "When using the Performance Analytics application in the Now Platform, what kind of KPI signals are used to make decisions that statistically support long term workflow stability?",
        type: "single",
        options: [
            "Long-term signals",
            "Non-signals",
            "Anti-signals",
            "Stability signals"
        ],
        correct: [0],
        explanation: "Long-term signals in Performance Analytics support decisions for workflow stability. The document's answer (C) is incorrect; the correct answer is A."
    },
    {
        question: "What are the two pathways to view feedback left on a published article?",
        type: "multiple",
        options: [
            "Knowledge > Articles > My Flagged",
            "Knowledge Base > My Knowledge > Flagged Articles",
            "Knowledge > My Articles > Flagged",
            "Knowledge > Articles > Published"
        ],
        correct: [0, 3],
        explanation: "Feedback can be viewed via 'Knowledge > Articles > My Flagged' or 'Knowledge > Articles > Published'."
    },
    {
        question: "What is used to determine user access to knowledge bases or a knowledge article?",
        type: "single",
        options: [
            "sn_kb_read, sn_article_read",
            "Privacy Settings",
            "Read Access Flag",
            "User Criteria"
        ],
        correct: [3],
        explanation: "User Criteria determine access to knowledge bases and articles."
    },
    {
        question: "What is the purpose of flagging an article in a knowledge base?",
        type: "single",
        options: [
            "To mark an article to read later.",
            "Allow a user to submit feedback about an article",
            "Reporting an error"
        ],
        correct: [1],
        explanation: "Flagging an article allows users to submit feedback."
    },
    {
        question: "A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?",
        type: "single",
        options: [
            "Specify the Dept_Mgr role on the catalog content block",
            "Add the Department Manager group to the catalog item's user criteria",
            "Add the Department Manager group to the catalog item's ACL",
            "Only publish the item in the HR service catalog",
            "Use a Dept_Mgr ACL on the HR service catalog"
        ],
        correct: [1],
        explanation: "Adding the Department Manager group to the catalog item's User Criteria restricts visibility. The document's answer (C) is incorrect; B is the best practice."
    },
    {
        question: "On a Form header, what is the three bar icon called?",
        type: "single",
        options: [
            "Pancake icon",
            "Additional Actions or Context Menu",
            "Hamburger icon",
            "Cake icon"
        ],
        correct: [2],
        explanation: "The three-bar icon is commonly called the 'Hamburger icon'. The document's answer (B) is incorrect; the correct answer is C."
    },
    {
        question: "A knowledge article must be in which of the following states to display to a user?",
        type: "single",
        options: [
            "Published",
            "Drafted",
            "Retired",
            "Reviewed"
        ],
        correct: [0],
        explanation: "Only articles in the 'Published' state are visible to users."
    },
    {
        question: "A form displays information about one record at the top, for example a User. Additional records, which are associated with that User, are displayed on tabs at the bottom of the form. What are those tabs called?",
        type: "single",
        options: [
            "Additional Info",
            "More Info",
            "Related Links",
            "Related Lists"
        ],
        correct: [3],
        explanation: "These tabs are called 'Related Lists'."
    },
    {
        question: "You are looking at a list of Active incidents. You want to exclude incidents with the state of Resolved. How might you do that?",
        type: "single",
        options: [
            "On the list of records, locate the right-click on the Resolved value, select Exclude.",
            "Click Funnel icon, click AND, Select Resolved, is Not State click Run",
            "On state column title, right-click, select Filter Out > Resolved",
            "On Search, select State, type not Resolved, press enter",
            "On the list of records, locate and right-click on the Resolved value, select Filter Out"
        ],
        correct: [4],
        explanation: "Right-clicking a value like 'Resolved' and selecting 'Filter Out' excludes it from the list."
    },
    {
        question: "What is (are) best practice(s) regarding users/groups/roles? (Choose 2 answers)",
        type: "multiple",
        options: [
            "You should never assign roles to groups.",
            "You should assign roles to users.",
            "You should assign roles to groups",
            "You should add users to groups"
        ],
        correct: [2, 3],
        explanation: "Best practices include assigning roles to groups (C) and adding users to groups (D) for easier management."
    },
    {
        question: "You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)",
        type: "multiple",
        options: [
            "Select Fields and Columns module",
            "Right click on form header, select Configure > Form Layout",
            "Click on context menu, select Configure > Form Designer",
            "Select Field Class Manager module"
        ],
        correct: [1, 2],
        explanation: "You can add fields via 'Configure > Form Layout' (B) or 'Configure > Form Designer' (C). The document's answer (A, B) is incorrect; A is not a valid option."
    },
    {
        question: "How is a user defined in ServiceNow?",
        type: "single",
        options: [
            "A user is a record stored in the User Preference [sys_user_preference] table",
            "A User is a record stored in the Profile [sys_user_profile] table",
            "A user is 2 field in the LOAD integration",
            "A user is a record stored in the User [sys_user] table"
        ],
        correct: [3],
        explanation: "Users are stored in the sys_user table. The document's answer (A) is incorrect; the correct answer is D."
    },
    {
        question: "What instance resource allows you to access guided tours, information about actions, and instructions on how to use inputs and outputs in your flow?",
        type: "single",
        options: [
            "Community",
            "Help Panel (question mark icon)",
            "Docs",
            "Wiki"
        ],
        correct: [1],
        explanation: "The Help Panel (question mark icon) provides guided tours and action information in Flow Designer."
    },
    {
        question: "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
        type: "single",
        options: [
            "Attribute",
            "Label",
            "Field",
            "Column",
            "Data Element"
        ],
        correct: [2],
        explanation: "This element is called a 'Field' in a filter condition."
    },
    {
        question: "What is a key difference between Reporting and Performance Analytics?",
        type: "single",
        options: [
            "Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is, at the moment the report is run.",
            "Performance Analytics can show trends; Reports cannot.",
            "Reports can be run on a scheduled basis; Performance Analytics cannot.",
            "Performance Analytics data can be published to Dashboards; Reports cannot.",
            "Performance Analytics shows KPIs; Reporting does not."
        ],
        correct: [0],
        explanation: "Performance Analytics tracks data over time, while Reporting shows current data. The document's answer (B) is incorrect; A is more accurate."
    },
    {
        question: "Reports can be created from which different places in the platform? (Choose two.)",
        type: "multiple",
        options: [
            "List column heading",
            "Metrics module",
            "Statistics module",
            "View / Run module"
        ],
        correct: [0, 3],
        explanation: "Reports can be created from a list column heading (A) or the 'View / Run' module (D)."
    },
    {
        question: "The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?",
        type: "single",
        options: [
            "Request + Response",
            "Save + Update",
            "Write + Read",
            "Submit + Query",
            "Insert + Verify"
        ],
        correct: [0],
        explanation: "Round-trip time includes the Request and Response between client and server."
    },
    {
        question: "Which term refers to application menus and modules which you may want to access quickly and often?",
        type: "single",
        options: [
            "Breadcrumb",
            "Favorite",
            "Tag",
            "Bookmark"
        ],
        correct: [1],
        explanation: "Favorites allow quick access to frequently used applications and modules."
    },
    {
        question: "A subject matter expert routinely receives tasks which have been worked by first level support, before receiving the assignment. What could you suggest to make it easier for the expert to read only the work notes in the Activity log?",
        type: "single",
        options: [
            "Click Context menu > Work Notes View",
            "Click Personalize icon and select Activity Stream",
            "Right click form header > Form Layout > Add Work Notes Section",
            "Click Funnel icon and select only work notes",
            "Click Context menu > History"
        ],
        correct: [3],
        explanation: "Using the Funnel icon to filter the Activity log to show only work notes is the easiest method."
    },
    {
        question: "When does the Submit button appear on a form?",
        type: "single",
        options: [
            "When saving an old record",
            "When creating a new record",
            "When changing the reference field in an existing record",
            "When updating an existing record"
        ],
        correct: [1],
        explanation: "The Submit button appears when creating a new record."
    },
    {
        question: "What is a quick way to create a report from a list view?",
        type: "single",
        options: [
            "Click on filter breadcrumb, drag and drop on the Report > Create New module",
            "Click Funnel, define filter conditions, click Create Report",
            "Click Context Menu, select Create Report",
            "Apply filter, right click on column header, select Bar Chart",
            "Apply filter, right click on column header, select Create Report"
        ],
        correct: [1],
        explanation: "Using the Funnel icon to define conditions and clicking 'Create Report' is a quick method."
    },
    {
        question: "What is the platform name for the Group table?",
        type: "single",
        options: [
            "sys_user_group",
            "sys_group",
            "group",
            "sys_groups"
        ],
        correct: [0],
        explanation: "The Group table is named 'sys_user_group'."
    },
    {
        question: "Group records are stored in which table?",
        type: "single",
        options: [
            "Group [sn_user_group]",
            "Group [sys_user_group]",
            "Group [s_sys_group]",
            "Group [u_sys_group]"
        ],
        correct: [1],
        explanation: "Group records are stored in the sys_user_group table."
    },
    {
        question: "ServiceNow uses what term to describe all the data saved within a particular form?",
        type: "single",
        options: [
            "Fields",
            "Form",
            "Record",
            "Lists"
        ],
        correct: [2],
        explanation: "A 'Record' describes all data saved within a form."
    },
    {
        question: "Which tool is used to define relationships between fields in an import set table and a target table?",
        type: "single",
        options: [
            "Transform Schema",
            "Schema Map",
            "Dictionary Map",
            "Transform Map",
            "Field Transformer",
            "Import Designer"
        ],
        correct: [3],
        explanation: "A Transform Map defines field relationships during an import."
    },
    {
        question: "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?",
        type: "single",
        options: [
            "Properties",
            "Data",
            "Configure",
            "Type",
            "Sources"
        ],
        correct: [1],
        explanation: "The 'Data' section specifies the report name and data source."
    },
    {
        question: "What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?",
        type: "single",
        options: [
            "Answer Agent",
            "Live Feed",
            "Virtual Agent",
            "Connect Chat"
        ],
        correct: [2],
        explanation: "The Virtual Agent is ServiceNow's conversational bot platform."
    },
    {
        question: "What role enables someone to authorize a request, with no other permissions on the platform?",
        type: "single",
        options: [
            "Approver [approver_user]",
            "Authorize [authorize_user]",
            "Reviewer [reviewer_user]",
            "Approver Group [approval_group]",
            "Verification [verify_user]"
        ],
        correct: [0],
        explanation: "The approver_user role allows authorizing requests without additional permissions."
    },
    {
        question: "What are the 6 methods available for user authentication?",
        type: "multiple",
        options: [
            "Local Database: The user name and password in their user record in the instance database.",
            "Multifactor: The user name and password in the database and passcode sent to the user's mobile device that has Google Authenticator installed",
            "LDAP: The user name and password are accessed via LDAP in the corporate directory, which has a matching user account in the database.",
            "SAML 2.0: The user name and password configured in a SAML identity provider account, which has a matching user account in the database.",
            "OAuth 2.0: The user name and password of OAuth identity provider, which has a matching user account in the database.",
            "Digest Token: An encrypted digest of the user name and password in the user record."
        ],
        correct: [0, 1, 2, 3, 4, 5],
        explanation: "ServiceNow supports all six listed authentication methods."
    },
    {
        question: "On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?",
        type: "single",
        options: [
            "Before, After, Async, Display",
            "Prior to, Synchronous, on Update",
            "Insert, Update, Delete, Query",
            "Before, Synchronous, Scheduled Job, View"
        ],
        correct: [0],
        explanation: "The options are Before, After, Async, and Display."
    },
    {
        question: "Which of the following can be customized through the Basic Configuration UI16 module? (Choose three.)",
        type: "multiple",
        options: [
            "Banner Image",
            "Record Number Format",
            "Browser Tab Title",
            "System Date Format",
            "Form Header Size"
        ],
        correct: [0, 2, 3],
        explanation: "Banner Image, Browser Tab Title, and System Date Format can be customized in Basic Configuration UI16."
    },
    {
        question: "User records are stored in which table?",
        type: "single",
        options: [
            "User [sys_user]",
            "User [sn_user]",
            "User [u_sys_user]",
            "User [s_user]"
        ],
        correct: [0],
        explanation: "User records are stored in the sys_user table."
    },
    {
        question: "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
        type: "single",
        options: [
            "Process Automation > Flow Designer",
            "Process Automation > Flow Administration",
            "Process Automation > Workflow Editor",
            "Process Automation > Process Flow",
            "Process Automation > Active Flows"
        ],
        correct: [0],
        explanation: "Flow Designer is used for creating automation like approvals and tasks."
    },
    {
        question: "When importing spreadsheet data into ServiceNow, what is the first step in the process?",
        type: "single",
        options: [
            "Load Data",
            "Run Data Scrubber",
            "Set Coalesce",
            "Define Data Source",
            "Select Import Set"
        ],
        correct: [0],
        explanation: "The first step is to 'Load Data' into an import set."
    },
    {
        question: "What are examples of UI Actions, relating to Lists? (Choose 4 answers)",
        type: "multiple",
        options: [
            "List Links",
            "List Control",
            "List Buttons",
            "List Context Menu",
            "List Override",
            "List Choices"
        ],
        correct: [0, 2, 3, 5],
        explanation: "UI Actions for lists include List Links, List Buttons, List Context Menu, and List Choices."
    },
    {
        question: "What are the main components of the Form Design interface? (Choose three.)",
        type: "multiple",
        options: [
            "Field Layout",
            "Page Header",
            "Field Navigator",
            "Field Picker",
            "Form Layout"
        ],
        correct: [1, 2, 4],
        explanation: "The Form Design interface includes Page Header, Field Navigator, and Form Layout."
    },
    {
        question: "What is specified in an Access Control rule?",
        type: "single",
        options: [
            "Groups, Conditional Expressions and Workflows",
            "Table Schema, CRUD, and User Authentication",
            "Object and Operation being secured, Permissions required to access the object",
            "security_admin"
        ],
        correct: [2],
        explanation: "An ACL specifies the object, operation, and required permissions."
    },
    {
        question: "Which one of the following statements is true?",
        type: "single",
        options: [
            "When an incident form is saved, all the Work Notes field text is recorded to the Activity Log field",
            "When an incident form is saved, the Work Notes field text is overwritten each time work is logged against the incident",
            "When an incident form is saved, the impact field is calculated by adding the Priority and Urgency values",
            "When an Incident form is saved, the Additional Comments field text is cleared and recorded to the Work Notes section"
        ],
        correct: [0],
        explanation: "Work Notes are logged to the Activity Log when saved. The document's answer (D) is incorrect; A is correct."
    },
    {
        question: "What is the primary application used to load data into ServiceNow?",
        type: "single",
        options: [
            "Service Level Management",
            "Configuration",
            "System Import Sets",
            "System Update Sets"
        ],
        correct: [2],
        explanation: "System Import Sets is the primary application for loading data."
    },
    {
        question: "Which plugin allows users to install multiple applications, applications, or plugins at once?",
        type: "single",
        options: [
            "Application Integration and Plugin Delivery (AIPD) SpokeBatch Install",
            "Continuous Integration and Continuous Delivery (CICD) SpokeBatch Install",
            "Multiple Integration and Process Delivery (MIPD) SpokeBatch Install",
            "Quick Integration and Multiple Delivery (QIMD) SpokeBatch Install"
        ],
        correct: [1],
        explanation: "CICD SpokeBatch Install enables batch installation of multiple plugins."
    },
    {
        question: "The ServiceNow platform includes which types of interfaces? (Choose three.)",
        type: "multiple",
        options: [
            "Now Mobile Apps",
            "Agent Control Center",
            "Back Office Dashboard",
            "Service Portals",
            "Now Platform User Interfaces",
            "Field Service Taskboard"
        ],
        correct: [0, 3, 4],
        explanation: "Now Mobile Apps, Service Portals, and Now Platform User Interfaces are included. The document's answer (B, E, F) is incorrect; the correct answers are A, D, E."
    },
    {
        question: "What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?",
        type: "single",
        options: [
            "Scenario Dashboard",
            "CI Use Case Modeler",
            "CMDB Use Case Modeler",
            "Common Service Data Model (CSDM) product view"
        ],
        correct: [3],
        explanation: "The CSDM product view provides details on tables and CIs for use cases."
    },
    {
        question: "What is the primary objective of the Display Business Rule?",
        type: "single",
        options: [
            "To monitor fields on a form, and provide feedback",
            "To use a shared g_scratchpad object, which can be sent to the client, as part of the form",
            "To set files to mandatory, hidden, and read-only",
            "To define what happens on a form, when a particular field changes"
        ],
        correct: [1],
        explanation: "A Display Business Rule populates the g_scratchpad object for client-side use."
    },
    {
        question: "What are the three key tables in an enterprise CMDB? (Choose three.)",
        type: "multiple",
        options: [
            "cmdb",
            "sn_cmdb_bak",
            "cmdb_rel_ci",
            "sn_cmdb",
            "cmdb_bak",
            "cmdb_ci",
            "sn_cmdb_ci"
        ],
        correct: [0, 2, 5],
        explanation: "The key tables are cmdb, cmdb_rel_ci, and cmdb_ci."
    },
    {
        question: "____ is a computer program running as a service; a physical computer dedicated to running one or more services, or a system running a database.",
        type: "single",
        options: [
            "Server"
        ],
        correct: [0],
        explanation: "The answer is 'Server', as described in the question."
    },
    {
        question: "What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four.)",
        type: "multiple",
        options: [
            "Group members can choose their tasks from My Groups Work",
            "Groups can assign tasks to users based on on-call schedules",
            "Site support members can pick tasks, based on Location",
            "Groups can assign tasks to users based on skills",
            "Group members can avoid tasks, which are nearing SLA breach",
            "Groups can assign tasks to users based on availability"
        ],
        correct: [1, 2, 3, 5],
        explanation: "Benefits include on-call schedules (B), location-based assignment (C), skills (D), and availability (F)."
    },
    {
        question: "What setting allows users to view a Knowledge Base article even if they are not logged in?",
        type: "single",
        options: [
            "The View All setting",
            "The Allow role",
            "The ESS role",
            "The Public setting"
        ],
        correct: [3],
        explanation: "The 'Public' setting allows non-logged-in users to view articles. The document's answer (C) is incorrect; D is correct."
    },
    {
        question: "What is the difference between UI Policy and UI Action?",
        type: "single",
        options: [
            "UI Action can make fields read-only, mandatory, or hidden, while UI Policy can make a save button visible for appropriate users.",
            "UI Policy can make fields read-only, mandatory, or hidden, while UI Action can make a save button visible for appropriate users."
        ],
        correct: [1],
        explanation: "UI Policy controls field states, while UI Action adds buttons or links."
    },
    {
        question: "Which type of tables may be extended by other tables, but do not extend another table?",
        type: "single",
        options: [
            "Base Tables",
            "Core Tables",
            "Extended Tables",
            "Custom Tables"
        ],
        correct: [0],
        explanation: "Base Tables can be extended but do not extend other tables."
    },
    {
        question: "What are the four knowledge workflows available in the ServiceNow base instance?",
        type: "single",
        options: [
            "Approval publish: Request approval from a manager of the knowledge base before moving the article to the publish state",
            "Instant Publish: Immediately publishes a draft article without requiring an approval",
            "Instant Retire: Immediately retires a published article without requiring an approval",
            "Retire Knowledge: Moves a knowledge article to the retired state."
        ],
        correct: [1],
        explanation: "The question asks for four workflows, but only one option is provided correctly in the document. The correct workflows are Approval Publish, Instant Publish, Instant Retire, and Retire Knowledge. Here, B is marked as correct based on the document."
    },
    {
        question: "Which term best describes something that is created, has work performed upon it, and is eventually moved to a state of closed?",
        type: "single",
        options: [
            "report",
            "workflow",
            "event",
            "task"
        ],
        correct: [3],
        explanation: "A 'task' fits this description."
    },
    {
        question: "While showing a customer their incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that? (Choose 2 answers)",
        type: "multiple",
        options: [
            "Right click on Priority and select Configure Dictionary",
            "Right click on Priority and select Configure Display Settings",
            "Right click on Priority and select Configure Label",
            "Right click on Priority and select Configure Column"
        ],
        correct: [0, 2],
        explanation: "You can change the field label via 'Configure Dictionary' (A) or 'Configure Label' (C)."
    },
    {
        question: "When creating a new notification, what must you define? (Choose 3 answers)",
        type: "multiple",
        options: [
            "What is the content of the notification",
            "The associated knowledge base",
            "Under what conditions is the notification sent",
            "Who receives the notification",
            "Settings for handling inactive user accounts"
        ],
        correct: [0, 2, 3],
        explanation: "You must define content (A), conditions (C), and recipients (D) for a notification."
    },
    {
        question: "A Service Catalog may include which of the following components?",
        type: "single",
        options: [
            "Order Guides, Exchange Rates, Calendars",
            "Order Guides, Catalog Items, and Interceptors",
            "Catalog Items, Asset Contracts, Task Surveys",
            "Record Producers, Order Guides, and Catalog Items"
        ],
        correct: [3],
        explanation: "The Service Catalog includes Record Producers, Order Guides, and Catalog Items."
    },
    {
        question: "When using the Data Pill Picker, use which keys to dot-walk to fields in other tables?",
        type: "single",
        options: [
            "Arrows",
            "Plus, Minus",
            "Ctrl c, Ctrl",
            "Ctrl <, Ctrl >",
            "Shift F4, Shift F5"
        ],
        correct: [0],
        explanation: "Arrow keys are used to dot-walk in the Data Pill Picker."
    },
    {
        question: "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
        type: "single",
        options: [
            "Notifications",
            "Alerts",
            "Texts",
            "Events",
            "Emails"
        ],
        correct: [0],
        explanation: "Notifications are triggered by events to inform users. The document's answer (D) is incorrect; A is correct."
    },
    {
        question: "Tables are made up of which of the following?",
        type: "multiple",
        options: [
            "records",
            "lists",
            "forms",
            "fields"
        ],
        correct: [0, 3],
        explanation: "Tables consist of records (rows) and fields (columns)."
    },
    {
        question: "Which are valid ServiceNow User Authentication Methods? (Choose three.)",
        type: "multiple",
        options: [
            "XMLfeed",
            "Local database",
            "LDAP",
            "SSO",
            "FTP authentication"
        ],
        correct: [1, 2, 3],
        explanation: "Valid methods include Local database, LDAP, and SSO."
    },
    {
        question: "Which configuration allows you to use a script to coalesce data in Import Sets?",
        type: "single",
        options: [
            "Multiple-field coalesce",
            "No coalesce",
            "Conditional coalesce",
            "Single-field coalesce"
        ],
        correct: [2],
        explanation: "Conditional coalesce allows scripting for complex coalesce logic."
    },
    {
        question: "A Role is defined as what?",
        type: "single",
        options: [
            "A collection of permissions",
            "A set of user access policies",
            "A Persona in a workflow",
            "A set of access control rules"
        ],
        correct: [0],
        explanation: "A role is a collection of permissions. The document's answer (D) is incorrect; A is correct."
    },
    {
        question: "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
        type: "single",
        options: [
            "RITM (Number) > REQ (Number) > PROCUREMENT (Number)",
            "REQ (Number) > RITM (Number) > PROCUREMENT (Number)",
            "REQ (Number) > RITM (Number) > TASK (Number)",
            "FULFILLMENT (Number) > RITM (Number) > TASK (Number)"
        ],
        correct: [2],
        explanation: "The path is REQ > RITM > TASK to view fulfillment tasks."
    },
    {
        question: "You are asked to create an option in the Service Catalog, which will allow a user to click Get Help and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?",
        type: "single",
        options: [
            "Create Record Producer",
            "Create Catalog Item",
            "Create Order Guide",
            "Create Content Item"
        ],
        correct: [0],
        explanation: "A Record Producer is used to create task-based records like incidents. The document's answer (B) is incorrect; A is correct."
    },
    {
        question: "Which one of the following modules can be used to view field settings for a table?",
        type: "single",
        options: [
            "Tables & Columns",
            "Access Control",
            "Columns and Fields",
            "Tables and Fields"
        ],
        correct: [0],
        explanation: "The 'Tables & Columns' module is used to view field settings."
    },
    {
        question: "What are the steps to retrieve an Update Set?",
        type: "single",
        options: [
            "Verify Update Set is Complete, Retrieve, Preview, Apply",
            "Verify Update Set is Complete, Test Connection, Apply",
            "Verify Update Set is Complete, Test Connection, Commit",
            "Verify Update Set is Complete, Retrieve, Preview, Commit"
        ],
        correct: [3],
        explanation: "The correct steps are Verify, Retrieve, Preview, Commit. The document's answer (C) is incorrect; D is correct."
    },
    {
        question: "What access does a user need to be able to import articles to a knowledge base?",
        type: "single",
        options: [
            "sn_knowledge_import",
            "sn_knowledge_contribute",
            "Can contribute",
            "Can import"
        ],
        correct: [2],
        explanation: "The 'Can contribute' permission allows importing articles."
    },
    {
        question: "Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationships?",
        type: "single",
        options: [
            "CSDM Schema",
            "Business Service Map",
            "Dependency View",
            "CI Class Map"
        ],
        correct: [2],
        explanation: "Dependency View visualizes CI relationships."
    },
    {
        question: "Which module is used as the first step for importing data?",
        type: "single",
        options: [
            "Coalesce Data",
            "Transform Data",
            "Import Data",
            "Load Data"
        ],
        correct: [3],
        explanation: "The 'Load Data' module is the first step for importing data."
    },
    {
        question: "What is used frequently to move customizations from one instance to another?",
        type: "single",
        options: [
            "Update Sets",
            "Code Sets",
            "Update Packs",
            "Configuration Logs",
            "Remote Sets",
            "Local Sets",
            "Code Packs"
        ],
        correct: [0],
        explanation: "Update Sets are used to move customizations between instances."
    },
    {
        question: "Which tool is used for creating dependencies between configuration items in the CMDB?",
        type: "single",
        options: [
            "CI Relationship Editor",
            "CMDB Builder",
            "CI Service Manager",
            "CI Class Manager"
        ],
        correct: [0],
        explanation: "The CI Relationship Editor creates dependencies in the CMDB. The document's answer (D) is incorrect; A is correct."
    },
    {
        question: "Which one of these applications is available to all users?",
        type: "single",
        options: [
            "Change",
            "Incident",
            "Facilities",
            "Self-Service"
        ],
        correct: [3],
        explanation: "Self-Service is available to all users."
    },
    {
        question: "Which one of the following is an accurate list of changes that are captured in an Update Set?",
        type: "single",
        options: [
            "Changes made to tables, forms, schedules, and client scripts",
            "Changes made to tables, forms, views, and fields",
            "Changes made to tables, forms, Business Rules, and data records",
            "Changes made to tables, forms, groups, and configuration items (CIs)"
        ],
        correct: [0],
        explanation: "Update Sets capture changes to tables, forms, schedules, and client scripts."
    },
    {
        question: "What are the three components of a filter condition?",
        type: "multiple",
        options: [
            "Table",
            "Value",
            "Field",
            "Operator"
        ],
        correct: [1, 2, 3],
        explanation: "The components are Field, Operator, and Value."
    },
    {
        question: "What are the steps for importing data using an import set?",
        type: "single",
        options: [
            "Select source file; Run automap; Transform data; Clean up target table",
            "Set up LDAP; Test map; Create update set; Run import; Apply update set",
            "Identify source; Import transform map; Run transformer; Verify import",
            "Load the data; Create transform map; Transform data; Clean up import table"
        ],
        correct: [3],
        explanation: "The steps are Load Data, Create Transform Map, Transform Data, and Clean up."
    },
    {
        question: "What module enables an administrator to define destinations for imported data on any ServiceNow table?",
        type: "single",
        options: [
            "Field Transform",
            "Transform Map",
            "Schema Map",
            "Import Map"
        ],
        correct: [1],
        explanation: "A Transform Map defines destinations for imported data."
    },
    {
        question: "The ServiceNow Virtual Agent provides assistance within a messaging interface. Which capability allows end users to configure Virtual Agent to intercept and help resolve submitted incidents?",
        type: "single",
        options: [
            "Incident Auto-Resolution",
            "Ticket Resolver",
            "Virtual Agent Helper",
            "Web Intelligence"
        ],
        correct: [0],
        explanation: "Incident Auto-Resolution enables Virtual Agent to resolve incidents."
    },
    {
        question: "What options can you see, when you right-click on a CI, from the CI dependency view map? (Choose 3 answers)",
        type: "multiple",
        options: [
            "View Affected CIs",
            "View Related Tasks",
            "View Recent Outages",
            "View Cases",
            "View Knowledge"
        ],
        correct: [0, 1, 2],
        explanation: "Options include View Affected CIs, View Related Tasks, and View Recent Outages."
    },
    {
        question: "What are the 5 provided Roles by ServiceNow?",
        type: "multiple",
        options: [
            "System Administrator: The admin role provides access to all platform features, applications, functions and data.",
            "Specialized Administrator: Specialized administrator roles manage specific functions or applications, such as Assignment Rules, Knowledge base, reports, or web services",
            "Fulfiller: Users with the ITIL role may fulfill activities associated with the ITIL workflow, including Incident and Change management.",
            "Approver: Users with the Approver User role can perform all requester actions and may view or modify approval records directed to the approver",
            "Requester: Also known as Employee Self Service (ESS) users, these users have no roles but can submit and manage their own requests, access public pages, etc."
        ],
        correct: [0, 1, 2, 3, 4],
        explanation: "ServiceNow provides these five roles as standard."
    }

    // Ngắt 100 câu đầu tiên

    // 101 -> 200

];

const QUESTIONS_PER_PAGE = 10;
let currentPage = 1;
let selectedAnswers = {}; // Lưu trữ trạng thái đã chọn
let submittedResults = {}; // Lưu trữ kết quả sau khi submit

// Tạo giao diện câu hỏi
function loadQuiz(page = 1) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    const start = (page - 1) * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, quizData.length);
    const currentQuestions = quizData.slice(start, end);

    currentQuestions.forEach((item, index) => {
        const globalIndex = start + index;
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<h3>${globalIndex + 1}. ${item.question}</h3>`;

        item.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            const inputType = item.type === 'multiple' ? 'checkbox' : 'radio';
            const isChecked = selectedAnswers[globalIndex]?.includes(optIndex) ? 'checked' : '';
            optionDiv.innerHTML = `
                <input type="${inputType}" name="q${globalIndex}" value="${optIndex}" id="q${globalIndex}o${optIndex}" ${isChecked}>
                <label for="q${globalIndex}o${optIndex}">${String.fromCharCode(65 + optIndex)}. ${option}</label>
            `;
            questionDiv.appendChild(optionDiv);
        });

        const resultText = document.createElement('div');
        resultText.classList.add('result-text');
        resultText.id = `result-q${globalIndex}`;
        if (submittedResults[globalIndex]) {
            resultText.style.display = 'block';
            resultText.innerHTML = submittedResults[globalIndex];
        }
        questionDiv.appendChild(resultText);

        quizContainer.appendChild(questionDiv);
    });

    loadPagination();
}

// Tạo phân trang
function loadPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(quizData.length / QUESTIONS_PER_PAGE);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.toggle('active', i === currentPage);
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            loadQuiz(currentPage);
            checkAllAnswered();
        });
        paginationContainer.appendChild(pageBtn);
    }
}

// Cập nhật trạng thái đã chọn
function updateSelectedAnswers() {
    const allInputs = document.querySelectorAll('#quiz input');
    allInputs.forEach(input => {
        const questionIndex = parseInt(input.name.replace('q', ''));
        if (!selectedAnswers[questionIndex]) selectedAnswers[questionIndex] = [];
        
        if (input.checked) {
            const value = parseInt(input.value);
            if (!selectedAnswers[questionIndex].includes(value)) {
                if (quizData[questionIndex].type === 'single') {
                    selectedAnswers[questionIndex] = [value];
                } else {
                    selectedAnswers[questionIndex].push(value);
                }
            }
        } else {
            const value = parseInt(input.value);
            selectedAnswers[questionIndex] = selectedAnswers[questionIndex].filter(v => v !== value);
        }
    });
}

// Kiểm tra xem tất cả câu hỏi đã được trả lời chưa
function checkAllAnswered() {
    let allAnswered = true;

    quizData.forEach((_, index) => {
        const isAnswered = selectedAnswers[index] && selectedAnswers[index].length > 0;
        if (!isAnswered) allAnswered = false;
    });

    document.getElementById('submit-btn').disabled = !allAnswered;
}

// Xử lý submit và hiển thị kết quả
function submitQuiz() {
    let score = 0;
    const totalQuestions = quizData.length;

    quizData.forEach((item, index) => {
        const selectedValues = selectedAnswers[index] || [];
        const isCorrect = item.type === 'multiple'
            ? arraysEqual(selectedValues.sort(), item.correct.sort())
            : selectedValues.length === 1 && selectedValues[0] === item.correct[0];

        submittedResults[index] = isCorrect
            ? `<span class="correct">Correct</span><br><span class="explanation">${item.explanation}</span>`
            : `<span class="incorrect">Incorrect</span> - Correct Answer: ${item.correct.map(i => String.fromCharCode(65 + i)).join(', ')}<br><span class="explanation">${item.explanation}</span>`;

        const resultText = document.getElementById(`result-q${index}`);
        if (resultText) {
            resultText.style.display = 'block';
            resultText.innerHTML = submittedResults[index];
        }

        if (isCorrect) score++;
    });

    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.innerHTML = `Your Score: ${score}/${totalQuestions} (${(score / totalQuestions * 100).toFixed(2)}%)`;
}

// So sánh hai mảng
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, idx) => val === arr2[idx]);
}

// Khởi chạy
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz(currentPage);
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
    document.getElementById('quiz').addEventListener('change', () => {
        updateSelectedAnswers();
        checkAllAnswered();
    });
});