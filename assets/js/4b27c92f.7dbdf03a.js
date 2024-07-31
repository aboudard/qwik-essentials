"use strict";(self.webpackChunkqwik_essentials=self.webpackChunkqwik_essentials||[]).push([[636],{8591:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(4848),s=t(8453);const i={sidebar_position:1},r="Create a Component",c={id:"qwik-basics/component",title:"Create a Component",description:"In the src/components folder, create a new folder for your component.",source:"@site/docs/qwik-basics/component.mdx",sourceDirName:"qwik-basics",slug:"/qwik-basics/component",permalink:"/qwik-essentials/docs/qwik-basics/component",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/qwik-basics/component.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Qwik - Basics",permalink:"/qwik-essentials/docs/category/qwik---basics"},next:{title:"Template of the Component",permalink:"/qwik-essentials/docs/qwik-basics/template"}},a={},d=[{value:"Add a component to the page",id:"add-a-component-to-the-page",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"create-a-component",children:"Create a Component"}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"src/components"})," folder, create a new folder for your component.\nThe folder name will be the name of your component. Inside the folder, create a file with the same name ",(0,o.jsx)(n.code,{children:"name.tsx"}),".\nThis is where you will write your component :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// src/components/todo/todo.tsx\nimport { component$ } from "@builder.io/qwik";\n\nexport const Todo = component$(() => {\n    return (\n        <>Todo</>\n    );\n});\n'})}),"\n",(0,o.jsx)(n.p,{children:"Note that the return function needs to return a JSX element, it could be a pseudo element or an HTML element."}),"\n",(0,o.jsx)(n.h2,{id:"add-a-component-to-the-page",children:"Add a component to the page"}),"\n",(0,o.jsxs)(n.p,{children:["This component can now be added in the ",(0,o.jsx)(n.code,{children:"routes/index.tsx"})," file :"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"export default component$(() => {\n  return (\n    <>\n      <h1>Hi \ud83d\udc4b</h1>\n      <p>\n        Can't wait to see what you build with qwik!\n        <br />\n        Happy coding.\n      </p>\n      <Todo />\n    </>\n  );\n});\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var o=t(6540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);