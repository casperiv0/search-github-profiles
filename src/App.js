import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import { Container, Main } from "./styles";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mainData: [],
      recentRepos: [],
    };
  }

  searchGithubUsername = (username) => {
    // Get General Information
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      if (res.status !== 200) {
        return alert("There was an error!");
      }
      this.setState({
        mainData: res.data,
      });
    });

    // Get Top 4 Repos
    axios.get(`https://api.github.com/users/${username}/repos`).then((res) => {
      if (res.status !== 200) {
        return alert("There was an error!");
      }
      const repos = res.data
        .sort((a, b) => {
          if (a.updated_at < b.updated_at) {
            return 1;
          }
          if (a.updated_at > b.updated_at) {
            return -1;
          }
          return 0;
        })
        .slice(0, 4);
      this.setState({
        recentRepos: repos,
      });
    });
  };

  render() {
    const { mainData, recentRepos } = this.state;
    return (
      <Container>
        <Main>
          <SearchForm searchGithubUsername={this.searchGithubUsername} />

          {mainData ? (
            <Results
              username={mainData.login}
              fullName={mainData.name}
              avatar_url={mainData.avatar_url}
              bio={mainData.bio}
              website={mainData.blog}
              company={mainData.company}
              email={mainData.email}
              followers={mainData.followers}
              following={mainData.following}
              hireable={mainData.hireable}
              location={mainData.location}
              reposCount={mainData.public_repos}
              recentRepos={recentRepos}
            />
          ) : (
            <p>User not found</p>
          )}
        </Main>
      </Container>
    );
  }
}

export default App;
