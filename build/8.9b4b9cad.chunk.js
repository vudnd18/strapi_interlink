(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{2560:function(e,t,n){"use strict";var a=n(5),u=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(6)),l=a(n(1)),c=n(25),o=n(7),i=u(n(291)),f=(0,l.lazy)((function(){return Promise.all([n.e(3),n.e(1)]).then(n.t.bind(null,2592,7))})),s=(0,l.lazy)((function(){return n.e(0).then(n.t.bind(null,2559,7))})),d=(0,l.lazy)((function(){return n.e(6).then(n.t.bind(null,2748,7))})),p=(0,l.lazy)((function(){return n.e(7).then(n.t.bind(null,2782,7))})),m=function(e){var t=(0,c.useRouteMatch)().url,n=(0,c.useParams)().slug,a=function(t,a){return l.default.createElement(a,(0,r.default)({},e,t,{slug:n}))},u=function(t,a){return l.default.createElement(o.CheckPagePermissions,{permissions:i.default.collectionTypesConfigurations},l.default.createElement(a,(0,r.default)({},e,t,{slug:n})))},m=[{path:"ctm-configurations/list-settings",comp:p},{path:"ctm-configurations/edit-settings/:type",comp:s}].map((function(e){var n=e.path,a=e.comp;return l.default.createElement(c.Route,{key:n,path:"".concat(t,"/").concat(n),render:function(e){return u(e,a)}})})),h=[{path:":id",comp:f},{path:"",comp:d}].map((function(e){var n=e.path,u=e.comp;return l.default.createElement(c.Route,{key:n,path:"".concat(t,"/").concat(n),render:function(e){return a(e,u)}})}));return l.default.createElement(l.Suspense,{fallback:l.default.createElement(o.LoadingIndicatorPage,null)},l.default.createElement(c.Switch,null,m,h))};t.default=m}}]);