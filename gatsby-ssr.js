const React = require("react");
const QAPI = require("./qapi").default;
const { RawHtml } = require("@quarkly/components");
 const insideHeadRawHtmls = [];
const beforeBodyRawHtmls = [];
 export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  const components = RawHtml.getComponents();
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    ...components.headItems,
    ...insideHeadRawHtmls,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" />,
  ]);
   setPostBodyComponents([
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
    ...components.bodyItems,
    ...beforeBodyRawHtmls,
  ]);
}
