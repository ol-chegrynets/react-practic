// src/components/App.jsx

// import { Product } from "./Product";
import Product from "./Product";
import Mailbox from "./Mailbox";
// src/components/App.jsx
import BookApp from "./BookList";
import Card from "./Children";
import Alert from "./Alert";
import UserName from "./UserName";
import Section from "./Section/Section";
import SectionProfile from "./SectionProfile/SectionProfile";
import Profile from "./SectionProfile/Profile/Profile";

export default function App() {
  return (
    <div>
      <UserName name="Sasha" />
      <SectionProfile title="Profile list">
        <Profile
          name="Max"
          phone="123456789"
          email="0i5k0@example.com"
          status="online"
          hasPhisicalAddress={true}
        />
        <Profile
          name="Max"
          phone="123456789"
          email="0i5k0@example.com"
          status="online"
          hasPhisicalAddress={false}
        />
        <Profile
          name="Max"
          phone="123456789"
          email="0i5k0@example.com"
          status="online"
          hasPhisicalAddress={true}
        />
      </SectionProfile>
      <Card>
        <h2>Card title</h2>
        <p>Text between opening and closing tag</p>
        <Alert variant="info">
          Would you like to browse our recommended products?
        </Alert>
        <Alert variant="error" outlined="true">
          There was an error during your last transaction
        </Alert>
        <Alert variant="success" elevated="true">
          Payment received, thank you for your purchase
        </Alert>
        <Alert variant="warning" outlined="true" elevated="true">
          Please update your profile contact information
        </Alert>
      </Card>
      <BookApp />;
      <Section title="Best selling">
        <Product name="Tacos With Lime" price={10.99} />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </Section>
      <Mailbox username="Sasha" messages={[1, 2, 3]} />
    </div>
  );
}
