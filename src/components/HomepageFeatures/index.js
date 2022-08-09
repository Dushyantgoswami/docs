import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Fast",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>dYmension brings web2 speed to the web3 world!</>,
  },
  {
    title: "Easy",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        dYmension allows developers to deploy an application as easy as
        deploying an AWS instance.
      </>
    ),
  },
  {
    title: "Powerful",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        dYmension gives the foundation to build any web3 application you can
        imagine!
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
