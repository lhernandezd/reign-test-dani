import { useState } from "react";
import {ContainerComponent as Container, MainComponent as Main}  from "./components/Container";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Dropdown from "./components/Dropdown";
import Pagination from "./components/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const handleCurrentPage = (page) => {
    if (page > 0) {
      setCurrentPage(page);
    } else {
      setCurrentPage(1);
    }
  };

  return (
    <Container>
      <Header title="HACKER NEWS" />
      <Main>
        <Tabs options={["All", "My Faves"]} />
        <Dropdown
          options={["angular", "reactjs", "vuejs"]}
          buttonTitle="Select your news"
        />
        <Pagination
          currentPage={currentPage}
          totalCount={1000}
          pageSize={20}
          onPageChange={(page) => handleCurrentPage(page)}
        />
      </Main>
      </Container>
  );
}

export default App;
