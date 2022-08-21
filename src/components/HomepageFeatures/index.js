import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "The Hub",
    Svg: require("@site/static/img/dymension_hub.svg").default,
    description: (
      <>
        dYmension's settlement hub provides security, liquidity and
        inter-operability for all RollApps.
      </>
    ),
  },
  {
    title: "RollApp Development Kit (RDK)",
    Svg: require("@site/static/img/easy_deployment.svg").default,
    description: (
      <>
        dYmension’s RDK simplifies the process of deploying a rollup on top of
        dYmension’s settlement hub.
      </>
    ),
  },
  {
    title: "RollApps",
    Svg: require("@site/static/img/fast_applications.svg").default,
    description: (
      <>
        RollApps are the autonomous applications deployed on dYmension with the
        speed and efficiencies necessary for modern-day applications.
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
