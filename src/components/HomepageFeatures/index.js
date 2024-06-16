import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Бронюй за 5 хвилин!',
    Svg: require('@site/static/img/lightning-bolt-black-shape.svg').default,
    description: (
      <>
        Натискай на кнопку вище та бронюй вибране тобою авто в пару кліків.
      </>
    ),
  },
  {
    title: 'Авто на ваш вибір!',
    Svg: require('@site/static/img/car.svg').default,
    description: (
      <>
        У нас ви можете підібрати саме те авто, яке вам потрібно.
      </>
    ),
  },
  {
    title: 'Саме тоді, коли вам потрібно!',
    Svg: require('@site/static/img/clock.svg').default,
    description: (
      <>
        Ви можете забронювати авто саме на ту дату і на той час, коли вам потрібно.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
