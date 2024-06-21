"use strict";(self.webpackChunkqwik_essentials=self.webpackChunkqwik_essentials||[]).push([[968],{5930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var o=t(4848),s=t(8453);const i={sidebar_position:2},a="The template of the Component",c={id:"qwik-basics/template",title:"The template of the Component",description:"Display simple data",source:"@site/docs/qwik-basics/template.mdx",sourceDirName:"qwik-basics",slug:"/qwik-basics/template",permalink:"/qwik-essentials/docs/qwik-basics/template",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/qwik-basics/template.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Component",permalink:"/qwik-essentials/docs/qwik-basics/component"}},d={},r=[{value:"Display simple data",id:"display-simple-data",level:2},{value:"Bind data to the template",id:"bind-data-to-the-template",level:2},{value:"Use a method in the template",id:"use-a-method-in-the-template",level:2},{value:"Conditional rendering",id:"conditional-rendering",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"the-template-of-the-component",children:"The template of the Component"}),"\n",(0,o.jsx)(n.h2,{id:"display-simple-data",children:"Display simple data"}),"\n",(0,o.jsxs)(n.p,{children:["Just like in any other Javascript framework, we want to display some data from the component with the template.\nLet's display a simple ",(0,o.jsx)(n.code,{children:"title"})," property from the component."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// src/components/todo/todo.tsx \nexport const Todo = component$(() => {\n    const title = 'Learn Qwik';\n    return (\n        <>Todo: {title}</>\n    );\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"The attributes of an element can be binded with the same syntax."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// src/components/todo/todo.tsx\nexport const Todo = component$(() => {\n    const title = 'Learn Qwik';\n    const isDone = true;\n    return (\n        <div>\n            <strong>{title}</strong>\n            <input type=\"checkbox\" checked={isDone} />\n        </div>\n    );\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Classes applied to an element can be declared either with an array or an object."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// src/components/todo/todo.tsx\nexport const Todo = component$(() => {\n    const title = 'Learn Qwik';\n    const isDone = true;\n    const classes = ['todo', 'done'];\n    return (\n        <div class={classes}>\n            <h1>{title}</h1>\n            <input type=\"checkbox\" checked={isDone} />\n        </div>\n    );\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"bind-data-to-the-template",children:"Bind data to the template"}),"\n",(0,o.jsxs)(n.p,{children:["You could notice that the boolean value ",(0,o.jsx)(n.code,{children:"isDone"})," does check the checkbox.\nBut what if we want to change the value of ",(0,o.jsx)(n.code,{children:"isDone"})," when the checkbox is clicked?\nIf we write this down :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"<strong>{title} : {JSON.stringify(isDone)}</strong><br />\n"})}),"\n",(0,o.jsx)(n.p,{children:"We can see that the value doesn't change, there is no interaction."}),"\n",(0,o.jsxs)(n.p,{children:["To make the checkbox interactive, we need to bind the value of the checkbox to the ",(0,o.jsx)(n.code,{children:"isDone"})," property.\nThis is an automatic two-way binding, so when the checkbox is clicked, the value of ",(0,o.jsx)(n.code,{children:"isDone"})," will change."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// src/components/todo/todo.tsx\nexport const Todo = component$(() => {\n    const title = 'Learn Qwik';\n    const isDone = true;\n    return (\n        <div>\n            <strong>{title} : {JSON.stringify(isDone.value)}</strong><br />\n            <input type=\"checkbox\" bind:checked={isDone} />\n        </div>\n    );\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that the ",(0,o.jsx)(n.code,{children:"isDone"})," property is a Signal, which can be accessed with ",(0,o.jsx)(n.code,{children:"isDone.value"}),".\nBut when we bind this value to the checkbox, we don't need to access the value, we just need to bind the Signal itself."]}),"\n",(0,o.jsx)(n.h2,{id:"use-a-method-in-the-template",children:"Use a method in the template"}),"\n",(0,o.jsx)(n.p,{children:"This auto binding is handy, but what if we want to do something more complex when the checkbox is clicked?\nWe can use a method in the template to handle the event."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// src/components/todo/todo.tsx\nexport const Todo = component$(() => {\n    const title = 'Learn Qwik';\n    const isDone = useSignal(true);\n    return (\n        <div>\n            <strong>{title} : {JSON.stringify(isDone.value)}</strong><br />\n            <input type=\"checkbox\" \n            checked={isDone.value} \n            onClick$={() => isDone.value = !isDone.value} />\n        </div>\n    );\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"conditional-rendering",children:"Conditional rendering"}),"\n",(0,o.jsx)(n.p,{children:"We have a boolean variable in the component, now we can use it to conditionally render some elements."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// src/components/todo/todo.tsx\nexport const Todo = component$(() => {\n    const title = \'Learn Qwik\';\n    const isDone = true;\n    return (\n        <div>\n            <strong>{title} : {JSON.stringify(isDone.value)}</strong><br />\n            <input type="checkbox" bind:checked={isDone} />\n            <p>\n            {isDone.value ? <span id="done">Done</span> : <span id="notdone">Not Done</span>}\n            </p>\n        </div>\n    );\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"This is a basic use of TSX, of course we could compute the id of the span to simplify the template."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var o=t(6540);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);