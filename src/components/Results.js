import React, { Component } from 'react';
import { Link } from '@material-ui/core';

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
      <div className='App'>
        <h1>
          {username} {fullName ? `(${fullName})` : null}
        </h1>
        <img src={avatar_url} alt={username} />
        <br />
        Public Repo Count: {reposCount}
        <br />
        Followers: {followers}
        <br />
        Following: {following}
        <br />
        Website:{' '}
        <a href={website} target='_blank' rel='noreferrer noopener'>
          {website}
        </a>
        <br />
        {location ? `Location: ${location}` : null}
        <br />
        {bio ? `Bio: ${bio}` : null}
        <br />
        {company ? `Company: ${company}` : null}
        <br />
        {email ? `Email: ${email}` : null}
        <br />
        {hireable ? `Hireable: ${hireable}` : null}
        <h4>4 Recent Repositories</h4>
        {recentRepos ? (
          recentRepos.map((repo) => {
            return (
              <div key={repo.node_id}>
                <h4>
                  {' '}
                  <Link href={repo.clone_url}>{repo.name}</Link>
                </h4>
                <p>{repo.description}</p>
              </div>
            );
          })
        ) : (
          <p>Person doesn't have any recent repositories</p>
        )}
      </div>
    );
  }
}

export default Results;
