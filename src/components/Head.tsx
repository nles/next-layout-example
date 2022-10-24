import * as React from 'react';
import NextHead from 'next/head';

function Head(props) {
  return (
    <React.Fragment>
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{props.title}</title>
        {props.children && props.children}
      </NextHead>
    </React.Fragment>
  );
}

export default Head;
