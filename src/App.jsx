import "./App.css";
import Article from "./Article"
import About from "./About"
/* 
1. Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.
*/




export default function App() {
  
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";

  const heading = 'About Me'
  const name = 'Preeti' // you can put your name
  const learning = 'I am learning React JS currently at neoG Camp.'

  return (
    <main>
      <Article title={title} content={content} />
      <hr/>
      <About heading={heading} name={name} learning={learning}/>
    </main>
  );
}
