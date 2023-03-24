import React, {useEffect, useState} from "react";
import { useResultContext } from "../../context/ResultContext";
import styled from 'styled-components'
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import { TbError404 } from 'react-icons/tb'

// STYLED COMPONENTS
const Container = styled.section`
  padding: 5vh 5vw;
  min-height: 90vh;
  background-color: ${(p) => p.theme.bgColor};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin-bottom: 7vh;
`;
const InputContainer = styled.div`
  max-width: 400px;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${(p) => p.theme.elColor};
  box-shadow: ${(p) => p.theme.shadow};
  color: ${(p) => p.theme.textColor};
`;
const Select = styled.select`
  width: 200px;
  padding: 1rem 1.8rem;
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.elColor};
  color: ${(p) => p.theme.textColor};
  box-shadow: ${(p) => p.theme.shadow};
  border-radius: 5px;
  cursor: pointer;
`;
const ErrorMessage = styled.p`
  height: 30vh;
  display: grid;
  place-items: center;
  text-align: center;
  color: ${(p) => p.theme.textColor}; ;
`;
const Loading = styled.p`
  height: 50vh;
  display: grid;
  place-items: center;
  text-align: center;
  color: ${(p) => p.theme.textColor}; ;
`;

const Home = () => {
const { results, error, loading, getSearchResults, getFilteredResults } =
  useResultContext();

  // PAGINATION
const [currentPage, setCurrentPage] = useState(1);
const [postsPerPage] = useState(8);
const [paginatedResults, setPaginatedResults] = useState(results);

useEffect(() => {
  const idxOfLastPost = currentPage * postsPerPage;
  const idxOfFirstPost = idxOfLastPost - postsPerPage;
  setPaginatedResults(results?.slice(idxOfFirstPost, idxOfLastPost));
}, [results, currentPage, postsPerPage]);

// SEARCH AND FILTER
  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.country.value;

    getSearchResults(name);
    setCurrentPage(1);
  };

  const handleFilter = (e) => {
    const region = e.target.value;

    getFilteredResults(region);
    setCurrentPage(1);
  };

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = "Go back to home page"; // Legacy method for cross browser support
    }

    return ""; // Legacy method for cross browser support
  };


  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <InputContainer>
          <Input
            type="search"
            name="country"
            placeholder="Search for a country..."
            autoComplete="off"
          />
        </InputContainer>
        <Select onChange={handleFilter} name="options" defaultValue="Filter by Region">
          <option>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctic">Antarctic</option>
        </Select>
      </Form>
      {error ? (
        <ErrorMessage>
          <TbError404 />
          Error Fetching Countries <br /> Please refresh or try again...
        </ErrorMessage>
      ) : loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <Card paginatedResults={paginatedResults} />
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={results?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default Home;
