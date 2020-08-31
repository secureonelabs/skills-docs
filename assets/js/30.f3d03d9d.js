(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{409:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Your output will look something like this (the majority of the output was omitted for brevity):")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" .   ____          _            __ _ _\n /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\\n \\\\/  ___)| |_)| | | | | || (_| |  ) ) ) )\n  '  |____| .__|_| |_|_| |_\\__, | / / / /\n =========|_|==============|___/=/_/_/_/\n :: Spring Boot ::       (vX.X.X.RELEASE)\n...\n...\n...\n2020-07-16 19:43:01.129  INFO 9103 --- [           main] o.s.m.s.b.SimpleBrokerMessageHandler     : Started.\n2020-07-16 19:43:01.189  INFO 9103 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''\n2020-07-16 19:43:01.192  INFO 9103 --- [           main] skills.SpringBootApp                     : Started SpringBootApp in 20.159 seconds (JVM running for 21.368)\n")])])]),a("p",[t._v("The dashboard is now running on "),a("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),a("OutboundLink")],1),t._v(". It will prompt you to create a "),a("RouterLink",{attrs:{to:"/dashboard/user-guide/users.html#root"}},[t._v("Dashboard root account")]),t._v(".")],1),t._v(" "),a("p",[t._v("Well... that's it!")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Good to Know!")]),t._v(" "),a("p",[t._v("Please note that the "),a("code",[t._v("skills-service")]),t._v(", by default, stores its data into an embedded in-memory H2 database.\nThat data is ephemeral and will not persist between application restarts. While this is a great way to get started quickly,\nit is obviously not appropriate for a test or production installation.\nPlease visit the "),a("RouterLink",{attrs:{to:"/dashboard/install-guide/database.html"}},[t._v("Database Section")]),t._v(" to learn more.")],1)]),t._v(" "),a("p",[t._v("The next step is to start the "),a("code",[t._v("java-backend-example")]),t._v(" service which:")]),t._v(" "),a("ol",[a("li",[t._v("Populates the "),a("code",[t._v("skills-service")]),t._v(" with sample data")]),t._v(" "),a("li",[t._v("Implements an example "),a("RouterLink",{attrs:{to:"/skills-client/auth.html"}},[t._v("Authentication Endpoint")]),t._v(" that's required to run client components")],1)]),t._v(" "),a("p",[t._v("Download the latest "),a("code",[t._v("java-backend-example")]),t._v(" from "),a("a",{attrs:{href:"https://github.com/NationalSecurityAgency/skills-client-examples/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("skills-client-examples/releases"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s https://api.github.com/repos/NationalSecurityAgency/skills-client-examples/releases/latest "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" browser_download_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cut")]),t._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"'")]),t._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -qi -\n")])])]),a("p",[t._v("Start "),a("code",[t._v("java-backend-example")]),t._v(" service using the downloaded jar (make sure to substitute X.X.X for an actual version):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("java -jar java-backend-example-X.X.X.jar\n")])])]),a("p",[t._v("Please note that the service generates and populates the skill-service with sample data so it may take few minutes to start.\nYou will know the service is running when the following line appears on standard out:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("o.s.b.w.embedded.tomcat.TomcatWebServer  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" Tomcat started on port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8090")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" with context path "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n")])])]),a("p",[t._v("On start, the "),a("code",[t._v("java-backend-example")]),t._v(" populates the "),a("code",[t._v("skills-service")]),t._v(" with a sample project named Movies.\nOnce it starts, logout from the dashboard and log back in as")]),t._v(" "),a("ul",[a("li",[t._v("username=bill@email.org")]),t._v(" "),a("li",[t._v("password=password\nand explore the sample Movies project.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);