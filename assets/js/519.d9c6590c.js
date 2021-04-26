(window.webpackJsonp=window.webpackJsonp||[]).push([[519],{1243:function(e,t,a){"use strict";a.r(t);var s=a(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"interface-os3link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface-os3link"}},[e._v("#")]),e._v(" Interface OS3Link")]),e._v(" "),a("Badge",{attrs:{text:"Interface",type:"interface"}}),e._v(" "),a("section",{staticClass:"table-features"},[a("table",{staticClass:"is-full-width"},[a("tbody",[a("tr",[a("th",[e._v("Module")]),a("td",[a("div",{staticClass:"lang-typescript"},[a("span",{staticClass:"token keyword"},[e._v("import")]),e._v(" { OS3Link } "),a("span",{staticClass:"token keyword"},[e._v("from")]),e._v(" "),a("span",{staticClass:"token string"},[e._v('"@tsed/openspec"')])])])]),a("tr",[a("th",[e._v("Source")]),a("td",[a("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v6.45.1/packages/openspec/src/openspec3/OS3Link.ts#L0-L0"}},[e._v("/packages/openspec/src/openspec3/OS3Link.ts")])])])])])]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("div",{staticClass:"language-typescript"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("interface")]),e._v(" OS3Link "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n"),a("div",{pre:!0,attrs:{class:"language- extra-class"}},[a("pre",[a("code",[e._v('operationRef?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\noperationId?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nparameters?<span class="token punctuation">:</span> <a href="/api/openspec/common/OpenSpecHash.html"><span class="token">OpenSpecHash</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">;</span>\n\ndescription?<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">;</span>\n\nserver?<span class="token punctuation">:</span> <a href="/api/openspec/openspec3/OS3Server.html"><span class="token">OS3Server</span></a><span class="token punctuation">;</span>\n')])])]),a("p",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[e._v("#")]),e._v(" Members")]),e._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("operationRef?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),a("p",[e._v("A relative or absolute reference to an OAS operation. This field is mutually exclusive of the operationId field, and MUST point to an Operation Object. Relative operationRef values MAY be used to locate an existing Operation Object in the OpenAPI definition.")])]),a("hr"),e._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("operationId?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),a("p",[e._v("The name of an existing, resolvable OAS operation, as defined with a unique operationId. This field is mutually exclusive of the operationRef field.")])]),a("hr"),e._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("parameters?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/common/OpenSpecHash.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[e._v("OpenSpecHash")])]),e._v("<"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("any")]),e._v(">"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),a("p",[e._v("A map representing parameters to pass to an operation as specified with operationId or identified via operationRef. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the parameter location [{in}.]{name} for operations that use the same "),a("a",{pre:!0,attrs:{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.1.md#parameterIn",target:"_blank",rel:"noopener noreferrer"}},[e._v("parameter name"),a("OutboundLink",{pre:!0})],1),e._v(" in different locations (e.g. path.id).")])]),a("hr"),e._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("description?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),a("p",[e._v("A description of the link. CommonMark syntax MAY be used for rich text representation.")])]),a("hr"),e._v(" "),a("div",{pre:!0},[a("div",{pre:!0,attrs:{class:"method-overview"}},[a("div",{pre:!0,attrs:{class:"language-typescript"}},[a("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[a("code",{pre:!0,attrs:{class:"typescript-lang "}},[e._v("server?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("a",{pre:!0,attrs:{href:"/api/openspec/openspec3/OS3Server.html"}},[a("span",{pre:!0,attrs:{class:"token"}},[e._v("OS3Server")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")])])])])]),e._v(" "),a("p",[e._v("A server object to be used by the target operation.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);