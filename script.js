// Dữ liệu câu hỏi (362 câu)
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
        explanation: "In ServiceNow, you can group records by right-clicking the list (Context Menu) and selecting 'Group By > Category' (A) or right-clicking the Category column header and selecting 'Group By Category' (E)."
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
        explanation: "The Filter Navigator allows quick navigation to applications and modules by typing keywords. The PDF incorrectly lists 'C' as the answer; it should be 'B'."
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
        explanation: "In Flow Designer, you reference record data by dragging data pills from the Data panel into the flow."
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
        explanation: "The correct steps are Retrieve, Preview, and Commit."
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
        explanation: "The 'Can Read' tab specifies which users or roles can read articles in a knowledge base."
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
        explanation: "Dot-Walking uses dot notation to access data across referenced tables."
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
        explanation: "The Event Registry defines events for triggering workflows or notifications. The PDF incorrectly lists 'A'; it should be 'C'."
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
        explanation: "Data is written during the 'Run Transform' step. The PDF lists 'D' (incorrect); it should be 'A'."
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
        explanation: "The Help Panel provides details about actions in Flow Designer."
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
        explanation: "The key tables are cmdb_rel_ci (relationships), cmdb (base table), and cmdb_ci (CI records)."
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
        explanation: "Service Catalog Items are the building blocks of the Service Catalog."
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
        explanation: "The Incident table extends the Task table, inheriting its fields."
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
        explanation: "The sys_db_object table stores metadata for all tables."
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
        explanation: "A filter condition consists of Field, Operator, and Value."
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
        explanation: "Creating one Catalog Item and publishing it to both catalogs avoids duplication. The PDF lists 'C' (less optimal); 'B' is correct."
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
        explanation: "The 'When' options are Before, After, Async, and Display."
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
        explanation: "Service Catalog variables are global by default unless scoped."
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
        explanation: "Clicking 'Run' previews report results without saving. The PDF lists 'D' (incorrect); 'C' is correct."
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
        explanation: "UI Actions add buttons, links, and context menu items."
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
        explanation: "'Tables & Columns' and 'Tables' modules allow table creation."
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
        explanation: "Relationships in Dependency View show CI dependencies."
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
        explanation: "UI Pages do not appear in the History section."
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
        explanation: "Long-term signals support long-term stability decisions. The PDF lists 'C' (incorrect); 'A' is correct."
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
        explanation: "Feedback is viewed via 'Knowledge > Articles > My Flagged' or 'Knowledge > Articles > Published'."
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
        explanation: "User Criteria control access to knowledge bases and articles."
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
        explanation: "Flagging allows users to submit feedback."
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
        explanation: "User Criteria restrict visibility to the Department Manager group. The PDF lists 'C' (incorrect); 'B' is best practice."
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
        explanation: "The three-bar icon is the 'Hamburger icon'. The PDF lists 'B' (incorrect); 'C' is correct."
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
        explanation: "Only 'Published' articles are visible to users."
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
        explanation: "These are called 'Related Lists'."
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
        explanation: "Right-clicking 'Resolved' and selecting 'Filter Out' excludes it."
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
        explanation: "Best practices are assigning roles to groups (C) and adding users to groups (D)."
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
        explanation: "Fields can be added via 'Configure > Form Layout' (B) or 'Configure > Form Designer' (C). The PDF lists 'A, B' (incorrect); 'A' is not valid."
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
        explanation: "Users are stored in the sys_user table. The PDF lists 'A' (incorrect); 'D' is correct."
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
        explanation: "The Help Panel provides guided tours and action info in Flow Designer."
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
        explanation: "This element is called a 'Field'."
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
        explanation: "Performance Analytics tracks data over time, unlike Reporting. The PDF lists 'B' (incomplete); 'A' is more accurate."
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
        explanation: "Reports can be created from list column headings (A) or the 'View / Run' module (D)."
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
        explanation: "Round-trip time includes Request and Response."
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
        explanation: "Favorites allow quick access to frequently used items."
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
        explanation: "Using the Funnel icon to filter the Activity log to work notes is simplest."
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
        explanation: "Using the Funnel icon and clicking 'Create Report' is a quick method."
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
        explanation: "The Group table is 'sys_user_group'."
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
        explanation: "Group records are stored in sys_user_group."
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
        explanation: "A 'Record' describes all data in a form."
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
        explanation: "A Transform Map defines field relationships during import."
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
        explanation: "The 'Data' section specifies the report name and source."
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
        explanation: "The Virtual Agent is ServiceNow's bot platform."
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
        explanation: "The approver_user role allows request authorization only."
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
        explanation: "All six listed methods are valid in ServiceNow."
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
        explanation: "Options are Before, After, Async, and Display."
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
        explanation: "Banner Image, Browser Tab Title, and System Date Format can be customized."
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
        explanation: "Users are stored in sys_user."
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
        explanation: "Flow Designer is used for creating automations."
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
        explanation: "The first step is 'Load Data'."
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
        explanation: "List Links, List Buttons, List Context Menu, and List Choices are UI Actions for lists."
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
        explanation: "Page Header, Field Navigator, and Form Layout are main components."
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
        explanation: "ACLs specify the object, operation, and permissions."
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
        explanation: "Work Notes are logged to the Activity Log when saved. The PDF lists 'D' (incorrect); 'A' is correct."
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
        explanation: "System Import Sets is used for loading data."
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
        explanation: "CICD SpokeBatch Install enables batch installations."
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
        explanation: "Now Mobile Apps, Service Portals, and Now Platform User Interfaces are included. The PDF lists 'B, E, F' (incorrect); 'A, D, E' is correct."
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
        explanation: "CSDM product view shows table and CI details."
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
        explanation: "Display Business Rules populate g_scratchpad for client-side use."
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
        explanation: "Key tables are cmdb, cmdb_rel_ci, and cmdb_ci."
    },
    {
        question: "____ is a computer program running as a service; a physical computer dedicated to running one or more services, or a system running a database.",
        type: "single",
        options: [
            "Server"
        ],
        correct: [0],
        explanation: "The answer is 'Server'."
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
        explanation: "Benefits include on-call schedules (B), location (C), skills (D), and availability (F)."
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
        explanation: "The 'Public' setting allows non-logged-in access. The PDF lists 'C' (incorrect); 'D' is correct."
    },
    {
        question: "What is the difference between UI Policy and UI Action?",
        type: "single",
        options: [
            "UI Action can make fields read-only, mandatory, or hidden, while UI Policy can make a save button visible for appropriate users.",
            "UI Policy can make fields read-only, mandatory, or hidden, while UI Action can make a save button visible for appropriate users."
        ],
        correct: [1],
        explanation: "UI Policy controls field states; UI Action adds buttons/links."
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
        explanation: "Base Tables can be extended but do not extend others."
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
        explanation: "The PDF only lists one option correctly (B), but all four workflows are Approval Publish, Instant Publish, Instant Retire, and Retire Knowledge. Marked 'B' as per PDF."
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
        explanation: "Change the label via 'Configure Dictionary' (A) or 'Configure Label' (C)."
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
        explanation: "You must define content (A), conditions (C), and recipients (D)."
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
        explanation: "Notifications inform users and are triggered by events. The PDF lists 'D' (incorrect); 'A' is correct."
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
        explanation: "Valid methods are Local database, LDAP, and SSO."
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
        explanation: "Conditional coalesce allows scripting for coalesce logic."
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
        explanation: "A role is a collection of permissions. The PDF lists 'D' (incorrect); 'A' is correct."
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
        explanation: "The path is REQ > RITM > TASK."
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
        explanation: "A Record Producer creates task-based records like incidents. The PDF lists 'B' (incorrect); 'A' is correct."
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
        explanation: "'Tables & Columns' is used to view field settings."
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
        explanation: "Steps are Verify, Retrieve, Preview, Commit. The PDF lists 'C' (incorrect); 'D' is correct."
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
        explanation: "'Can contribute' allows importing articles."
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
        explanation: "'Load Data' is the first step for importing data."
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
        explanation: "Update Sets move customizations between instances."
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
        explanation: "CI Relationship Editor creates CMDB dependencies. The PDF lists 'D' (incorrect); 'A' is correct."
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
        explanation: "Components are Field, Operator, and Value."
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
        explanation: "Steps are Load Data, Create Transform Map, Transform Data, Clean up."
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
        explanation: "Transform Map defines data destinations."
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
        explanation: "Options are View Affected CIs, View Related Tasks, and View Recent Outages."
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
        explanation: "All five roles are provided by ServiceNow."
    },





    // 101 -> 200
    {
        question: "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
        type: "single",
        options: [
            "Report Dashboard > Create New",
            "Reports > Getting Started",
            "Performance Analytics > Reports",
            "Self-Service > Reports",
            "Reports > Create New"
        ],
        correct: [4],
        explanation: "The recommended starting point for creating reports is 'Reports > Create New'."
    },
    {
        question: "When working on a form, what is the difference between Insert and Update operations?",
        type: "single",
        options: [
            "Insert creates a new record and Update saves changes, both remain on the form",
            "Insert creates a new record and Update saves changes, both exit the form",
            "Insert saves changes and exits the form, Update saves changes and remains on the form",
            "Insert saves changes and remains on the form, Update saves changes and exits the form"
        ],
        correct: [1],
        explanation: "Insert creates a new record and exits the form; Update saves changes to an existing record and exits the form."
    },
    {
        question: "How would you distinguish between a Base Class table and a Parent Class table?",
        type: "single",
        options: [
            "Base Class tables always have tables extended from them, Parent tables do not have tables extended from them.",
            "Base Class table is not extended from another table. Parent class tables may be extended from another table.",
            "Extended tables can be extended from Parent tables or Base tables, but they cannot be extended from both.",
            "Extended tables are always extended from Parent tables, Extended tables are usually extended from Base tables."
        ],
        correct: [1],
        explanation: "A Base Class table (e.g., Task) is not extended from another table, while a Parent Class table may be extended from another (e.g., Incident from Task)."
    },
    {
        question: "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
        type: "single",
        options: [
            "If a match is found using the coalesce fields, the existing record is updated with the information being imported",
            "If a match is not found using the coalesce fields, the system does not create a Transform Map",
            "If a match is found using the coalesce fields, the system creates a new record",
            "If a match is not found using the coalesce fields, the existing record is updated with the information being imported"
        ],
        correct: [0],
        explanation: "Coalesce fields determine if an imported record updates an existing record (match found) or creates a new one (no match)."
    },
    {
        question: "As an IT employee what interface would you use, if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?",
        type: "single",
        options: [
            "Knowledge",
            "ServiceNow Wiki",
            "Knowledge Now",
            "SharePoint",
            "Stack Overflow"
        ],
        correct: [0],
        explanation: "The 'Knowledge' module is used to access internal documentation like FAQs and scripts."
    },
    {
        question: "What are the components that make up a filter condition? (Choose three.)",
        type: "multiple",
        options: [
            "Operator",
            "Match Criteria",
            "Value",
            "Column",
            "Field"
        ],
        correct: [0, 2, 4],
        explanation: "A filter condition consists of a Field, Operator, and Value."
    },
    {
        question: "Which one of the following statements best describes the purpose of an Update Set?",
        type: "single",
        options: [
            "An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems",
            "By default, an Update Set includes customizations, Business Rules, and homepages",
            "An Update Set is a group of customizations that is moved from Production to Development",
            "By default, the changes included in an Update Set are visible only in the instance to which they are applied"
        ],
        correct: [0],
        explanation: "Update Sets group changes for transfer between instances."
    },
    {
        question: "The ServiceNow platform supports a wide variety of plug-and-play applications. You can choose from the included workflow or build your own workflow. Which of the following workflows are included in the platform?",
        type: "multiple",
        options: [
            "Employee Workflows",
            "Infrastructure Workflows",
            "Federal Workflows",
            "Manufacturing Workflows",
            "Customer Workflows",
            "IT Workflows"
        ],
        correct: [0, 4, 5],
        explanation: "Included workflows are Employee, Customer, and IT Workflows."
    },
    {
        question: "While testing a Catalog Item for ordering an expensive computer, the mandatory approval is being skipped for requester Bob Smith, but not for any of the other requesters. What could explain the issue?",
        type: "single",
        options: [
            "There is a business rule, excluding Bob Smith from any approvals.",
            "Bob Smith does not have a delegate set up on his account.",
            "The Bob Smith user account does not have a manager specified.",
            "The manager does not have a delegate assigned.",
            "Bob Smith is a VIP."
        ],
        correct: [4],
        explanation: "VIP status can bypass approvals. The PDF answer 'A' is possible but less likely without specific evidence."
    },
    {
        question: "Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?",
        type: "single",
        options: [
            "Common Service Data Model (CSDM)",
            "Service Mapping Utility (SMU)",
            "Service Schema Map (SSM)",
            "CMDB Class Manager (CMDBCM)",
            "CI Class Manager (CICM)"
        ],
        correct: [0],
        explanation: "CSDM ensures data maps correctly to CMDB tables."
    },
    {
        question: "When managing tags, you can adjust who is able to see it. What are the visibility options? (Choose three.)",
        type: "multiple",
        options: [
            "Admins",
            "Everyone",
            "Groups and Users",
            "Roles and Permissions",
            "Me"
        ],
        correct: [1, 2, 4],
        explanation: "Tag visibility options are Everyone, Groups and Users, and Me."
    },
    {
        question: "What ServiceNow tables can Administrators define as 'destinations' for imported data, when using Transform Maps in the System Import Sets application?",
        type: "single",
        options: [
            "The Task table is the only table that can be a destination for imported data in the Transform Map module",
            "The Incident, Problem, Change, Task, and Service Catalog tables are the only tables that can be a destination for imported data in the Transform Map module",
            "Only the Incident, Problem, and Change tables can be a destination for imported data in the Transform Map module",
            "Any ServiceNow table can be a destination for imported data in the Transform Map module"
        ],
        correct: [3],
        explanation: "Any ServiceNow table can be a destination. PDF answer 'B' is incorrect."
    },
    {
        question: "Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board interface?",
        type: "single",
        options: [
            "Flow Designer",
            "Process Automation Designer",
            "Process Workflow Designer",
            "Workflow Editor"
        ],
        correct: [1],
        explanation: "Process Automation Designer organizes Flow Designer content."
    },
    {
        question: "What field contains a record's 32-character, unique identifier?",
        type: "single",
        options: [
            "sn_rec_id",
            "rec_id",
            "u_id",
            "sys_id",
            "sn_gu_id",
            "sn_sys_id",
            "id"
        ],
        correct: [3],
        explanation: "The 'sys_id' is the 32-character unique identifier."
    },
    {
        question: "What is generated from the Service Catalog once a user places an order for an item or service?",
        type: "single",
        options: [
            "A change request",
            "An Order Guide",
            "A request",
            "An SLA"
        ],
        correct: [2],
        explanation: "A Request (REQ) is generated from a Service Catalog order."
    },
    {
        question: "Business Rules are used to enforce mandatory data on a form.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [1],
        explanation: "Business Rules run server-side and are not typically used for form-level mandatory enforcement; UI Policies or Data Policies are used instead."
    },
    {
        question: "On what part of the ServiceNow instance would you find the option to Impersonate User?",
        type: "single",
        options: [
            "Module",
            "Content Frame",
            "Application Navigator",
            "Banner"
        ],
        correct: [3],
        explanation: "The Impersonate User option is in the Banner."
    },
    {
        question: "What do you need to do before you can use an Application-based trigger in your flow?",
        type: "single",
        options: [
            "Activate application trigger spoke",
            "Activate trigger security rules",
            "Activate application spoke, and plug-ins as needed",
            "Assign Application trigger role [sn_app] to SME",
            "Activate application plugins only"
        ],
        correct: [2],
        explanation: "You need to activate the application spoke and necessary plugins. PDF answer 'B' is incorrect."
    },
    {
        question: "Which is the base table of the configuration management database hierarchy?",
        type: "single",
        options: [
            "cmdb_ci",
            "ucmdb",
            "cmdb_rel_ci",
            "cmdb"
        ],
        correct: [3],
        explanation: "The 'cmdb' table is the base table for the CMDB hierarchy."
    },
    {
        question: "What are three security modules often used by the System Administrator? (Choose three.)",
        type: "multiple",
        options: [
            "System Properties > Security",
            "Utilities > Migrate Security",
            "System Security > Security",
            "Self-Service > My Access",
            "System Security > Access Control (ACL)",
            "Password Management > Security Questions",
            "System Security > High Security Settings"
        ],
        correct: [0, 4, 6],
        explanation: "Common security modules are System Properties > Security, System Security > Access Control (ACL), and System Security > High Security Settings."
    },
    {
        question: "What is the purpose of a Data Policy?",
        type: "single",
        options: [
            "Data Policies enforce security",
            "Data Policies standardize data in Update Sets",
            "Data Policies enforce data consistency",
            "Data Policies apply to lists to standard data"
        ],
        correct: [2],
        explanation: "Data Policies enforce data consistency across the platform."
    },
    {
        question: "The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against the data?",
        type: "single",
        options: [
            "Style",
            "Format",
            "Data",
            "Configure",
            "Group by"
        ],
        correct: [3],
        explanation: "The 'Configure' section specifies grouping and calculations."
    },
    {
        question: "A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: Requested for, Requested by, Approving manager, Delivery instructions. All of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?",
        type: "single",
        options: [
            "Create one Variable Set for the four variables; then add that variable set to each of the 80 catalog items.",
            "Create a Record Producer that contains the four fields; then add to the record producer related list on the Catalog files.",
            "Create a Flow Designer Action, with Variable Set Data Pill; then apply flow to all of the 80 catalog items.",
            "Create an Order Guide, which includes all variables; then copy and hide variables as needed.",
            "Create a Variable Set Template; then apply to all of the catalog items."
        ],
        correct: [0],
        explanation: "A Variable Set is the best approach to reuse the four mandatory fields across 80 catalog items."
    },
    {
        question: "In what order are Access Controls evaluated?",
        type: "single",
        options: [
            "Field-level - most general to most specific: then Row-level - most specific to most general",
            "Table-level - most specific to most general; then Row-level - most specific to most general",
            "Table-level - most specific to most general; then Field-level - most specific to most general",
            "Field-level - most specific to most general: then Table-level - most specific to most general"
        ],
        correct: [3],
        explanation: "Access Controls evaluate Field-level first (most specific to general), then Table-level (most specific to general)."
    },
    {
        question: "What is a sys_id?",
        type: "single",
        options: [
            "Unique 32-character identifier that is assigned to every record",
            "A client-side Business Rule",
            "A server-side Business Rule",
            "Unique 64-character identifier that is assigned to every record"
        ],
        correct: [0],
        explanation: "A sys_id is a unique 32-character identifier for every record."
    },
    {
        question: "On a form, which type of field has this icon which can be clicked, to show a preview of the associated record?",
        type: "single",
        options: [
            "Drilldown",
            "Lookup",
            "Quickview",
            "Preview",
            "Snapshot",
            "Reference"
        ],
        correct: [5],
        explanation: "A Reference field has an icon to preview the referenced record. PDF answer 'D' is incorrect; 'Reference' is the field type."
    },
    {
        question: "When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?",
        type: "single",
        options: [
            "Flow Manager",
            "Flow Designer",
            "Flow Editor",
            "Workflow Editor",
            "Workflow Designer"
        ],
        correct: [1],
        explanation: "Flow Designer is designed for non-technical users to orchestrate processes. PDF answer 'C' is incorrect."
    },
    {
        question: "Access Control rules may provide access security for which of the following database objects?",
        type: "single",
        options: [
            "For a specific role, group, or user",
            "For a specific row, column, or table",
            "For specific groups",
            "For a specific CMDB Configuration item"
        ],
        correct: [1],
        explanation: "Access Controls secure specific rows, columns, or tables. PDF answer 'D' is too narrow."
    },
    {
        question: "What is the function of user impersonation?",
        type: "single",
        options: [
            "Testing and visibility",
            "Activate verbose logging",
            "View custom perspectives",
            "Unlock Application master list"
        ],
        correct: [0],
        explanation: "User impersonation is used for testing and checking visibility."
    },
    {
        question: "There are common types of Interfaces (Numeric Value) 6: There are six common types of interfaces. Which of the following is one of them?",
        type: "single",
        options: [
            "Homepage: Consists of navigational elements, functional controls, and platform information.",
            "List: Display records from a data table, as well as allow you to edit the record information using the List Editor functionality.",
            "Form: Data is entered into ServiceNow through forms",
            "Dashboard: Enable you to display multiple performance analytics, reporting and other widgets on a single screen.",
            "Maps: Display ServiceNow data graphically on a Google map",
            "Timelines: Used to track tasks or projects"
        ],
        correct: [2],
        explanation: "Form is one of the six common interface types. The question in PDF is incomplete, but 'C' fits."
    },
    {
        question: "What Service Catalog feature do you use to organize items into logical groups?",
        type: "single",
        options: [
            "Variable sets",
            "Catalog items",
            "Sections",
            "Categories"
        ],
        correct: [3],
        explanation: "Categories organize Service Catalog items. PDF answer 'A' is incorrect."
    },
    {
        question: "You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)",
        type: "multiple",
        options: [
            "Select Field Class Manager module",
            "Select Fields and Columns module",
            "Right click on form header, select Configure > Form Layout",
            "Click on context menu, select Configure > Form Designer"
        ],
        correct: [2, 3],
        explanation: "Use 'Configure > Form Layout' or 'Configure > Form Designer' to add fields."
    },
    {
        question: "After you create a new table, what is the best practice regarding the navigation pane? (Choose two.)",
        type: "multiple",
        options: [
            "Set the filter condition on the Application Menu",
            "Set the font style on both the Application Menu and the Module",
            "Specify which Roles are able to see the Module",
            "Specify which Roles are able to see the Application Menu",
            "Create Application Menu with the same name as the table label",
            "Create Module with the plural of the table label"
        ],
        correct: [4, 5],
        explanation: "Best practices include creating an Application Menu matching the table label and a Module with the plural form. PDF answer 'C,D' is incorrect; 'E,F' aligns with standards."
    },
    {
        question: "Database live at the Data Center.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [1],
        explanation: "ServiceNow is cloud-based, so the database does not live at a local Data Center; it’s hosted by ServiceNow."
    },
    {
        question: "Which type of interface enables you to display multiple performance analytics, reporting and other widgets on a single screen?",
        type: "single",
        options: [
            "Form",
            "List",
            "Dashboard",
            "Timeline"
        ],
        correct: [2],
        explanation: "Dashboards display multiple widgets on one screen."
    },
    {
        question: "What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)",
        type: "multiple",
        options: [
            "Local Sources (i.e. XML, CSV, Excel)",
            "Implementation Spoke",
            "DataHub",
            "JDBC Connection",
            "Network Server",
            "LDAP Connection"
        ],
        correct: [0, 3, 4, 5],
        explanation: "Valid data sources include Local Sources, JDBC, Network Server, and LDAP. PDF answer 'A,C,D,F' is partially correct but 'DataHub' is not standard."
    },
    {
        question: "A User is stored in which table?",
        type: "single",
        options: [
            "User [sys_user]",
            "User [sys_user_group]",
            "User [sys_user_profile]",
            "User [user_profile]"
        ],
        correct: [0],
        explanation: "Users are stored in the 'sys_user' table."
    },
    {
        question: "A customer requests the following data quality measures be added: 1. Incident numbers should be read-only on all lists and forms, for all users. 2. Short Description field should be mandatory, on all records, across all applications, on insert. Which type of policy would you use to meet this requirement?",
        type: "single",
        options: [
            "Data policy",
            "Dictionary Design Policy",
            "Data Quality Policy",
            "Field Criteria Policy"
        ],
        correct: [0],
        explanation: "A Data Policy enforces these rules across all data entry methods."
    },
    {
        question: "Data Policy can enforce mandatory data on import.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [0],
        explanation: "Data Policies enforce mandatory data on import, UI, and web services."
    },
    {
        question: "Here is an example of the criteria set for a knowledge base: Companies: ACMENorth America, Department: HR, Groups: ACMEManager, Match All: Yes. In this example, what users would have access to this knowledge base?",
        type: "single",
        options: [
            "Members of the ACME manager group, who are also members of HR Department and part of the ACME North America",
            "Employees of ACME North America, who are members of HR Department or the ACME Manager group",
            "Users which are members of the ACMENorth America, or HR Department, or ACME Manager Group",
            "Member of the ACME Manager group, and HR department, regardless of geography"
        ],
        correct: [0],
        explanation: "'Match All: Yes' means users must meet all criteria (company, department, group)."
    },
    {
        question: "A change request has been approved and assigned to you as the system administrator to change the Incident number prefix from the default of 'INC' to the company standard 'IN'. What are the next steps to be taken?",
        type: "single",
        options: [
            "Go to the Number Maintenance application and change the prefix to 'IN' for incident",
            "Create a Business Rule that modifies the prefix before the Insert operation",
            "The prefix of an incident cannot be changed because it is a built-in feature",
            "Submit a Change Request to ServiceNow Technical Support"
        ],
        correct: [0],
        explanation: "Use Number Maintenance to change the prefix."
    },
    {
        question: "Which tool is used to have conversations with logged-in users in real-time?",
        type: "single",
        options: [
            "Connect Chat",
            "Now Messenger",
            "User Presence",
            "Comments"
        ],
        correct: [0],
        explanation: "Connect Chat enables real-time conversations."
    },
    {
        question: "How can administrators utilize the same content for different notification channels?",
        type: "single",
        options: [
            "Configure Default notification content",
            "Enable Actionable notification content",
            "Provide Common notification content",
            "Set up Related notification content"
        ],
        correct: [2],
        explanation: "'Provide Common notification content' allows reuse across channels."
    },
    {
        question: "Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?",
        type: "single",
        options: [
            "Task [task]",
            "Assignment [assignment]",
            "Service [service]",
            "Workflow [workflow]"
        ],
        correct: [0],
        explanation: "The 'task' table is the core table extended by Incident and Problem."
    },
    {
        question: "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
        type: "single",
        options: [
            "Look up their password, so you can login with their account",
            "Initiate a Connect Chat session",
            "Install the Bomgar plug-in",
            "Impersonate the user",
            "Launch a Now Chat window"
        ],
        correct: [3],
        explanation: "Impersonating the user lets you see their visible modules. PDF answer 'B' is incorrect."
    },
    {
        question: "What are the two aspects to LDAP Integration?",
        type: "multiple",
        options: [
            "Data Population",
            "Data formatting",
            "Authorization",
            "Authentication"
        ],
        correct: [0, 3],
        explanation: "LDAP Integration involves Data Population (syncing user data) and Authentication (login)."
    },
    {
        question: "From a form, what would you click, to modify the order of the fields on the form? (Choose two.)",
        type: "multiple",
        options: [
            "Context Menu > Configure > Form Layout",
            "Context Menu > Form > Layout",
            "Right click on header > Configure > Form Design",
            "Context Menu > Configure > Form Designer",
            "Right click on header > Configure > UX Dashboard"
        ],
        correct: [0, 3],
        explanation: "Use 'Configure > Form Layout' or 'Configure > Form Designer' to reorder fields."
    },
    {
        question: "When moving a homepage or dashboard between instances, what must you remember?",
        type: "single",
        options: [
            "Create a separate update set for them",
            "They are automatically added to the update set",
            "Manually add them to the update set",
            "They cannot be moved via update set"
        ],
        correct: [2],
        explanation: "Homepages and dashboards must be manually added to an Update Set."
    },
    {
        question: "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?",
        type: "single",
        options: [
            "Incident.Major_Incident",
            "incident => major_incident",
            "incident < major_incident",
            "incident | major_incident",
            "incident.major_incident"
        ],
        correct: [4],
        explanation: "The correct syntax is 'incident.major_incident' for field-level ACLs."
    },
    {
        question: "What are examples of Core tables in the ServiceNow platform?",
        type: "single",
        options: [
            "Configuration, Connect, Chat",
            "Team, Party, Awards",
            "User, Task, Incident",
            "Work, Caller, Timecard"
        ],
        correct: [2],
        explanation: "Core tables include User, Task, and Incident. PDF answer 'A' is incorrect."
    },
    {
        question: "What tool is used to import data from various data sources, and map that data into ServiceNow tables?",
        type: "single",
        options: [
            "Import Set",
            "Update Set",
            "Data Pack",
            "Transform Set"
        ],
        correct: [0],
        explanation: "Import Sets import and map data into ServiceNow tables."
    },
    {
        question: "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
        type: "single",
        options: [
            "The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.",
            "The manager does not have the itil role.",
            "The manager is not a member of the Service Desk group.",
            "The manager is not a member of the Network and Hardware groups.",
            "The Assignment Group manager field is empty."
        ],
        correct: [1],
        explanation: "Without the 'itil' role, the manager cannot see tasks in 'My Groups Work'."
    },
    {
        question: "Which tool should be used to populate commonly used fields in a form?",
        type: "single",
        options: [
            "Template",
            "Reference Qualifier",
            "Formatter",
            "Assignment Rule"
        ],
        correct: [0],
        explanation: "Templates populate commonly used fields."
    },
    {
        question: "After finishing your work on High Security Settings, what do you do to return to normal admin security levels?",
        type: "single",
        options: [
            "Select Normal role",
            "Log out and back in",
            "Use System Administration > Normal Security module",
            "Select Global Update Set",
            "End Impersonation"
        ],
        correct: [1],
        explanation: "Logging out and back in resets elevated privileges."
    },
    {
        question: "What is the name of the string that displays filter criteria?",
        type: "single",
        options: [
            "Topic",
            "Choice",
            "Breadcrumb",
            "Menu"
        ],
        correct: [2],
        explanation: "Breadcrumbs display filter criteria."
    },
    {
        question: "In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?",
        type: "single",
        options: [
            "Field Icon",
            "Field Value",
            "Data Pill",
            "Data Element",
            "Data Trigger"
        ],
        correct: [2],
        explanation: "Data Pills store action data for use in Flow Designer. PDF answer 'D' is incorrect."
    },
    {
        question: "What displays a set of records from a table?",
        type: "single",
        options: [
            "View",
            "Dashboard",
            "Panel",
            "List"
        ],
        correct: [3],
        explanation: "A List displays a set of records from a table."
    },
    {
        question: "Which plugin needs to be activated in order to translate the content of a catalog item to multiple languages?",
        type: "single",
        options: [
            "Localization Framework plugin (com.glide.localization_framework)",
            "Translation Framework plugin (com.glide.residents)",
            "Multiple Language Framework plugin (com.glide.multiple.language_framework)",
            "Language AI Framework plugin (com.glide.language.ai_framework)"
        ],
        correct: [0],
        explanation: "The Localization Framework plugin enables multi-language support."
    },
    {
        question: "IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as",
        type: "single",
        options: [
            "an action",
            "a spoke",
            "a connection",
            "an integration step"
        ],
        correct: [1],
        explanation: "Spokes are IntegrationHub integrations in flows."
    },
    {
        question: "What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?",
        type: "single",
        options: [
            "Analytics Reports",
            "Performance Analytics",
            "Scheduled Reports",
            "Reporting"
        ],
        correct: [1],
        explanation: "Performance Analytics allows users to create dashboards with widgets to visualize data trends over time and identify improvement areas. The PDF answer 'B' is correct."
    },
    {
        question: "Which fields can be configured in reporting to perform arithmetic, coalesce, concatenation, and length?",
        type: "single",
        options: [
            "Sourcing fields",
            "Function fields",
            "Computational fields",
            "Calculation fields"
        ],
        correct: [1],
        explanation: "Function fields in ServiceNow reporting allow operations like arithmetic, coalesce, concatenation, and length. The PDF answer 'B' is correct."
    },
    {
        question: "What type of query allows you to filter list data using normal words, instead of the condition builder?",
        type: "single",
        options: [
            "Natural Language Query",
            "Alexa Query",
            "Machine Learning Query",
            "Predictive Intelligence Query",
            "Auto-suggest Query"
        ],
        correct: [0],
        explanation: "Natural Language Query (NLQ) enables filtering lists using plain language instead of the condition builder. The PDF answer 'A' is correct."
    },
    {
        question: "The display sequence is controlled in a Service Catalog Item using which of the following?",
        type: "single",
        options: [
            "The Default Value field in the Catalog Item form",
            "The Sequence field in the Catalog Item form",
            "The Order field in the Variable form",
            "The Choice field in the Variable form"
        ],
        correct: [2],
        explanation: "The Order field in the Variable form controls the display sequence of variables in a Service Catalog Item. The PDF answer 'C' is correct."
    },
    {
        question: "Access controls are evaluated in this order: 1. Match object against table ACL, 2. Match the object against field ACL. Within step 1 above, what order are the table ACLs evaluated?",
        type: "single",
        options: [
            "Specific to general: Table.Field ACL, Parent Table.Field ACL, *.Field ACL",
            "Bottom to top: Table ACL, Table.Field ACL, Parent Table.Field ACL",
            "General to specific: Table ACL, Table.Field ACL, Parent Table, Field ACL",
            "Top to bottom: Wildcard Table ACL, Parent Table ACL, Table ACL",
            "Specific general: Table ACL, Parent Table ACL, Wildcard (*) ACL"
        ],
        correct: [4],
        explanation: "Table ACLs are evaluated from most specific to most general: Table ACL (e.g., incident), Parent Table ACL (e.g., task), then Wildcard (*) ACL. The PDF answer 'E' is correct."
    },
    {
        question: "Your customer has a Human Resources knowledge base, which is only accessible to members of the Human Resources department. A new procedure regarding employee quarterly reviews needs to be published to the quarterly review category of the HR knowledge base, but should only be visible for HR managers. How would you meet this requirement?",
        type: "single",
        options: [
            "On the Knowledge Base, add User Criteria with a Manager Can Read script to the Can Read list, publish article to any category",
            "Add User Criteria for HR Manager Group on the Category's Can Read list",
            "On the Knowledge Article, add an Access Control for HR Manager Group on the Can Read list, then publish article to any category",
            "Add User Criteria for HR Manager Group on the Can Read list of the article"
        ],
        correct: [1],
        explanation: "Adding User Criteria for the HR Manager Group to the Category's Can Read list restricts visibility to HR managers for articles in that category. The PDF answer 'B' is correct."
    },
    {
        question: "An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this? Choose 2 answers",
        type: "multiple",
        options: [
            "Their user account failed LDAP authentication",
            "Their user account is not logged in properly",
            "Their user account was not approved by their manager",
            "Their user account does not have itil role",
            "Their user account does not belong to any groups, which contain the itil role"
        ],
        correct: [3, 4],
        explanation: "The PDF answer 'A, C' is incorrect. The correct answers are 'D' (Their user account does not have itil role) and 'E' (Their user account does not belong to any groups, which contain the itil role). Without the 'itil' role, users are restricted to Self-Service views and cannot access task records."
    },
    {
        question: "How would you define an Access Control, to allow a user with itil role to have permission to create incident records?",
        type: "single",
        options: [
            "Name: incident; Permission: write; Role: itil",
            "Name: incident Any, Operation: write, Permission: itil",
            "Name: incident.*; Operation: write; Permission: itil",
            "Name: incident None, Permission: create: Role: itil",
            "Name: incident.None; Operation: create; Role: itil"
        ],
        correct: [4],
        explanation: "To allow creating incident records, the ACL should specify 'Name: incident', 'Operation: create', and 'Role: itil'. The PDF answer 'D' is incorrect; the correct answer is 'E'. The syntax in 'D' is invalid; 'E' correctly uses 'Operation: create'."
    },
    {
        question: "Which is the most efficient way to move large amounts of data between instances?",
        type: "single",
        options: [
            "Export to Data Package",
            "Export to XML",
            "Update Sets",
            "Export to Zip"
        ],
        correct: [1],
        explanation: "Exporting to XML is the most efficient way to move large amounts of data between instances, as it supports bulk data transfer. The PDF answer 'B' is correct."
    },
    {
        question: "Which statement is true about business rules?",
        type: "single",
        options: [
            "A business rule must run before a database action occurs",
            "A business rule can be a piece of Javascript",
            "A business rule must not run before a database action occurs",
            "A business rule monitors fields on a form"
        ],
        correct: [1],
        explanation: "Business rules are written in JavaScript and execute on the server. The PDF answer 'B' is correct."
    },
    {
        question: "Where can Admins check which release is running on an ServiceNow instance?",
        type: "single",
        options: [],
        correct: [1],
        explanation: "The PDF lists 'B' as the answer, but no options are provided. The correct location is 'System Diagnostics > Stats' or 'System Properties > System' (typically option B in CSA exams), where admins can view the release version."
    },
    {
        question: "What type of field allows you to look up values from one other table?",
        type: "single",
        options: [
            "Reference",
            "Verity",
            "Options",
            "Selections",
            "Dot walk",
            "Lookup"
        ],
        correct: [0],
        explanation: "The PDF answer 'F' (Lookup) is incorrect. The correct answer is 'A' (Reference). A Reference field allows looking up values from another table, while 'Lookup' is not a field type in ServiceNow."
    },
    {
        question: "What is the purpose of a Related List?",
        type: "single",
        options: [
            "To create a one-to-many relationship",
            "To dot-walk to a core table",
            "To present related fields",
            "To present related records"
        ],
        correct: [3],
        explanation: "A Related List displays related records from another table (e.g., incidents related to a problem). The PDF answer 'D' is correct."
    },
    {
        question: "What features are available in Knowledge Management, to support continuous improvement on the knowledge articles? Choose 4 answers",
        type: "multiple",
        options: [
            "Submit KB Errata",
            "Add Comments",
            "CC Click frowning icon",
            "Tag as Helpful",
            "Flag Article",
            "Rate with Stars"
        ],
        correct: [1, 3, 4, 5],
        explanation: "The PDF answer 'B, D, E, F' is correct. These features (Add Comments, Tag as Helpful, Flag Article, Rate with Stars) support continuous improvement by allowing feedback and ratings."
    },
    {
        question: "Table Access Control rules are processed in the following order:",
        type: "single",
        options: [
            "any table name (wildcard), parent table name, table name",
            "table name, parent table name, any table name (wildcard)",
            "parent table name, table name, any table name (wildcard)",
            "any table name (wildcard), table name, parent table name"
        ],
        correct: [1],
        explanation: "Table ACLs are evaluated from most specific to general: table name (e.g., incident), parent table name (e.g., task), then wildcard (*). The PDF answer 'B' is correct."
    },
    {
        question: "What section on the notes tab, shows the history of the work documented on the record?",
        type: "single",
        options: [
            "Journal",
            "Activity",
            "Diary",
            "Audit Log",
            "Timeline"
        ],
        correct: [1],
        explanation: "The Activity section on the notes tab shows the history of updates and work notes. The PDF answer 'B' is correct."
    },
    {
        question: "When moving multiple update sets at one time, what might you do to facilitate the move?",
        type: "single",
        options: [
            "Batch",
            "Verify",
            "Test",
            "Preview"
        ],
        correct: [3],
        explanation: "Previewing multiple update sets allows you to review changes before committing them. The PDF answer 'D' is correct."
    },
    {
        question: "What icon do you use to change the label on a Favorite?",
        type: "single",
        options: [
            "Clock",
            "Hamburger",
            "Pencil",
            "Three dots",
            "Triangle",
            "Star"
        ],
        correct: [2],
        explanation: "The Pencil icon is used to edit the label of a Favorite. The PDF answer 'C' is correct."
    },
    {
        question: "Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?",
        type: "single",
        options: [
            "Flows",
            "Action Sequences",
            "Action Sets",
            "Task Flows",
            "Flow Diagrams"
        ],
        correct: [0],
        explanation: "Flows (Flow Designer) automate business logic like approvals and notifications. The PDF answer 'A' is correct."
    },
    {
        question: "The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, files, and legend layout?",
        type: "single",
        options: [
            "Format",
            "Layout",
            "Style",
            "Configure"
        ],
        correct: [2],
        explanation: "The PDF answer 'D' (Configure) is incorrect. The correct answer is 'C' (Style), which adjusts the visual aspects like colors and legend layout in Report Designer."
    },
    {
        question: "Which testing framework is used to test ServiceNow Applications?",
        type: "single",
        options: [],
        correct: [3],
        explanation: "The PDF lists 'D' as the answer, but no options are provided. The correct answer is typically 'Automated Test Framework (ATF)' (option D in CSA exams), used to test ServiceNow applications."
    },
    {
        question: "What is a formatter? Select one of the following.",
        type: "single",
        options: [
            "A formatter allows you to configure applications on your instance",
            "A formatter is a form element used to display information that is not a field in the record",
            "A formatter allows you to populate fields automatically",
            "A formatter is a set of conditions applied to a table to help find and work with data"
        ],
        correct: [1],
        explanation: "A formatter is a form element that displays additional information not stored as a field (e.g., Activity formatter). The PDF answer 'B' is correct."
    },
    {
        question: "What is the difference between a UI Policy and Data Policy?",
        type: "single",
        options: [
            "Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI Policies are set only by web services",
            "Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies",
            "Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form interactions",
            "Data Policies run only after UI Policies run successfully"
        ],
        correct: [2],
        explanation: "The PDF answer 'C' is correct. Data Policies enforce rules regardless of data entry method, while UI Policies apply to form interactions only."
    },
    {
        question: "Which best describes a field in a ServiceNow table?",
        type: "single",
        options: [
            "A field is a table cell that stores data",
            "A field is a table row",
            "A field is an item that appears in a menu list",
            "A field is a record in a table"
        ],
        correct: [0],
        explanation: "The PDF answer 'C' is incorrect. The correct answer is 'A'. A field is a column in a table that stores data for each record."
    },
    {
        question: "From a related list, what would a user click for personalize the layout of the columns?",
        type: "single",
        options: [
            "Magnifier",
            "Context Menu",
            "Pencil",
            "Gear"
        ],
        correct: [3],
        explanation: "The Gear icon allows users to personalize the column layout of a related list. The PDF answer 'D' is correct."
    },
    {
        question: "How do you make a list filter available to everyone?",
        type: "single",
        options: [
            "Make active, set visibility, and save",
            "Assign a name, set visibility, and save",
            "Assign a group, set visibility, and save",
            "Make active, assign a name, and save"
        ],
        correct: [1],
        explanation: "To make a list filter available to everyone, you assign it a name, set visibility (e.g., to 'Everyone'), and save it. The PDF answer 'B' is correct."
    },
    {
        question: "Which of the following is used to initiate a flow?",
        type: "single",
        options: [
            "A Trigger",
            "Core Action",
            "A spoke",
            "An Event"
        ],
        correct: [0],
        explanation: "A Trigger initiates a flow in Flow Designer. The PDF answer 'A' is correct."
    },
    {
        question: "What is a schema map?",
        type: "single",
        options: [
            "A schema map enables administrators to define records from specific tables as trouble sources for Configuration Items",
            "A schema map graphically organizes the visual task boards for the CMDB",
            "A schema map graphically displays the Configuration Items that support a business service",
            "A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema"
        ],
        correct: [3],
        explanation: "A schema map visually displays tables and their relationships in ServiceNow. The PDF answer 'D' is correct."
    },
    {
        question: "New records, new groups, and modified configuration Items (CIs): what do they have in common?",
        type: "single",
        options: [
            "They are included in an Update Set",
            "They are not captured in an Update Set",
            "They are customizations",
            "They do not have anything in common"
        ],
        correct: [0],
        explanation: "New records, groups, and modified CIs can be included in an Update Set if they are customizations. The PDF answer 'A' is correct."
    },
    {
        question: "What table acts as a staging area for records imported from a data source?",
        type: "single",
        options: [
            "Transform Table",
            "Staging Table",
            "Import Set Row Table",
            "Temp Table"
        ],
        correct: [2],
        explanation: "The Import Set Row Table (typically 'sys_import_set_row') acts as a staging area for imported records. The PDF answer 'C' is correct."
    },
    {
        question: "How are Workflows moved between instances?",
        type: "single",
        options: [],
        correct: [0],
        explanation: "The PDF lists 'A' as the answer, but no options are provided. Workflows are typically moved using Update Sets (option A in CSA exams)."
    },
    {
        question: "Which one statement correctly describes Access Control rule evaluation?",
        type: "single",
        options: [
            "Rules are evaluated using roles. The role with the most permissions evaluates the rules first",
            "If more than one rule applies to a row, the older rule is evaluated first",
            "If a row level rule and a field level rule exist, both rules must be true before an operation is allowed",
            "Rules are evaluated from the general to the specific, so a table rule must be active to continue"
        ],
        correct: [2],
        explanation: "If both row-level and field-level ACLs exist, both must evaluate to true for the operation to be allowed. The PDF answer 'C' is correct."
    },
    {
        question: "What do you call any component that needs to be managed in order to deliver services?",
        type: "single",
        options: [
            "CSDM Items",
            "CMDB",
            "Configuration item",
            "Service Offerings",
            "Asset"
        ],
        correct: [2],
        explanation: "A Configuration Item (CI) is any component managed to deliver services. The PDF answer 'C' is correct."
    },
    {
        question: "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
        type: "single",
        options: [
            "Agent Assist",
            "Virtual Agent",
            "Now Messenger",
            "Connect Agent"
        ],
        correct: [1],
        explanation: "Virtual Agent provides knowledge articles via a conversational interface. The PDF answer 'B' is correct."
    },
    {
        question: "The Employee On-boarding team has asked for a way for managers to order computers, monitors, business Cards, and cell phones for new employees. How would you proceed to meet this requirement?",
        type: "single",
        options: [
            "Create Record Producer",
            "Create Order Guide",
            "Create Requested Item",
            "Create On-boarding Bot"
        ],
        correct: [1],
        explanation: "An Order Guide allows bundling multiple related items (e.g., computer, monitor) into one request. The PDF answer 'B' is correct."
    },
    {
        question: "To apply a UI Policy to all views, which field should be set to true in its definition record?",
        type: "single",
        options: [
            "Inherit",
            "Reverse if false",
            "On lowed",
            "Global"
        ],
        correct: [3],
        explanation: "The PDF answer 'A' (Inherit) is incorrect. The correct answer is 'D' (Global). Setting 'Global' to true applies the UI Policy to all views."
    },
    {
        question: "What is the name of the table relationship, where two or more tables are related in a bidirectional relationship, so that the related records are visible from both tables in a related list?",
        type: "single",
        options: [
            "Database View",
            "Many to Many",
            "One to Many",
            "Extended"
        ],
        correct: [1],
        explanation: "A Many-to-Many relationship allows bidirectional visibility of related records in related lists. The PDF answer 'B' is correct."
    },
    {
        question: "A task worker asks how they can monitor any updates occurring to records assigned to him, like responses from customers. What do you suggest?",
        type: "single",
        options: [
            "Open an Agent workspace tab for each record he wants to monitor",
            "Select Service Desk > My Work Dashboard",
            "Click on the eyeglass icon to expand the Monitor frame",
            "On My Work list, select the Activity Stream icon to show a frame with live updates"
        ],
        correct: [1],
        explanation: "The Service Desk > My Work Dashboard allows task workers to monitor updates to their assigned records. The PDF answer 'B' is correct."
    },
    {
        question: "ServiceNow is a single-instance, multiple tenant architecture?",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [1],
        explanation: "ServiceNow uses a multi-instance architecture, not single-instance, multiple-tenant. The PDF answer 'B' (False) is correct."
    },
    {
        question: "When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?",
        type: "single",
        options: [
            "On the list, locate and right click on the value Hardware, select Show Matching",
            "Click Funnel ten, type Hardware and click enter",
            "On the Category column header, right click and select Show > Hardware",
            "Right click on magnifier, type Hardware and click enter",
            "On Breadcrumb, click > icon, type Hardware and click enter"
        ],
        correct: [0],
        explanation: "Right-clicking a value like 'Hardware' and selecting 'Show Matching' filters the list. The PDF answer 'A' is correct."
    },
    {
        question: "UI Policy can make fields read-only, mandatory, or hidden.",
        type: "single",
        options: [],
        correct: [0],
        explanation: "The PDF lists 'A' as the answer, implying True (no options provided). This is correct; UI Policies can set fields to read-only, mandatory, or hidden."
    },

    


    // 201 -> 300
    {
        question: "When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?",
        type: "single",
        options: [
            "Trigger runtime value",
            "Sequence runtime value",
            "Starting runtime value",
            "Data pill runtime value",
            "Input runtime value"
        ],
        correct: [3],
        explanation: "In Flow Designer, the runtime value generated by an action is called a 'Data pill runtime value'. The PDF answer 'D' is correct."
    },
    {
        question: "From a form, what would you click to add additional fields to the form? (Choose two.)",
        type: "multiple",
        options: [
            "Context Menu > Form > Layout",
            "Context Menu > Configure > Form Layout",
            "Context Menu > Configure > Form Design",
            "Right click on header > Add > Field",
            "Context Menu > Form > Designer",
            "Right click on header > Configure > UX Dashboard"
        ],
        correct: [1, 3],
        explanation: "To add fields to a form, use 'Context Menu > Configure > Form Layout' or 'Right click on header > Add > Field'. The PDF answer 'B, D' is correct."
    },
    {
        question: "What import utility do you use when the field names on the import set match the name of the fields on the Target table?",
        type: "single",
        options: [
            "Schema Mapping",
            "Automatic Mapping",
            "Mapping Assist",
            "Mapping Dashboard"
        ],
        correct: [1],
        explanation: "Automatic Mapping is used when field names match between the import set and target table. The PDF answer 'B' is correct."
    },
    {
        question: "One related list, which buttons are commonly used for managing the records on the list? Choose 3 answers",
        type: "multiple",
        options: [
            "Publish",
            "New",
            "Ada",
            "Manage",
            "Edit"
        ],
        correct: [1, 4],
        explanation: "The PDF answer 'B, C, E' is incorrect. 'Ada' seems to be a typo (likely meant 'Add'). Correct answers are 'New' and 'Edit', commonly used to manage related list records. 'Publish' and 'Manage' are not typical."
    },
    {
        question: "Buttons, form links, and context menu items are all examples of what type of functionality?",
        type: "single",
        options: [
            "Business Rule",
            "UI Action",
            "Client Script",
            "UI Policy"
        ],
        correct: [1],
        explanation: "UI Actions include buttons, form links, and context menu items. The PDF answer 'B' is correct."
    },
    {
        question: "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
        type: "single",
        options: [
            "Select Data Source, Schedule Transform",
            "Load Data, Create Transform Map, Run Transform",
            "Define Data Source, Select Transform Map, Run Transform",
            "Select Import Set, Select Transform Map, Run Transform"
        ],
        correct: [1],
        explanation: "The PDF answer 'D' is incorrect. The correct process is 'Load Data, Create Transform Map, Run Transform' (B), which aligns with ServiceNow’s import process."
    },
    {
        question: "What is a Dictionary Override?",
        type: "single",
        options: [
            "A Dictionary Override is an incoming customer update in an Update Set which applies to the same objects as a newer local customer update",
            "A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT services",
            "A Dictionary Override is a task within a workflow that requests an action before the workflow can continue",
            "A Dictionary Override sets field properties in extended tables"
        ],
        correct: [3],
        explanation: "A Dictionary Override sets field properties (e.g., mandatory) in extended tables. The PDF answer 'D' is correct."
    },
    {
        question: "Where would you go in ServiceNow to order services and products offered by various departments?",
        type: "single",
        options: [
            "Service Catalog",
            "Self Service",
            "Service Department",
            "Customer Service"
        ],
        correct: [0],
        explanation: "The Service Catalog is where users order services and products. The PDF answer 'A' is correct."
    },
    {
        question: "Which section of the ServiceNow UI allows you to perform a global search?",
        type: "single",
        options: [
            "Application Navigator",
            "Banner frame",
            "List pane",
            "Content frame"
        ],
        correct: [1],
        explanation: "The Banner frame contains the global search bar. The PDF answer 'B' is correct."
    },
    {
        question: "What is a no-code approach to control the mandatory or read-only state of a form field?",
        type: "single",
        options: [],
        correct: [4],
        explanation: "The PDF answer 'E' suggests UI Policy (typically option E in CSA exams), a no-code method to control field states. No options provided, but 'UI Policy' is correct."
    },
    {
        question: "What would NOT appear in the Application Navigator if 'service' is typed into the filter field?",
        type: "single",
        options: [
            "Configuration > Business Services",
            "Self-Service > Knowledge",
            "Service Portal > Widgets",
            "Incident > Assigned to me"
        ],
        correct: [3],
        explanation: "Typing 'service' filters for modules with 'service' in the name. 'Incident > Assigned to me' does not contain 'service'. The PDF answer 'D' is correct."
    },
    {
        question: "What feature allows you to limit who is able to contribute or read knowledge within a knowledge base?",
        type: "single",
        options: [
            "Categories",
            "Roles",
            "User Criteria",
            "Groups"
        ],
        correct: [2],
        explanation: "User Criteria limits who can read or contribute to a knowledge base. The PDF answer 'C' is correct."
    },
    {
        question: "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that? Right click on Priority and select what?",
        type: "single",
        options: [
            "Configure Lists",
            "Show Options",
            "Configure Task",
            "Show Choices",
            "Show Choice List",
            "Configure Options"
        ],
        correct: [5],
        explanation: "To update Priority values globally (e.g., for all Tasks), right-click Priority and select 'Configure Options'. The PDF answer 'F' is correct."
    },
    {
        question: "How is a group defined in ServiceNow?",
        type: "single",
        options: [
            "A group is one record stored in the Group Type [sys_user_group_type] table",
            "A group is one record stored in the Group [sys_user_group] table",
            "A group defines a set of users that share the same location",
            "A group defines a set of users that share the same job title"
        ],
        correct: [1],
        explanation: "A group is a record in the [sys_user_group] table. The PDF answer 'B' is correct."
    },
    {
        question: "You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?",
        type: "single",
        options: [
            "Parent-Child Approvers",
            "Approval Chains",
            "Flows",
            "Approval Criteria",
            "Approver Delegates"
        ],
        correct: [2],
        explanation: "The PDF answer 'D' is incorrect. Flows (C) in Flow Designer manage multi-level approvals and notifications. 'Approval Criteria' is not a feature."
    },
    {
        question: "Security rules are defined to restrict the permission of users from viewing and interacting with data. What are these security rules called?",
        type: "single",
        options: [
            "Role Assignment Rules",
            "CRUD Rules",
            "Scripted User Rules",
            "Access Control Rules",
            "User Authentication Rules"
        ],
        correct: [3],
        explanation: "Access Control Rules (ACLs) restrict permissions. The PDF answer 'D' is correct."
    },
    {
        question: "Which type of scripts run in the browser?",
        type: "single",
        options: [
            "Script include Scripts",
            "Business Rule Scripts",
            "Access Control Scripts",
            "UI Policies and Client Scripts"
        ],
        correct: [3],
        explanation: "UI Policies and Client Scripts run in the browser. The PDF answer 'D' is correct."
    },
    {
        question: "What is the Import Set Table?",
        type: "single",
        options: [
            "A table where data will be placed, post-transformation",
            "A table that determines relationships",
            "A staging area for imported records",
            "A repository for Update Set information"
        ],
        correct: [2],
        explanation: "The Import Set Table is a staging area for imported records. The PDF answer 'C' is correct."
    },
    {
        question: "On the Form header, which icon do you use to access form templates?",
        type: "single",
        options: [
            "Paperclip",
            "Pages",
            "Stamp",
            "More Options (...)"
        ],
        correct: [3],
        explanation: "The 'More Options (...)' icon accesses form templates. The PDF answer 'D' is correct."
    },
    {
        question: "What defines conditions that are evaluated against users to determine which users can create, read, write, and retire knowledge articles?",
        type: "single",
        options: [],
        correct: [2],
        explanation: "The PDF answer 'C' suggests User Criteria (typically option C), which defines access to knowledge articles. No options provided, but 'User Criteria' is correct."
    },
    {
        question: "Which of the following statement describes the purpose of an Order Guide?",
        type: "single",
        options: [
            "Order Guides restrict the number of items in an order to only one item per request",
            "Order Guide provide a list of guidelines for Administrators on how to set up item variables",
            "Order Guide provide the ability to order multiple, related items as one request",
            "Order Guides take the user directly to the checkout without prompting for information"
        ],
        correct: [2],
        explanation: "Order Guides allow ordering multiple related items in one request. The PDF answer 'C' is correct."
    },
    {
        question: "How is the Event Log different from the Event Registry?",
        type: "single",
        options: [
            "Event Log contains generated Events, the Event Registry is a table of Event definitions",
            "Event Log is formatted in the Log style, the Event Registry displays different fields",
            "Event Log lists Events that were triggered by integrations, the Event Registry lists the Events that were triggered during the day (24-hour period)",
            "Event Log is the same as the Event Registry"
        ],
        correct: [0],
        explanation: "The Event Log records generated events, while the Event Registry defines events. The PDF answer 'A' is correct."
    },
    {
        question: "Which framework can automatically populate values for the priority and Category field based on the Short description field value?",
        type: "single",
        options: [
            "UI Policy",
            "Assignment Rule",
            "Action",
            "Predictive intelligence",
            "CSDM"
        ],
        correct: [0],
        explanation: "UI Policy can populate field values based on conditions. The PDF answer 'A' is correct."
    },
    {
        question: "Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?",
        type: "single",
        options: [
            "System Notification > Email > Notifications",
            "Administration > Notification Overview",
            "System Properties > Email > Settings",
            "User Preferences > Email > Notifications",
            "Click Gear > Notifications > New"
        ],
        correct: [0],
        explanation: "The module 'System Notification > Email > Notifications' is used to create notifications. The PDF answer 'A' is correct."
    },
    {
        question: "What is a role in ServiceNow?",
        type: "single",
        options: [
            "A role is one record in the Role [sys_user_role] table",
            "A role is one record in the Role [user_sys_role] table",
            "A role is a persona used In Live Feed Chat",
            "A role is a set of modules for a particular application"
        ],
        correct: [0],
        explanation: "A role is a record in the [sys_user_role] table. The PDF answer 'A' is correct."
    },
    {
        question: "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
        type: "multiple",
        options: [
            "Service Processes",
            "User Permissions",
            "Tables and Fields",
            "A Database",
            "The Dependency View"
        ],
        correct: [0, 2, 3, 4],
        explanation: "The CMDB involves Service Processes, Tables and Fields, A Database, and The Dependency View. The PDF answer 'A, C, D, E' is correct."
    },
    {
        question: "What types of entities can receive task assignments, in ServiceNow? Choose 2 answers",
        type: "multiple",
        options: [
            "Groups",
            "Users",
            "Departments",
            "Teams"
        ],
        correct: [0, 1],
        explanation: "Tasks can be assigned to Groups or Users. The PDF answer 'A, B' is correct."
    },
    {
        question: "Which certificate-based authentication methods can be enabled so that users can log into the Service Portal? Select 2 Answers from the below options",
        type: "multiple",
        options: [
            "Extended Validation Access (EVA)",
            "Organization Verification Card (OVC)",
            "Common Access Card (CAC)",
            "Domain Authentication Card (DAC)",
            "Personal Identify Verification (PIV)"
        ],
        correct: [2, 4],
        explanation: "CAC and PIV are supported certificate-based authentication methods. The PDF answer 'C, E' is correct."
    },
    {
        question: "You have heard about a new application released by ServiceNow. You want to try it out, to see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?",
        type: "single",
        options: [
            "Check the latest release notes at docs.servicenow.com",
            "Activate the application plug in, on your personal dev instance",
            "Search the wiki for the sales demo request form",
            "Activate the application plug in, on your company's production instance"
        ],
        correct: [1],
        explanation: "Activating a plugin on a personal dev instance is the best way to test a new application. The PDF answer 'B' is correct."
    },
    {
        question: "What framework can be used to manage the tables and CIs associated with a use case?",
        type: "single",
        options: [],
        correct: [0],
        explanation: "The PDF answer 'A' suggests CSDM (Common Services Data Model), typically option A, which manages tables and CIs for use cases. No options provided."
    },
    {
        question: "A new employee joins the IT deployment and needs to perform work assigned to Network and Hardware groups. How would you set up their access? Choose 3 answers",
        type: "multiple",
        options: [
            "Add User Account to itil group",
            "Add User Account to ACL",
            "Add User Account to network group",
            "Add User Account to IT Knowledgebase",
            "Create User Account",
            "Add User Account to Hardware group"
        ],
        correct: [2, 4, 5],
        explanation: "The PDF answer 'B, C, F' is incorrect for 'B'. Correct steps are: Create User Account (E), Add to Network group (C), Add to Hardware group (F). 'ACL' is not a group."
    },
    {
        question: "When you set a policy that is applied to all data entered into the platform (UI, Import Sets, or Web Services), where does this policy run by default?",
        type: "single",
        options: [
            "Client",
            "Server",
            "Browser",
            "Network"
        ],
        correct: [1],
        explanation: "The PDF answer 'A' is incorrect. Data Policies, which apply to all data entry methods, run on the server (B)."
    },
    {
        question: "What kind of data can Import Sets use to populate tables in ServiceNow?",
        type: "single",
        options: [
            "CSS, SOAP, and Excel",
            "XML, CSV, and Excel",
            "SOAP, REST, and XML",
            "XML, SOAP, and CSS"
        ],
        correct: [1],
        explanation: "Import Sets support XML, CSV, and Excel. The PDF answer 'B' is correct."
    },
    {
        question: "Which are states that you can make a field on a form using UI Policy?",
        type: "multiple",
        options: [
            "read-only",
            "write-only",
            "Necessary",
            "Mandatory",
            "Empty",
            "Hidden"
        ],
        correct: [0, 3, 5],
        explanation: "UI Policy can set fields to read-only, mandatory, or hidden. The PDF answer 'A, D, F' is correct."
    },
    {
        question: "What refers to an application or system that accesses a remote service or another computer system, known as a server?",
        type: "single",
        options: [
            "Server",
            "Client",
            "Script",
            "Policies"
        ],
        correct: [1],
        explanation: "A Client accesses a remote server. The PDF answer 'B' is correct."
    },
    {
        question: "Your customer requires that they be able to monitor which users are performing impersonations in their instance. What would you do to meet that requirement?",
        type: "single",
        options: [
            "Add the role Log Write [sn_log_write] to the Impersonator Group",
            "Create user update set for impersonation tracking",
            "Activate the glide.sys.log_impersonation prop",
            "From User icon, select Elevate Roles",
            "On the Impersonator role record, right click and select Create Log"
        ],
        correct: [2],
        explanation: "Activating 'glide.sys.log_impersonation' enables impersonation logging. The PDF answer 'C' is correct."
    },
    {
        question: "Knowledge articles within a knowledge base are grouped by category.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [0],
        explanation: "Knowledge articles are grouped by category. The PDF answer 'A' (True) is correct."
    },
    {
        question: "Which module would you use to customize your instances banner image, text and colors?",
        type: "single",
        options: [
            "System UI > UI Pages > Branding",
            "System Properties > Branding",
            "System Properties > Basic Configuration UI16",
            "Service Portal > Portals > Branding"
        ],
        correct: [2],
        explanation: "The PDF answer 'D' is incorrect. 'System Properties > Basic Configuration UI16' (C) customizes banner image, text, and colors."
    },
    {
        question: "Which of the following is used to categorize, flag, and locate records?",
        type: "single",
        options: [
            "Search",
            "Favorites",
            "Tags",
            "Bookmarks"
        ],
        correct: [2],
        explanation: "Tags categorize, flag, and locate records. The PDF answer 'C' is correct."
    },
    {
        question: "What are advantages of using spokes for integrations? Choose 3 answers",
        type: "multiple",
        options: [],
        correct: [0, 3, 4],
        explanation: "The PDF answer 'A, D, E' suggests common advantages: pre-built actions (A), reduced coding (D), and third-party integration (E). No options provided."
    },
    {
        question: "What is the best practice related to using the Default Update Set for moving customizations between instances?",
        type: "single",
        options: [
            "Merge Default update sets before moving between instances",
            "Submit Default update set to application repository",
            "You should not use the Default Update sets for moving between instances",
            "Keep Default update set to maximum of 20 records, for troubleshooting purposes"
        ],
        correct: [2],
        explanation: "The PDF answer 'B' is incorrect. Best practice is 'C': avoid using the Default Update Set for moving customizations."
    },
    {
        question: "What is the result of the order in which access controls are evaluated?",
        type: "single",
        options: [
            "Ensures user has access to the fields in a table, before considering their access to the table",
            "Ensures user can get to work as quickly as possible",
            "Ensures user has access to the application, before evaluating access to a module within the application",
            "Ensures user has access to a table, before evaluating access to a field in the table"
        ],
        correct: [3],
        explanation: "ACLs evaluate table access before field access. The PDF answer 'A' is incorrect; 'D' is correct."
    },
    {
        question: "In addition to the admin role, which one of the following roles allows a user to add or remove fields from a list?",
        type: "single",
        options: [
            "personalize_control",
            "personal_list",
            "ul_page_admin",
            "ui_action_admin"
        ],
        correct: [0],
        explanation: "The 'personalize_control' role allows list customization. The PDF answer 'A' is correct."
    },
    {
        question: "What icon do you use to change the icon and color on a Favorite?",
        type: "single",
        options: [
            "Star",
            "Triangle",
            "Pencil",
            "Clock"
        ],
        correct: [2],
        explanation: "The Pencil icon changes a Favorite’s icon and color. The PDF answer 'C' is correct."
    },
    {
        question: "A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed, Incidents where Assignment Group is Network. After clicking the Funnel icon, what should the user do?",
        type: "single",
        options: [
            "Define the first condition; click AND button; define second condition; click Run",
            "Define the first condition; click AND button; define second condition; press enter",
            "Define the first condition; click OR button; define second condition; press enter",
            "Define the first condition; click > icon on breadcrumb, define second condition; click Run",
            "Define the first condition; click > icon on breadcrumb, define second condition; press enter"
        ],
        correct: [0],
        explanation: "Use 'AND' and click 'Run' to apply both conditions. The PDF answer 'A' is correct."
    },
    {
        question: "What icon do you use to change the icon and color on a Favorite?",
        type: "single",
        options: [
            "Pencil",
            "Star",
            "Clack",
            "Tringle"
        ],
        correct: [0],
        explanation: "The Pencil icon is used (despite typos in options). The PDF answer 'A' is correct."
    },
    {
        question: "When a custom table is created, which access control rules are automatically created? Choose 4 answers",
        type: "multiple",
        options: [
            "delete",
            "create",
            "execute",
            "read",
            "update",
            "write"
        ],
        correct: [0, 1, 3, 5],
        explanation: "The PDF answer 'A, B, D, F' is partially correct. Correct ACLs are 'create', 'read', 'write', 'delete'. 'Update' is not a default operation; 'write' covers it."
    },
    {
        question: "When would you use the following steps? 1. Homepage Admin > Pages, Right click on Homepage record, Select Unload Portal Page",
        type: "single",
        options: [
            "To publish a Homepage to the Portal",
            "To retire a Homepage",
            "To delete a Homepage",
            "To add a Homepage to an update set"
        ],
        correct: [3],
        explanation: "'Unload Portal Page' adds a homepage to an update set. The PDF answer 'D' is correct."
    },
    {
        question: "Which ServiceNow utility gives a Service Desk agent the ability to trace from a Service having an issue, to see which CIs supporting that service have active issues?",
        type: "single",
        options: [
            "AL Service Dashboard",
            "CI Health Dashboard",
            "Dependency View",
            "Event Management Homepage"
        ],
        correct: [1],
        explanation: "CI Health Dashboard traces CI issues for a service. The PDF answer 'B' is correct."
    },
    {
        question: "The customer has asked that you change the default layout of the task list. Number, Task Type, Parent, Short Description, Assignment Group, Assignment, Updated. After navigation to the list, where would you click, to meet this requirement?",
        type: "single",
        options: [],
        correct: [1],
        explanation: "The PDF answer 'B' suggests the Gear icon (typically B), used to personalize list layouts. No options provided."
    },
    {
        question: "Which one of the following describes the primary operations performed against tables in the ServiceNow platform?",
        type: "single",
        options: [
            "Create, Rate, Update, Delete",
            "Create, Read, Upload, Delete",
            "Create, Read, Write, Delete",
            "Capture, Rate, Write, Develop"
        ],
        correct: [2],
        explanation: "CRUD operations are Create, Read, Write, Delete. The PDF answer 'C' is correct."
    },
    {
        question: "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
        type: "multiple",
        options: [
            "Group",
            "Department",
            "My reports",
            "Team",
            "Dashboards",
            "Global",
            "Admin",
            "Analytics",
            "All",
            "Company"
        ],
        correct: [0, 4, 5, 6],
        explanation: "The PDF answer 'A, E, F, G' is correct: Group, Dashboards, Global, Admin show report visibility."
    },
    {
        question: "What are advantages of using Flow Designer? (Choose three.)",
        type: "multiple",
        options: [
            "Supports advanced developers",
            "Enables complicated scripting",
            "Reduces technical debt",
            "Less manual scripting",
            "Smooth integration with 3rd party systems"
        ],
        correct: [0, 3, 4],
        explanation: "The PDF answer 'A, D, E' is correct: Flow Designer supports developers, reduces scripting, and integrates smoothly."
    },
    {
        question: "What type of field has a drop down list, from which you can pick from pre-defined options?",
        type: "single",
        options: [
            "Choice",
            "Picker",
            "Drop down",
            "Option"
        ],
        correct: [0],
        explanation: "A Choice field provides a dropdown with pre-defined options. The PDF answer 'A' is correct."
    },
    {
        question: "Which of the following statements describes how data is organized in a table?",
        type: "single",
        options: [
            "A column is a field in the database and a record is one user",
            "A column is one field and a record is one row",
            "A column is one field and a record is one column",
            "A column contains data from one user and a record is one set of fields"
        ],
        correct: [1],
        explanation: "The PDF answer 'A' is incorrect. Correct is 'B': A column is a field, and a record is a row."
    },
    {
        question: "A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?",
        type: "single",
        options: [
            "Scheduled Reports, a custom snapshot table, and a Trend report",
            "Scheduled Reports and Excel",
            "Scheduled Reports, a custom snapshot table, and a Projection report",
            "Performance Analytics",
            "Key Performance Indicators"
        ],
        correct: [3],
        explanation: "Performance Analytics provides trends and forecasts. The PDF answer 'D' is correct."
    },
    {
        question: "ServiceNow contains over 25 different report types. What are some of the types? Choose 5 answers",
        type: "multiple",
        options: [
            "Pie",
            "Speedometer",
            "Odometer",
            "Thermometer",
            "Horizontal Bar",
            "Semi-Donut",
            "Donut"
        ],
        correct: [0, 1, 4, 5, 6],
        explanation: "The PDF answer 'A, B, E, F, G' is correct: Pie, Speedometer, Horizontal Bar, Semi-Donut, Donut are report types."
    },
    {
        question: "Which role can manage multiple knowledge bases?",
        type: "single",
        options: [
            "knowledge_base_admin",
            "kb_admin",
            "sn_kb_admin",
            "knowledge_admin"
        ],
        correct: [3],
        explanation: "The 'knowledge_admin' role manages multiple knowledge bases. The PDF answer 'D' is correct."
    },
    {
        question: "Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)",
        type: "multiple",
        options: [
            "One Approval can have many Requests",
            "One Request can have many Requested Items",
            "One Requested Item can have many Approvals",
            "One Requested Item can have many Catalog Tasks",
            "One Cart can have many Requests"
        ],
        correct: [1, 3, 4],
        explanation: "The PDF answer 'B, D, E' is correct: One Request -> many Requested Items, One Requested Item -> many Catalog Tasks, One Cart -> many Requests."
    },
    {
        question: "Which of the following allows a user to edit field values in a list without opening the form?",
        type: "single",
        options: [],
        correct: [2],
        explanation: "The PDF answer 'C' suggests List Edit (typically C), which allows editing in a list. No options provided."
    },
    {
        question: "When adding a related list to a form, you choose the related list from the list collector. What is an example of a related list you might see on the list collector? Choose 3 answers:",
        type: "multiple",
        options: [
            "Release Phase==Parent",
            "Catalog Task->Parent",
            "HR Case-=Parent",
            "Problem==Parent",
            "Outage->Task number"
        ],
        correct: [1, 2, 4],
        explanation: "The PDF answer 'B, C, E' is correct: Catalog Task->Parent, HR Case-=Parent, Outage->Task number are valid related lists."
    },
    {
        question: "On what part of the ServiceNow instance, would you find the option to impersonate User?",
        type: "single",
        options: [
            "Module",
            "Application Navigator",
            "Banner",
            "Content Frame"
        ],
        correct: [2],
        explanation: "The impersonate option is in the Banner. The PDF answer 'C' is correct."
    },
    {
        question: "Which type of ServiceNow script runs on the web browser?",
        type: "single",
        options: [
            "Server script",
            "Local script",
            "Database script",
            "Client script"
        ],
        correct: [3],
        explanation: "Client scripts run in the browser. The PDF answer 'D' is correct."
    },
    {
        question: "Which application is used to change the number format per table?",
        type: "single",
        options: [
            "Number Maintenance",
            "System Maintenance",
            "Table Maintenance",
            "Record Maintenance"
        ],
        correct: [0],
        explanation: "Number Maintenance adjusts number formats per table. The PDF answer 'A' is correct."
    },
    {
        question: "Which one of the following statements describes the purpose of a Service Catalog workflow?",
        type: "single",
        options: [
            "A Service Catalog workflow generates three basic components: item variable types, tasks, and approvals",
            "Although a Service Catalog workflow cannot send notifications, the workflow drives complex fulfillment processes",
            "A Service Catalog workflow is used to drive complex fulfillment processes and sends notifications to defined users or groups",
            "A Service Catalog workflow generates three basic components: item variable types, tasks, and notifications"
        ],
        correct: [2],
        explanation: "Service Catalog workflows handle fulfillment and notifications. The PDF answer 'C' is correct."
    },
    {
        question: "What are the components that make up a filter condition? Choose 3 answers",
        type: "multiple",
        options: [
            "Column",
            "Match Criteria",
            "Field",
            "Value",
            "Operator"
        ],
        correct: [2, 3, 4],
        explanation: "A filter condition includes Field, Value, and Operator. The PDF answer 'C, D, E' is correct."
    },
    {
        question: "Which one of the following statements is true about Column Context Menus?",
        type: "single",
        options: [
            "It displays actions such as creating quick reports, configuring the list, and exporting data",
            "It displays actions related to filtering options, assigning tags, and search",
            "It displays actions related to viewing and filtering the entire list",
            "It displays actions such as view form, view related task, and add relationship"
        ],
        correct: [0],
        explanation: "Column Context Menus offer actions like quick reports and exports. The PDF answer 'A' is correct."
    },
    {
        question: "What are examples of UI Actions relating to forms? Choose 3 answers",
        type: "multiple",
        options: [
            "Form Context Menu",
            "Form View",
            "Form Buttons",
            "Form Links",
            "Form Columns"
        ],
        correct: [0, 2, 3],
        explanation: "The PDF answer 'A, C, D' is correct: Form Context Menu, Form Buttons, and Form Links are UI Actions."
    },
    {
        question: "Which feature helps to automatically allocate a critical, high priority, service request to the appropriate assignment group or team member?",
        type: "single",
        options: [
            "User Policy",
            "UI policy",
            "Predictive Intelligence",
            "Assignment Rule"
        ],
        correct: [3],
        explanation: "Assignment Rules auto-allocate requests. The PDF answer 'D' is correct."
    },
    {
        question: "A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application. You have confirmed that they can see the Inventory application, and the Create New module on the application navigator. What could be the cause of this issue?",
        type: "single",
        options: [],
        correct: [4],
        explanation: "The PDF answer 'E' suggests an ACL issue (typically E), restricting create access. No options provided."
    },
    {
        question: "How are local flow variables accessed in the Flow Designer Data panel?",
        type: "single",
        options: [
            "As newly generated icons",
            "As scratchpad variables",
            "As new tabs",
            "As data pills"
        ],
        correct: [3],
        explanation: "Local flow variables are accessed as data pills. The PDF answer 'D' is correct."
    },
    {
        question: "A REQ number in the Service Catalog represents...",
        type: "single",
        options: [
            "the order number",
            "the stage",
            "the task to complete",
            "the individual item in the order"
        ],
        correct: [0],
        explanation: "A REQ number is the order number. The PDF answer 'A' is correct."
    },
    {
        question: "You have been asked to configure a form so an employee could order a tablet and select the standard accessory options to purchase with it. These standard options are: carrying case, screen cleaner, tablet stand, and screen protector. What approach would you take? Choose 3 answers",
        type: "multiple",
        options: [
            "Create Catalog item for the tablet, and on the form, add a check box variable for each accessory option",
            "Create Catalog item for the tablet, and add a variable set to the form, for the accessory options",
            "Create one Catalog item for each: tablet, carrying case, screen cleaner, tablet stand, and screen protector",
            "Create a Record producer, and on the form, add a check box variable for each accessory option",
            "On shopping Cart configuration, select option to show the Add Accessories button"
        ],
        correct: [0, 1],
        explanation: "The PDF answer 'A, B, C' is incorrect. Correct: A (checkbox variables) and B (variable set). C is inefficient."
    },
    {
        question: "Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non-managers) can submit the order?",
        type: "single",
        options: [
            "Create Record Producer and use the Available For list to specify First Line [sn_first_line] role",
            "Create Catalog Item and use the Not Available list to specify the Manager Group",
            "Create Catalog Item and use the Available For list to specify ITIL [itil] role",
            "Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role"
        ],
        correct: [1],
        explanation: "Using 'Not Available' for the Manager Group restricts access. The PDF answer 'B' is correct."
    },
    {
        question: "Groups are stored in what table?",
        type: "single",
        options: [
            "Group [sys_user_group]",
            "Group [sn_sys_user_group]",
            "User Group [user_groups]",
            "User Groups [sn_user_groups]",
            "Groups [sys_user_groups]"
        ],
        correct: [0],
        explanation: "Groups are stored in [sys_user_group]. The PDF answer 'A' is correct."
    },
    {
        question: "Many actions are included with Flow Designer, what are some frequently used core actions? Choose 4 answers",
        type: "multiple",
        options: [
            "Wait for Condition",
            "Ask for Approval",
            "Create Record",
            "Wait for Match",
            "Look for Update",
            "Look Up Record"
        ],
        correct: [1, 2, 5],
        explanation: "The PDF answer 'B, C, D, F' is incorrect. Correct: Ask for Approval (B), Create Record (C), Look Up Record (F). 'Wait for Match' (D) is not a core action."
    },
    {
        question: "What access does a user need to be able to import articles to a knowledge base?",
        type: "single",
        options: [
            "Can contribute",
            "sn_knowledge_contribute",
            "sn_knowledge_import",
            "Can import"
        ],
        correct: [0],
        explanation: "'Can contribute' access allows importing articles. The PDF answer 'A' is correct."
    },
    {
        question: "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
        type: "single",
        options: [
            "Agent Workspace",
            "Chat bot",
            "Virtual Agent",
            "Knowledge Chat",
            "Now Support"
        ],
        correct: [2],
        explanation: "Virtual Agent assists via a messaging interface. The PDF answer 'C' is correct."
    },
    {
        question: "What is a Notification?",
        type: "single",
        options: [
            "A new Knowledge article created by a Business Rule",
            "A tool for alerting users that events that concern them have occurred",
            "A message through Connect related to a Change Request",
            "An email file attachment"
        ],
        correct: [1],
        explanation: "Notifications alert users about events. The PDF answer 'B' is correct."
    },
    {
        question: "Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?",
        type: "single",
        options: [],
        correct: [1],
        explanation: "The PDF answer 'B' suggests Dependency View (typically B), which shows CI relationships. No options provided."
    },
    {
        question: "What is the difference between a UI Policy and Data Policy?",
        type: "single",
        options: [
            "Data Policies run only after UI Policies run successfully",
            "Data Policies run regardless of how data is entered Into ServiceNow, while UI Policies are used for form interactions",
            "Data Policies can be converted into UI Policies, but UI Policies can not be converted into Data Policies",
            "Data Policies run when data is entered through the form, by an Import Set or by web services, while UI Policies are set only by web services"
        ],
        correct: [1],
        explanation: "The PDF answer 'D' is incorrect. Correct is 'B': Data Policies apply universally, UI Policies are form-specific."
    },
    {
        question: "What is a characteristic of importing data into ServiceNow?",
        type: "single",
        options: [
            "An existing Transform Map can be used one time on the same import set",
            "Coalesce fields are used only after running Transform",
            "Any user can manage and set up import sets",
            "An existing Transform Map can be used multiple times on the same import set"
        ],
        correct: [3],
        explanation: "A Transform Map can be reused on the same import set. The PDF answer 'D' is correct."
    },
    {
        question: "The baseline Service Catalog homepage contains links to which of the following components?",
        type: "single",
        options: [
            "Record Producers, Order Guides, and Catalog Items",
            "Order Guides, Item Variables, and Workflows",
            "Order Guides, Catalog Items, and Workflows",
            "Record Producers, Order Guides, and Item Variables"
        ],
        correct: [0],
        explanation: "The Service Catalog homepage links to Record Producers, Order Guides, and Catalog Items. The PDF answer 'A' is correct."
    },
    {
        question: "What is the most common role that has access to almost all platform features, functions, and data?",
        type: "single",
        options: [
            "Security Admin [security_admin]",
            "Sys Admin [sys_admin]",
            "Admin [sn_admin]",
            "System Administrator [admin]",
            "Base Admin [base_admin]"
        ],
        correct: [3],
        explanation: "The PDF answer 'C' is incorrect. The 'admin' role (D) has broad access. 'sn_admin' is not a standard role."
    },
    {
        question: "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
        type: "single",
        options: [
            "Mapping fields using the Import Log",
            "Mapping fields using Transform History",
            "Mapping fields using an SLA",
            "Mapping fields using a Field Map"
        ],
        correct: [3],
        explanation: "Mapping Assist maps fields using a Field Map. The PDF answer 'D' is correct."
    },
    {
        question: "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
        type: "single",
        options: [
            "A metric is a report gauge used on homepages to display real-time data",
            "A metric is a time measurement used to report the effectiveness of workflows and SLAs",
            "A metric is used to measure and evaluate the effectiveness of IT service management processes",
            "A metric is a comparative measurement used to report the effectiveness of workflows and SLAs"
        ],
        correct: [2],
        explanation: "Metrics measure IT service management process effectiveness. The PDF answer 'C' is correct."
    },
    {
        question: "When creating a global custom table named 'abc', what is the table name that is automatically assigned by the platform?",
        type: "single",
        options: [
            "snc_abc",
            "abc",
            "u_abc",
            "sys_abc"
        ],
        correct: [2],
        explanation: "Global custom tables are prefixed with 'u_'. The PDF answer 'C' is correct."
    },
    {
        question: "What controls the publishing and retiring process for knowledge articles?",
        type: "single",
        options: [
            "Approval Policies",
            "Approval Definitions",
            "Workflow Designer",
            "Workflows",
            "State Lifecycle"
        ],
        correct: [3],
        explanation: "Workflows control knowledge article publishing and retiring. The PDF answer 'D' is correct."
    },
    {
        question: "Which one of the following is NOT a type of Visual Task Board?",
        type: "single",
        options: [
            "Feature",
            "Guided boards",
            "Flexible",
            "Freeform"
        ],
        correct: [0],
        explanation: "'Feature' is not a Visual Task Board type; Guided, Flexible, and Freeform are. The PDF answer 'A' is correct."
    },
    {
        question: "A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?",
        type: "single",
        options: [],
        correct: [4],
        explanation: "The PDF answer 'E' suggests adjusting the user's time zone (typically E). No options provided."
    },
    {
        question: "Which of the following statements is true when a new table is created by extending another table?",
        type: "single",
        options: [
            "The new table archives the parent table and assumed its roles in the database",
            "The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but none of the existing fields",
            "The new table inherits all of the fields of the parent table and can also contain new fields unique to itself",
            "The new table inherits all of the fields, but does not inherit Access Control rules, Client Scripts, and UI Policies of the parent table"
        ],
        correct: [2],
        explanation: "Extended tables inherit parent fields and can add unique fields. The PDF answer 'C' is correct."
    },
    {
        question: "While on an Incident record, how would you add a Tag for 'Special Handling' to the record?",
        type: "single",
        options: [
            "Click on the More options (.,.) icon, click Add Tag, type Special Handling, press enter",
            "On the Special Handling field, check the box",
            "On the Tag field, select Special Handling from the choice list",
            "Click on the Context menu, select Add Tag, type Special Handling, press enter"
        ],
        correct: [0],
        explanation: "Use the More options (...) icon to add a tag. The PDF answer 'A' is correct."
    },
    {
        question: "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
        type: "single",
        options: [
            "They direct the user to a record producer",
            "They direct the user to a catalog property",
            "They direct the user to a catalog UI policy",
            "They direct the user to a catalog client script"
        ],
        correct: [0],
        explanation: "These services use Record Producers. The PDF answer 'A' is correct."
    },
    {
        question: "On Access Control Definitions, what are ways you can set the permissions on a Table? Choose 3 answers",
        type: "multiple",
        options: [
            "Groups",
            "CRUD",
            "Roles",
            "Script that sets the answer variable to true or false",
            "Conditional Expressions"
        ],
        correct: [2, 3, 4],
        explanation: "ACLs use Roles, Scripts, and Conditional Expressions. The PDF answer 'C, D, E' is correct."
    },
    {
        question: "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
        type: "multiple",
        options: [
            "Most recent update",
            "Popularity",
            "Relevancy",
            "Manager assignment",
            "Number of views"
        ],
        correct: [0, 2, 4],
        explanation: "Search results can be sorted by Most recent update, Relevancy, and Number of views. The PDF answer 'A, C, E' is correct."
    },
    {
        question: "From the User menu, which actions can a user select? (Choose three.)",
        type: "multiple",
        options: [
            "Send Notifications",
            "Log Out ServiceNow",
            "Elevate Roles",
            "Impersonate Users",
            "Order from Service Catalog",
            "Approve Records"
        ],
        correct: [1, 2, 3],
        explanation: "The User menu includes Log Out, Elevate Roles, and Impersonate Users. The PDF answer 'B, C, D' is correct."
    },
    {
        question: "What is the language used for scripting in ServiceNow?",
        type: "single",
        options: [
            "JavaScript",
            "C++",
            "PHP",
            "Python"
        ],
        correct: [0],
        explanation: "ServiceNow uses JavaScript for scripting. The PDF answer 'A' is correct."
    },
    {
        question: "In what order should filter elements be specified?",
        type: "single",
        options: [
            "Field, Operator, then Value",
            "Field, Operator, then Condition",
            "Operator, Condition, then Value",
            "Value, Operator, then Field"
        ],
        correct: [0],
        explanation: "Filters are specified as Field, Operator, Value. The PDF answer 'A' is correct."
    },
    {
        question: "On a form header, what icon would you click to access Template features?",
        type: "single",
        options: [
            "Paper clip",
            "More options (...)",
            "Stamp",
            "Context Menu"
        ],
        correct: [1],
        explanation: "The 'More options (...)' icon accesses templates. The PDF answer 'B' is correct."
    },
    {
        question: "How would you navigate to the Schema map for a table?",
        type: "single",
        options: [
            "System Dictionary > Show Schema Map; Select Table",
            "System Definition > Tables; Select Table; Go to Related links led links and click links and click Show Schema Map",
            "System Definition > Show Schema Map; Select Table",
            "System Definition > Dictionary: Select Table; Go to Related links and click Show Schema Map",
        ],
        correct: [1],
        explanation: "The PDF answer 'B' suggests 'System Definition > Tables > Schema Map' (typically B). No options provided."
    },



    
    // 301 -> end
    {
        question: "When selecting the Target table for an import, which tables can you select? Choose 3 answers",
        type: "multiple",
        options: [
            "Tables within the global scope",
            "Tables within the existing application scope",
            "Tables outside of ServiceNow",
            "Tables which allow write access to other applications",
            "Related tables, using Dot Walk"
        ],
        correct: [0, 1, 3],
        explanation: "Target tables for imports can be in the global scope (A), existing application scope (B), or allow write access to other applications (D). The PDF answer 'A, B, D' is correct."
    },
    {
        question: "Which field (or fields) is used as a unique key during imports?",
        type: "single",
        options: [
            "Match Fields",
            "Coalesce Fields",
            "Key Fields",
            "Sys IDs"
        ],
        correct: [1],
        explanation: "Coalesce Fields determine uniqueness during imports. The PDF answer 'B' is correct."
    },
    {
        question: "Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?",
        type: "single",
        options: [
            "Requests can contain many items; and Items can be any item from the catalog.",
            "Vendors can sell multiple products; and products can be sold by multiple vendors.",
            "A Task can trigger many Workflows; and a Workflow can trigger many Tasks",
            "A Configuration Item can belong to multiple Classes; and Classes can contain multiple Configuration Items."
        ],
        correct: [1],
        explanation: "Vendors and products is a classic many-to-many example. The PDF answer 'B' is correct."
    },
    {
        question: "Which statement correctly describes the differences between a Client Script and a Business Rule?",
        type: "single",
        options: [
            "A Client Script executes before a record is loaded and a Business Rule executes after a record is loaded",
            "A Client Script executes on the server and a Business Rule executes on the client",
            "A Client Script executes on the client and a Business Rule executes on the",
            "A Client Script executes before a record is loaded and a Business Rule executes after a record is updated"
        ],
        correct: [2],
        explanation: "Client Scripts run on the client, Business Rules on the server. Option C is incomplete but correct in intent. The PDF answer 'C' is accepted."
    },
    {
        question: "Which component of a table contains a piece of data for one record?",
        type: "single",
        options: [
            "Factor",
            "Field",
            "Datapoint",
            "Element",
            "Item"
        ],
        correct: [1],
        explanation: "A Field holds data for a record. The PDF answer 'B' is correct."
    },
    {
        question: "What does Natural Language Query allow you to do on a list?",
        type: "single",
        options: [
            "Automatically select a filter, based on keywords",
            "Filter list by typing in a phrase",
            "Predict the filter desired by the user",
            "Speak to the condition builder",
            "Set list filter, using audible commands"
        ],
        correct: [0],
        explanation: "Natural Language Query auto-selects filters based on keywords. The PDF answer 'A' is correct."
    },
    {
        question: "A role is recorded in which table?",
        type: "single",
        options: [
            "Role[sys_user]",
            "Role[sys_user_profile]",
            "Role[sys_user_record]",
            "Role[sys_user_role]"
        ],
        correct: [3],
        explanation: "The PDF answer 'A' is incorrect. Roles are stored in [sys_user_role] (D)."
    },
    {
        question: "What is a way that you can mark a knowledge article for review?",
        type: "single",
        options: [
            "Flag article",
            "Review",
            "Bookmark",
            "On Hold"
        ],
        correct: [0],
        explanation: "Flagging an article marks it for review. The PDF answer 'A' is correct."
    },
    {
        question: "When building an extended table from a base table, which fields do you need to create? Choose 2 answers",
        type: "multiple",
        options: [
            "The mandatory fields for the base table.",
            "The reference fields for the base table.",
            "The fields that are not in the base table.",
            "The fields that are specific to the extended table."
        ],
        correct: [2, 3],
        explanation: "You create fields not in the base table (C) and specific to the extended table (D). The PDF answer 'C, D' is correct."
    },
    {
        question: "Which of the following are not included in an Update Set, by default? (Choose four.)",
        type: "multiple",
        options: [],
        correct: [0, 1, 4, 5],
        explanation: "The PDF answer 'A, B, E, F' suggests common exclusions: Data, Scheduled Jobs, Users, Groups (typically A, B, E, F). No options provided."
    },
    {
        question: "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
        type: "single",
        options: [
            "Maintain Categories",
            "Maintain Items",
            "Content Items",
            "Items"
        ],
        correct: [1],
        explanation: "'Maintain Items' is used to create catalog items. The PDF answer 'B' is correct."
    },
    {
        question: "What information does the System Dictionary contain?",
        type: "single",
        options: [
            "The human-readable labels and language settings",
            "The definition for each table and column",
            "The information on how tables relate to each other",
            "The language dictionary used for spell checking"
        ],
        correct: [1],
        explanation: "The System Dictionary defines tables and columns. The PDF answer 'B' is correct."
    },
    {
        question: "What is an Event in ServiceNow?",
        type: "single",
        options: [
            "An Event is a trigger that has a direct response in the platform",
            "An Event is an indication to the ServiceNow processes that something has occurred",
            "An Event is an indicator that a Priority 1 (P1) Incident has been logged",
            "An Event is a recognized, scheduled occurrence of a process"
        ],
        correct: [1],
        explanation: "An Event indicates something has occurred. The PDF answer 'B' is correct."
    },
    {
        question: "Which type of scripts run in the browser?",
        type: "single",
        options: [
            "Policies and Client Scripts",
            "Access Control Scripts",
            "Script Include Scripts",
            "Business Rule Scripts"
        ],
        correct: [0],
        explanation: "UI Policies and Client Scripts run in the browser. The PDF answer 'A' is correct."
    },
    {
        question: "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
        type: "single",
        options: [
            "The CMDB contains data about tangible and intangible business assets",
            "The CMDB contains the Business Rules that direct the intangible, configurable assets used by a company",
            "The CMDB archives all Service Management PaaS equipment metadata and usage statistics",
            "The CMDB contains ITIL process data pertaining to configuration items"
        ],
        correct: [0],
        explanation: "The CMDB holds tangible and intangible asset data. The PDF answer 'A' is correct."
    },
    {
        question: "You have an existing customer, who is using workflows for their catalog items. Their existing purchasing policy is to require approval for any request that totals over 31000. However, management wants to change the approval threshold to 31500. Which workflow would you update to make this change?",
        type: "single",
        options: [
            "Services Approval Processing",
            "6 Services Catalog Item Request",
            "Service Catalog Request",
            "Purchasing Process Flow"
        ],
        correct: [2],
        explanation: "'Service Catalog Request' workflow handles catalog approvals. The PDF answer 'C' is correct."
    },
    {
        question: "What feature do you use to specify which users are able to access a Service Catalog Item?",
        type: "single",
        options: [
            "Can Read Role",
            "Catalog User Role",
            "Can Order Tab",
            "User Criteria"
        ],
        correct: [3],
        explanation: "User Criteria controls catalog item access. The PDF answer 'D' is correct."
    },
    {
        question: "What is the platform name for the User table?",
        type: "single",
        options: [
            "u_users",
            "sys_users",
            "x_users",
            "sys_user"
        ],
        correct: [3],
        explanation: "The User table is [sys_user]. The PDF answer 'D' is correct."
    },
    {
        question: "When looking at a long list of records, you want to quickly filter, to show only those which have Short Description containing email. How might you do that?",
        type: "single",
        options: [
            "Click List Magnifier to expand column search, on Short Description, type \"email, click enter",
            "Click List Magnifier to expand column search, on Short Description, type *email, click enter",
            "Click List Magnifier to expand column search, on Short Description, type email, click enter",
            "On Search box, select text, type email, click enter"
        ],
        correct: [1],
        explanation: "The PDF answer 'A' is incorrect. '*email' (B) filters for Short Descriptions containing 'email'."
    },
    {
        question: "Each knowledge base can have unique lifecycle workflows, user criteria, category structures, and management assignments.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [0],
        explanation: "Knowledge bases can have unique configurations. The PDF answer 'A' (True) is correct."
    },
    {
        question: "As administrator, what must you do to access features of High Security Settings?",
        type: "single",
        options: [
            "Select Elevate Roles",
            "Add security_admin role to your user account",
            "Impersonate Security Admin",
            "Use System Administrator < Elevate Roles module"
        ],
        correct: [0],
        explanation: "Elevating roles to security_admin grants access. The PDF answer 'A' is correct."
    },
    {
        question: "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
        type: "single",
        options: [
            "Task Escalation Clock",
            "Service Level Agreements",
            "Inactivity Monitor",
            "Response Time Clock",
            "Business Time Remaining"
        ],
        correct: [1],
        explanation: "Service Level Agreements (SLAs) track task timing. The PDF answer 'B' is correct."
    },
    {
        question: "For your implementation, the following tables are extended from each other: Incident table is extended from Task table. Super Incident table is extended from Incident table. In this situation, which table(s) are Parent, Child and Base tables? Choose 5 answers",
        type: "multiple",
        options: [
            "Incident table is a Base table",
            "Incident table is a Parent table",
            "Incident table is a Child table",
            "Super Incident table is a Child table",
            "Super Incident table is a Parent table",
            "Super Incident table is a Base table",
            "Task table is a Base table",
            "Task table is a Parent table",
            "Task table is a Child table"
        ],
        correct: [1, 2, 3, 6, 7],
        explanation: "Incident is Parent (B) to Super Incident and Child (C) to Task. Super Incident is Child (D). Task is Base (G) and Parent (H). The PDF answer 'B, C, D, G, H' is correct."
    },
    {
        question: "Configuration will not affect what others see on their forms.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [1],
        explanation: "Configuration changes (e.g., Form Layout) affect all users. The PDF answer 'B' (False) is correct."
    },
    {
        question: "An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this? Choose 2 answers",
        type: "multiple",
        options: [
            "Their user account does not belong to any groups, which contain the itil role",
            "Their user account failed LDAP authentication",
            "Their user account does not have itil role",
            "Their user account is not logged in properly",
            "Their user account was not approved by their manager"
        ],
        correct: [0, 2],
        explanation: "The PDF answer 'B, E' is incorrect. Lack of 'itil' role (C) or group with 'itil' (A) restricts access to Self-Service."
    },
    {
        question: "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
        type: "multiple",
        options: [
            "onSubmit",
            "onUpdate",
            "onCellEdit",
            "onLoad",
            "onEdit",
            "onChange",
            "onSave"
        ],
        correct: [0, 2, 3, 5],
        explanation: "Client script types are onSubmit (A), onCellEdit (C), onLoad (D), onChange (F). The PDF answer 'A, C, D, F' is correct."
    },
    {
        question: "What section on a task record would you use to see the most recent update made to a record?",
        type: "single",
        options: [
            "Timeline",
            "Journal",
            "Audit Log",
            "Activity"
        ],
        correct: [3],
        explanation: "The Activity section shows recent updates. The PDF answer 'D' is correct."
    },
    {
        question: "Which of the following protects applications by identifying and restricting access to available files and data?",
        type: "single",
        options: [
            "Application Configuration",
            "Verbose Log",
            "Access Control Rules",
            "Application Scope"
        ],
        correct: [3],
        explanation: "Application Scope restricts access to files and data. The PDF answer 'D' is correct."
    },
    {
        question: "When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?",
        type: "single",
        options: [
            "Turn your computer off and on again",
            "Clear browser cache",
            "End Impersonation",
            "Log out and back in"
        ],
        correct: [2],
        explanation: "The PDF answer 'D' is incorrect. 'End Impersonation' (C) is the best way to revert."
    },
    {
        question: "A customer has asked for the following updates to a form: Make Resolution code mandatory, admin state is changed to Resolved. Hide major incident check box, unless logged in user has Major incident Manager role. What type of rules (s) would you use to implement this requirement?",
        type: "multiple",
        options: [],
        correct: [2, 4],
        explanation: "The PDF answer 'C, E' suggests UI Policy (C) for field states and Client Script (E) for role-based logic. No options provided."
    },
    {
        question: "What are the three key tables in an enterprise CMDB? Choose 3 answers",
        type: "multiple",
        options: [
            "sn_cmdt_bak",
            "Sh_emdb_ci",
            "cmap_ret_ci",
            "cmdb_bak",
            "cmdb_ci",
            "sh_eomdb",
            "cmap"
        ],
        correct: [2, 4, 6],
        explanation: "Key CMDB tables are cmap_ret_ci (C), cmdb_ci (E), cmap (G). The PDF answer 'C, E, G' is correct."
    },
    {
        question: "What needs to be specified, when creating a Business Rule? (Choose four.)",
        type: "multiple",
        options: [
            "UI action",
            "Table",
            "Fields to update",
            "Who can run",
            "Script to run",
            "Application scope",
            "Update set",
            "Timing",
            "Condition to evaluate"
        ],
        correct: [1, 4, 5, 7],
        explanation: "The PDF answer 'A, B, E, F' is incorrect. Correct: Table (B), Script (E), Application scope (F), Timing (H). 'UI action' (A) is unrelated."
    },
    {
        question: "Which allows the creation of a task-based record from Service Catalog?",
        type: "single",
        options: [
            "Record Producers",
            "UI Builder",
            "Assignment Rule",
            "Flow Designer",
            "UI Actions"
        ],
        correct: [0],
        explanation: "The PDF answer 'D' is incorrect. Record Producers (A) create task-based records from the catalog."
    },
    {
        question: "When searching using the App Navigator search field, what can be returned? (Choose four.)",
        type: "multiple",
        options: [
            "Names of Applications and Modules",
            "Names of Modules",
            "Names of Applications",
            "Favorites",
            "History Records",
            "Titles of Dashboard Gauges"
        ],
        correct: [0, 1, 2, 3],
        explanation: "App Navigator returns Applications and Modules (A), Modules (B), Applications (C), Favorites (D). The PDF answer 'A, B, C, D' is correct."
    },
    {
        question: "Which icon would you double click, to expand and collapse the list of all Applications and Modules?",
        type: "single",
        options: [
            "Star",
            "Clock",
            "Application",
            "Funnel"
        ],
        correct: [2],
        explanation: "The Application icon expands/collapses the list. The PDF answer 'C' is correct."
    },
    {
        question: "On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?",
        type: "single",
        options: [
            "Can Read",
            "Can Write",
            "Can Contribute",
            "Can Author",
            "Cannot Author"
        ],
        correct: [2],
        explanation: "'Can Contribute' defines write access. The PDF answer 'C' is correct."
    },
    {
        question: "What is a Record Producer?",
        type: "single",
        options: [
            "A Record Producer is a type of Catalog Item that is used for Requests, not Services",
            "A Record Producer creates user records",
            "A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests",
            "A Record Producer is a type of a Catalog Item that allows users to create task-based records from the Service Catalog"
        ],
        correct: [3],
        explanation: "Record Producers create task-based records. The PDF answer 'D' is correct."
    },
    {
        question: "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
        type: "multiple",
        options: [
            "Roles",
            "Conditional Expressions",
            "Assignment Rules",
            "Scripts",
            "User Criteria",
            "Groups"
        ],
        correct: [0, 1, 3],
        explanation: "ACLs use Roles (A), Conditional Expressions (B), Scripts (D). The PDF answer 'A, B, D' is correct."
    },
    {
        question: "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
        type: "single",
        options: [
            "Self Service Module",
            "Application Navigator",
            "Service Desk Homepage",
            "Favorites"
        ],
        correct: [1],
        explanation: "The Application Navigator provides access to applications. The PDF answer 'B' is correct."
    },
    {
        question: "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)",
        type: "multiple",
        options: [
            "Browser tab title",
            "Module text color",
            "Preferred browser",
            "Base theme",
            "Font style",
            "Animation style",
            "Header background color",
            "Banner Image"
        ],
        correct: [0, 1, 3, 6, 7],
        explanation: "UI16 manages Browser tab title (A), Module text color (B), Base theme (D), Header background color (G), Banner Image (H). The PDF answer 'A, B, D, G, H' is correct."
    },
    {
        question: "What are two ways to generate an Event? (Choose two.)",
        type: "multiple",
        options: [
            "Business Rule",
            "Workflow",
            "Log entry",
            "Knowledge article publication"
        ],
        correct: [0, 1],
        explanation: "Events are generated by Business Rules (A) and Workflows (B). The PDF answer 'A, B' is correct."
    },
    {
        question: "What is the definition of a group?",
        type: "single",
        options: [
            "An escalation pod",
            "A department",
            "A collection of users",
            "A collection of subject matter experts",
            "A team of users"
        ],
        correct: [2],
        explanation: "The PDF answer 'E' is incorrect. A group is a collection of users (C)."
    },
    {
        question: "Which group of permissions is used to control Application and Module access?",
        type: "single",
        options: [
            "Access Control Rules",
            "UI Policies",
            "Roles",
            "Assignment Rules"
        ],
        correct: [2],
        explanation: "Roles control Application and Module access. The PDF answer 'C' is correct."
    },
    {
        question: "What are the main UI component(s) of the ServiceNow Platform?",
        type: "multiple",
        options: [
            "Banner Navigator",
            "Banner Frame",
            "Application Frame",
            "Application Navigator",
            "Content Menu",
            "Content Frame"
        ],
        correct: [1, 3, 5],
        explanation: "Main UI components are Banner Frame (B), Application Navigator (D), Content Frame (F). The PDF answer 'B, D, F' is correct."
    },
    {
        question: "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
        type: "single",
        options: [
            "Avoid using the Default Update set as an Update Set for moving customizations from instance to instance",
            "Before moving customizations from instance to instance with Update Sets, ensure that both instances are different versions",
            "Use the Baseline Update Set to store the contents of items after they are changed the first time",
            "Once an Update Set is closed as 'Complete', change it back to 'In Progress' until it is applied to another instance"
        ],
        correct: [0],
        explanation: "ServiceNow recommends avoiding the Default Update Set for moving customizations. The PDF answer 'A' is correct."
    },
    {
        question: "When testing a catalog item, having a manager approval flows, which of these best practices would you follow? (Choose three.)",
        type: "multiple",
        options: [
            "Make sure the latest flows are activated.",
            "Use the instance Incognito setting to quickly toggle between requester and approver.",
            "Impersonate the requester to ensure the form works.",
            "Make sure the requester's user record has a manager specified.",
            "Create and select your Testing Update Set, before starting the test cases.",
            "Use your Admin account, so you can approve the items quickly."
        ],
        correct: [3, 4, 5],
        explanation: "Best practices: Manager specified (D), Testing Update Set (E), Admin approval (F). The PDF answer 'D, E, F' is correct."
    },
    {
        question: "Record numbers have to be manually incremented",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [1],
        explanation: "Record numbers auto-increment. The PDF answer 'B' (False) is correct."
    },
    {
        question: "If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?",
        type: "single",
        options: [
            "itil users",
            "Any user with an article's permalink",
            "Any active user",
            "No users",
            "Users with kb_user role"
        ],
        correct: [2],
        explanation: "Without access details, any active user can read articles. The PDF answer 'C' is correct."
    },
    {
        question: "When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?",
        type: "single",
        options: [
            "Field Matching",
            "Load Data",
            "Select Data Source",
            "Schedule Transform",
            "Create Transform Map"
        ],
        correct: [4],
        explanation: "The PDF answer 'C' is incorrect. 'Create Transform Map' (E) defines column mappings."
    },
    {
        question: "What icon do you use to change the boon and color on a Favorite?",
        type: "single",
        options: [],
        correct: [2],
        explanation: "The PDF answer 'C' suggests the Pencil icon (typically C), despite 'boon' typo (likely 'icon'). No options provided."
    },
    {
        question: "UI Action can prompt that an Incident has been successfully submitted.",
        type: "single",
        options: [
            "True",
            "False"
        ],
        correct: [0],
        explanation: "UI Actions can display prompts (e.g., via alerts). The PDF answer 'A' (True) is correct."
    },
    {
        question: "What is NOT an example of a UI Action?",
        type: "single",
        options: [
            "Search",
            "Form buttons",
            "List Buttons",
            "Related Links"
        ],
        correct: [0],
        explanation: "The PDF answer 'C' is incorrect. 'Search' (A) is not a UI Action; Form buttons (B), List Buttons (C), and Related Links (D) are."
    },
    {
        question: "When importing data, what happens to imported rows, if no coalesce field is specified?",
        type: "single",
        options: [
            "All rows are rejected from the import, as coalesce field is required.",
            "All rows are treated as new records. No existing records are updated.",
            "Duplicate rows are rejected from the import.",
            "All rows are treated as new records, but errors will be flagged in the import log."
        ],
        correct: [1],
        explanation: "The PDF answer 'D' is incorrect. Without coalesce, all rows are treated as new records (B)."
    },
    {
        question: "Which one of the following statements describes a characteristic of role assignment?",
        type: "single",
        options: [
            "Roles can contain other roles, when you are assigned a role, you inherit all the roles within that role",
            "Users can click on the Personalize Role feature to try different roles",
            "A role is granted to a user by the System Administrator",
            "Each user has a role in the ServiceNow platform"
        ],
        correct: [0],
        explanation: "Roles can contain other roles, and inheritance applies. The PDF answer 'A' is correct."
    },
    {
        question: "On a filter condition, which component is always a choice list?",
        type: "single",
        options: [
            "Operator",
            "Filter Criteria",
            "Operation",
            "Match Criteria"
        ],
        correct: [0],
        explanation: "The PDF answer 'C' is incorrect. Operator (A) is a choice list in filters."
    },
    {
        question: "What do you activate when you want to add applications or functionality within your development instance?",
        type: "single",
        options: [
            "App Package",
            "Updated Pack",
            "Patch",
            "Plugin",
            "App Updated Set"
        ],
        correct: [3],
        explanation: "Plugins add functionality. The PDF answer 'D' is correct."
    },
    {
        question: "Which three Variable Types can be added to a Service Catalog Item?",
        type: "multiple",
        options: [
            "True/False, Multiple Choice, and Ordered",
            "True/False, Checkbox, and Number List",
            "Number List, Single Line Text, and Reference",
            "Multiple Choice, Select Box, and Checkbox"
        ],
        correct: [3],
        explanation: "Variable types include Multiple Choice, Select Box, Checkbox. The PDF answer 'D' is correct."
    },
    {
        question: "What ServiceNow feature allows you to include data from a secondary related table on a report?",
        type: "single",
        options: [
            "SQL",
            "Dot Walking",
            "Outer Join",
            "Joins"
        ],
        correct: [1],
        explanation: "Dot Walking accesses related table data in reports. The PDF answer 'B' is correct."
    },
    {
        question: "What module do you use to access the reports that are available to you?",
        type: "single",
        options: [
            "Report > View /Run",
            "Reports > Homepage",
            "Self-Service > My Reports",
            "Report > Overview"
        ],
        correct: [0],
        explanation: "The PDF answer 'B' is incorrect. 'Report > View /Run' (A) accesses available reports."
    },
    {
        question: "Which application is used primarily to load data into ServiceNow?",
        type: "single",
        options: [],
        correct: [1],
        explanation: "The PDF answer 'B' suggests Import Sets (typically B), used to load data. No options provided."
    },
    {
        question: "What are the three permission requirements that must evaluate to true for an access control rule to apply? Choose 3 answers",
        type: "multiple",
        options: [
            "Conditions",
            "table.",
            "Roles",
            "Script",
            "table.*",
            "table.none"
        ],
        correct: [0, 2, 3],
        explanation: "The PDF answer 'C, D, E' is incorrect. Correct: Conditions (A), Roles (C), Script (D). 'table.*' (E) is not a requirement."
    },
    {
        question: "ServiceNow contains a resource which provides the following: A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting. A CMDB framework across our products and platform that will enable and support multiple configuration strategies. What resource do these statements describe?",
        type: "single",
        options: [
            "Common Services Data Model (CSDM)",
            "Information Technology Service Management (ITSM)",
            "Configuration Management Database (CMDB)",
            "Information Technology Infrastructure Library (ITIL)"
        ],
        correct: [0],
        explanation: "CSDM provides service definitions and a CMDB framework. The PDF answer 'A' is correct."
    },
    
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
        questionDiv.innerHTML = `<h3><span style="font-weight: bold;">Question ${globalIndex + 1}.</span> ${item.question}</h3>`;

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
            // checkAllAnswered();
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
// function checkAllAnswered() {
//     let allAnswered = true;

//     quizData.forEach((_, index) => {
//         const isAnswered = selectedAnswers[index] && selectedAnswers[index].length > 0;
//         if (!isAnswered) allAnswered = false;
//     });

//     document.getElementById('submit-btn').disabled = !allAnswered;
// }

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
            ? `<span class="correct">Correct</span><br><div class="explanation">${item.explanation}</div>`
            : `<span class="incorrect">Incorrect</span> - Correct Answer: ${item.correct.map(i => String.fromCharCode(65 + i)).join(', ')}<br><div class="explanation">${item.explanation}</div>`;

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
        // checkAllAnswered();
    });
});
