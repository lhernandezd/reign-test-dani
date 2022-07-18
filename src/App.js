import { useState, useEffect } from "react";
import {
  ContainerComponent as Container,
  MainComponent as Main,
  GridContainer as Grid,
  GridElementContainer as GridElement,
} from "./components/Container";
import useAxiosFetch from "./hooks/useAxiosFetch";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const tabsOptions = ["All", "My Faves"];
  const dropDownOptions = ["angular", "reactjs", "vuejs"];
  const [currentTab, setCurrentTab] = useState(tabsOptions[0]);
  const [currentDrop, setCurrentDrop] = useState(dropDownOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  const { response, loading } = useAxiosFetch({
    url: `/search_by_date?query=${currentDrop}&page=${currentPage - 1}`,
    method: "GET",
  });

  useEffect(() => {
    if (response !== null) {
      const { hits } = response;
      setData([hits[0], hits[1]]);
    }
  }, [response]);

  const handleSelection = (tab) => {
    setCurrentDrop(tab);
  };

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
        <Tabs options={tabsOptions} />
        <Dropdown
          options={dropDownOptions}
          buttonTitle={currentDrop}
          handleSelection={handleSelection}
        />
        <Grid>
          {!loading &&
            data.length &&
            data.map((element) => (
              <GridElement key={element.objectID}>
                <Card
                  title={element.story_title}
                  url={element.story_url}
                  created={element.created_at}
                />
              </GridElement>
            ))}
        </Grid>
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
