import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn more about Bitlayer',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Bitlayer pioneers with its BitVM approach to solve the trade-off between security and Turing completeness, enabling a robust Bitcoin layer 2 solution.
      </>
    ),
  },
  {
    title: 'Faucet',
    Svg: require('@site/static/img/logobit.svg').default,
    description: (
      <>
        Obtain your Bitlayer Testnet tokens every 24 hours for development here.
      </>
    ),
  },
  {
    title: 'Testnet Scan',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        A essential tool for exploring and analyzing blockchain data on the testnet. You can dive deep into the testnet's transactions, blocks, and addresses.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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