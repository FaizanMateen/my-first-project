import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col justify-between gap-6 md:h-screen md:gap-4">
      <Container>
        <Header />
        <Main />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
