import "./App.css";
import Article from "./Article";
import About from "./About";
import UserInfo from "./UserInfo";
import UserProfile from "./UserProfile"
import ProductDetails from "./ProductDetails"

export default function App() {
  const title = "React is awesome";
  const content = "React is a JavaScript library for building user interfaces.";

  const heading = "About Me";
  const name = "Preeti";
  const learning = "I am learning React JS currently at neoG Camp.";

  const username = "Checodezz";
  const email = "checodezz@gmail.com";
  const age = 22;

  const userProfileObj = {
    username: "Jane Smith",
    imageUrl: "https://placehold.co/200",
    bio: "Frontend Developer",
    location: "New York",
  };

  const smartphoneObj = {
    productName: "smartphone",
    description: "High-performance smartphone with advanced features.",
    price: 599.99
  }
  return (
    <main>
      <Article title={title} content={content} />
      <hr />
      <About heading={heading} name={name} learning={learning} />
      <hr />
      <UserInfo username={username} email={email} age={age} />
      <hr />
      <UserProfile userProfileObj={userProfileObj}/>
      <hr />
<ProductDetails smartphoneObj={smartphoneObj}/>
    </main>
  );
}
