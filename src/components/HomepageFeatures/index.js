import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn more about Bitlayer',
    link: 'https://docs.bitlayer.org/',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Bitlayer leads with its innovative BitVM technology, offering a secure and computationally complete solution for enhancing Bitcoin's layer 2 capabilities.
      </>
    ),
  },
  {
    title: 'Faucet',
    link: 'https://www.bitlayer.org/faucet',
    Svg: require('@site/static/img/logobit.svg').default,
    description: (
      <>
        Access Bitlayer's Testnet tokens every 24 hours and accelerate your development process with reliable testing resources.
      </>
    ),
  },
  {
    title: 'Testnet Scan',
    link: 'https://testnet-scan.bitlayer.org/en-us/',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Discover and analyze blockchain data with our Testnet Scan, your go-to tool for inspecting transactions, blocks, and addresses in detail on the testnet.
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}