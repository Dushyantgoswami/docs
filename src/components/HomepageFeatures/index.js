import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Seamless",
    Svg: require("@site/static/img/shared_liquidity.svg").default,
    description: <>dYmension's settlement hub brings all RollApps together.</>,
  },
  {
    title: "Easy",
    Svg: require("@site/static/img/easy_deployment.svg").default,
    description: (
      <>
        dYmension allows developers to deploy an application as easy as
        deploying an AWS instance.
      </>
    ),
  },
  {
    title: "Powerful",
    Svg: require("@site/static/img/fast_applications.svg").default,
    description: (
      <>
        dYmension enables web3 applications to have the speed and efficiencies
        necessary for modern-day applications.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
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
