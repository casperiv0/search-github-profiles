import React, { Component } from "react";
import {
  ResultsDiv,
  Image,
  Username,
  Row,
  Box,
  Link,
  RepoBox,
} from "../styles";

class Results extends Component {
  render() {
    const {
      username,
      fullName,
      avatar_url,
      bio,
      website,
      company,
      email,
      followers,
      following,
      hireable,
      location,
      reposCount,
      recentRepos,
    } = this.props;
    return (
      <ResultsDiv>
        <Image src={avatar_url} alt={username} />
        <Username>
          {username} {fullName ? `(${fullName})` : null}
        </Username>

        <Row>
          <Box>
            <p>Public Repo Count: {reposCount}</p>
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
            <p>
              Website:{" "}
              <Link href={website} target="_blank" rel="noreferrer noopener">
                {website}
              </Link>
            </p>
          </Box>

          <Box>
            <p>Location: {location ? location : "N/A"}</p>
            <p>Company: {company ? company : "N/A"}</p>
            <p>Email: {email ? email : "N/A"}</p>
            <p>Hireable: {hireable ? hireable : "N/A"}</p>
            <p>Bio: {bio}</p>
          </Box>
        </Row>

        <Box>
          <h4>4 Recent Repositories</h4>
          {recentRepos ? (
            recentRepos.map((repo) => {
              return (
                <RepoBox key={repo.node_id}>
                  <h4>
                    <Link href={repo.clone_url}>{repo.name}</Link>
                  </h4>
                  <p>{repo.description}</p>
                </RepoBox>
              );
            })
          ) : (
            <p>Person doesn't have any recent repositories</p>
          )}
        </Box>
      </ResultsDiv>
    );
  }
}

export default Results;
