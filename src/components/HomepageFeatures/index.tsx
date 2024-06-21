import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Very fast websites',
    Svg: require('@site/static/img/speed.svg').default,
    description: (
      <>
        Qwik is designed to build very fast websites with minimal effort. It is optimized for speed and performance. Projects will grow in size with no impact on speed.
      </>
    ),
  },
  {
    title: 'Focus on Developer Experience',
    Svg: require('@site/static/img/developer-experience.svg').default,
    description: (
      <>
        Qwik is optimized from the ground up for DX, you won't need to spend time configuring your project in order to gain performance.
      </>
    ),
  },
  {
    title: 'SSR first approach',
    Svg: require('@site/static/img/ssr-first.svg').default,
    description: (
      <>
        Qwik is designed to be server-side rendered first. 
        It's one unique Javascript framework that is not SPA by default.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
