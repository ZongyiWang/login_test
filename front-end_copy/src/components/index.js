import React from 'react';
import ReactDOM from 'react-dom';
import MyGraphiQL from './MyGraphiQL';

var endpoint = "http://" + window.location.hostname + ':8080/graphql';
console.log(endpoint);

function graphQLFetcher(graphQLParams) {
  return fetch(endpoint, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

ReactDOM.render(
  <MyGraphiQL fetcher={graphQLFetcher} enpoint={endpoint}/>,
  document.body
);
