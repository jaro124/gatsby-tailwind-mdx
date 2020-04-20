import React from "react"
import { MDXProvider } from "@mdx-js/react"
import ThemeProvider from "./src/utils/themeContext"
import Highlight, { defaultProps } from 'prism-react-renderer';

const MyH1 = props => <h1 className="text-4xl font-medium text-indigo-700 mb-2" {...props} />
const MyH2 = props => <h2 className="text-3xl font-medium text-indigo-700 mb-2" {...props} />
const MyH3 = props => <h3 className="text-2xl font-medium text-indigo-700 mb-2" {...props} />
const MyH4 = props => <h4 className="text-xl font-medium text-indigo-700 mb-2" {...props} />
const MyH5 = props => <h5 className="text-xl font-medium text-indigo-700 mb-2" {...props} />
const MyH6 = props => <h6 className="text-xl font-medium text-indigo-700 mb-2" {...props} />
const MyUL = props => <ul className="list-disc list-inside pb-2" {...props}/>
const MyOL = props => <ol className="list-decimal list-inside pb-2" {...props}/>
const MyPRE1 = props => <pre className="bg-gray-800 text-gray-200 text-sm mt-4 mb-4 p-4" {...props} />

const MyPRE = props => {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre className={"m-4 p-4 overflow-x-auto rounded-md"} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
};

const MyA = props => <a className="text-green-500 font-medium no-underline border-b-2 border-transparent hover:border-green-500" {...props} />
const MyParagraph = props => <p className="pt-2 pb-2" {...props} />

const components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  h4: MyH4,
  h5: MyH5,
  h6: MyH6,
  ul: MyUL,
  ol: MyOL,
  a: MyA,
  pre: MyPRE,
  p: MyParagraph,
}

export default function RootElement({ element }) {
  return <ThemeProvider><MDXProvider components={components}>{element}</MDXProvider></ThemeProvider>
}
