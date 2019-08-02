import React from 'react';

import { Container } from './styles';

export default function Card( {data} ) {

  return (
    <Container>
        <img src={data.owner.avatar_url} alt="avatar" />  
        <p href={data.owner.html_url}>{data.full_name}</p>
    </Container>
  );
}
