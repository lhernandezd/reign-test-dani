import { useState, useEffect } from "react";
import {
  ContainerComponent as Container,
  MainComponent as Main,
} from "./components/Container";
import useAxiosFetch from "./hooks/useAxiosFetch";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [currentTab, setCurrentTab] = useState("My Faves");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const { response, loading, error } = useAxiosFetch({
    url: `/search_by_date?query=react&page=${currentPage - 1}`,
    method: "GET",
  });

  useEffect(() => {
    if (response !== null) {
      const { hits } = response;
      setData(hits);
    }
  }, [response]);

  const handleCurrentPage = (page) => {
    if (page > 0) {
      setCurrentPage(page);
    } else if (page !== currentPage) {
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
        {!loading &&
          data.length &&
          data.map((element) => (
            <Card
              key={element.objectID}
              title={element.story_title}
              url={element.story_url}
              created={element.created_at}
            />
          ))}
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
