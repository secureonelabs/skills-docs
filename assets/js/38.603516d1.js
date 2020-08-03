(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{412:function(t,e,a){"use strict";a.r(e);var s=a(43),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projects"}},[t._v("#")]),t._v(" Projects")]),t._v(" "),a("p",[t._v("A Project is an overall container that represents the skills ruleset for a single application with gamified training.\nProject's administrator(s) manage skill definitions, subjects, levels, dependencies and other attributes that make up an application's training profile.")]),t._v(" "),a("p",[t._v("Creating a project is simple, all you need is a name. While the project id is required, it will be automatically generated (you can optionally override the generated id).")]),t._v(" "),a("p",[t._v("A Project is composed of Subjects which are made up of Skills and a single skill defines a training unit within the gamification framework.\nOnce the project is created you have an empty canvas on which to compose and manage your application's training profile.\nGenerally the next step is to create a number of Subjects and then start constructing Skill definitions within those Subjects.")]),t._v(" "),a("p",[t._v("The Dashboard user that creates a project is automatically granted the role of administrator of that project. Project administrators enjoy the following benefits:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Explanation")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/dashboard/user-guide/subjects.html"}},[t._v("Subjects")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Add, edit or remove Subjects")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/dashboard/user-guide/skills.html"}},[t._v("Skills")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Add, edit or remove Skill definitions")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/dashboard/user-guide/access-management.html"}},[t._v("Access Management")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Assign or remove Project's administrators")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/dashboard/user-guide/badges.html"}},[t._v("Badges")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Add, edit or remove Project's Badges")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/dashboard/user-guide/levels.html"}},[t._v("Levels")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Customize number of Levels and their attributes")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/dashboard/user-guide/dependencies.html"}},[t._v("Dependencies")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Specify the order of Skills completion. For example Skill A must be completed before Skill B can be attempted")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"/dashboard/user-guide/cross-project-deps.htm"}},[t._v("Cross-project Dependencies")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Create and manage Skill dependencies across multiple Projects which practically equates to cross-application Skills")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Stats")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Charts and graph. These are page specific - Project, Subject, Badge, and User will have stats specifically for those pages")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("RouterLink",{attrs:{to:"/dashboard/user-guide/projects.html#settings"}},[t._v("Settings")])],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Project level settings")])])])]),t._v(" "),a("h2",{attrs:{id:"settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings"}},[t._v("#")]),t._v(" Settings")]),t._v(" "),a("p",[t._v("To manage and view project-wide settings navigate to "),a("code",[t._v("Project -> Settings")]),t._v(". The following project-level settings are available:")]),t._v(" "),a("h4",{attrs:{id:"setting-use-points-for-levels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-use-points-for-levels"}},[t._v("#")]),t._v(" Setting: Use Points For Levels")]),t._v(" "),a("p",[a("code",[t._v("Use Points For Levels")]),t._v(" - switch between two level management strategies:")]),t._v(" "),a("ol",[a("li",[t._v("Percentage based - levels are calculated based on configured percentages of total available points (ex. Level 1 = 10% of total points)")]),t._v(" "),a("li",[t._v("Point based - project admins specify start and end point values for each level")])]),t._v(" "),a("p",[t._v("By default the Percentage based strategy is configured, changing the "),a("code",[t._v("Use Points For Levels")]),t._v(" setting to "),a("code",[t._v("true")]),t._v(" enables Point Based explicit level point management. To learn more please see the "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/levels.html"}},[t._v("Levels")]),t._v(" section.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You must define at least 100 points for a project before switching to point-based levels management")])]),t._v(" "),a("h4",{attrs:{id:"setting-root-help-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-root-help-url"}},[t._v("#")]),t._v(" Setting: Root Help Url")]),t._v(" "),a("p",[t._v("Skill definition's "),a("code",[t._v("Help Url/Path")]),t._v(" will be treated relative to this "),a("code",[t._v("Root Help Url")]),t._v(". For example, if")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Root Help Url")]),t._v(" =  "),a("code",[t._v("http://www.myHelpDocs.com")])]),t._v(" "),a("li",[t._v("and a Skill definition's "),a("code",[t._v("Help Url")]),t._v(" = "),a("code",[t._v("/important/article")])])]),t._v(" "),a("p",[t._v("then the client display will concatenate "),a("code",[t._v("Root Help Url")]),t._v(" and  "),a("code",[t._v("Help Url")]),t._v(" to produce "),a("code",[t._v("http://www.myHelpDocs.com/important/article")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If a Skill's "),a("code",[t._v("Help Url")]),t._v(" starts with "),a("code",[t._v("http")]),t._v(" or "),a("code",[t._v("https")]),t._v(" then "),a("code",[t._v("Root Help Url")]),t._v(" will NOT be utilized.")])]),t._v(" "),a("p",[t._v("If a Skill's "),a("code",[t._v("Help Url")]),t._v(" is blank then no url will be displayed even if "),a("code",[t._v("Root Help Url")]),t._v(" is configured.\nIn other words "),a("code",[t._v("Root Help Url")]),t._v(" only works in conjunction with a Skill's "),a("code",[t._v("Help Url")]),t._v(".")])])}),[],!1,null,null,null);e.default=i.exports}}]);