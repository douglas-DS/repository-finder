import React, { useState } from 'react';

import Card from '../Card';

import { MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function Board() {

  const [repositories, setRepositories] = useState([]);
  const [repoName, setRepoName] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const repoName = e.target.value;
    setRepoName(repoName);
  }

  const handleClick = () => {
    const fetchData = async () => {
      const api = `https://api.github.com/repos/${repoName}`
      const res = await fetch(api);
      const data = await res.json();
      setRepositories([...repositories, data]);
    }
    fetchData();
    setRepoName('');
  }

  return (

    <Container>
      <form>
        <input type="text" value={repoName} onChange={handleChange} />
        <button type="button" onClick={handleClick}>
          <MdAdd size={24} color="#FFF" />
        </button>
      </form>

      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            <Card data={repo} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
