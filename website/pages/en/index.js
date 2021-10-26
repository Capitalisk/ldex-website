/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        <img src={`${baseUrl}img/ldex-logo-with-text-transparent.png`} alt="LDEX" style={{width: '200px'}} /> <a
          className="github-button"
          href="https://github.com/jondubois/lisk-dex"
          data-icon="octicon-star"
          data-count-href="https://github.com/jondubois/lisk-dex/stargazers"
          data-show-count="true"
          data-count-aria-label="# stargazers on GitHub"
          data-size="large"
          data-text="Star"
          aria-label="Star this project on GitHub">
        </a>
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="trade">Start trading</Button>
            <Button
              href="https://github.com/Leasehold/ldex-ui"
              target="_blank"
              rel="noreferrer noopener"
            >Run desktop app from source</Button>
            <Button
              href="https://capitalisk.com/"
              target="_blank"
              rel="noreferrer noopener"
            >Capitalisk token</Button>
            <Button
              href="https://gitter.im/lisk-dex/community"
              target="_blank"
              rel="noreferrer noopener"
            >Chat on Gitter</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const BlockWithHeading = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <h1 className="blockHeading" align="center">{props.heading}</h1>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Trades typically go through within one to two minutes. The LDEX trading application displays progress indicators while orders are pending and when they have been matched.',
            image: `${baseUrl}img/icons/rocket.png`,
            imageAlign: 'top',
            title: 'Fast',
          },
          {
            content: 'LDEX implements a decentralized 2-way peg mechanism. Each DEX market is made up of between 10 to 100 validators who sign cross-chain trades.',
            image: `${baseUrl}img/icons/network.png`,
            imageAlign: 'top',
            title: 'Decentralized',
          },
          {
            content: 'The full trading history is visible on both affected blockchains. Trades can be traced across different blockchains and historical prices can be determined trustlessly.',
            image: `${baseUrl}img/icons/visibility.png`,
            imageAlign: 'top',
            title: 'Transparent',
          },
          {
            content: 'Transfers only go through if they have been signed by the majority of DEX validators. This protects funds from both attackers and rogue validators.',
            image: `${baseUrl}img/icons/security.png`,
            imageAlign: 'top',
            title: 'Secure',
          },
          {
            content: 'Trades are processed chain-to-chain without a centralized intermediary. The pseudo-anonymity provided by the underlying blockchains is maintained.',
            image: `${baseUrl}img/icons/anonymous.png`,
            imageAlign: 'top',
            title: 'Pseudo-anonymous',
          },
          {
            content: 'From the user\'s perspective, LDEX provides all of the key features of a regular exchange. Its decentralized order book accepts both standard limit orders and market orders.',
            image: `${baseUrl}img/icons/user-friendly.png`,
            imageAlign: 'top',
            title: 'User friendly',
          },
          {
            content: 'Cross-chain transfers are derived from the data on the underlying blockchains. This means that each market can only have one correct and immutable version of history.',
            image: `${baseUrl}img/icons/chain.png`,
            imageAlign: 'top',
            title: 'Deterministic',
          },
          {
            content: 'All the code behind LDEX is fully open source. The goal is to create an ecosystem of decentralized free markets which is open to all participants.',
            image: `${baseUrl}img/icons/open-source.png`,
            imageAlign: 'top',
            title: 'Open source',
          },
        ]}
      </Block>
    );

    const DesktopApps = () => (
        <BlockWithHeading layout="fourColumn" background={'light'} heading={'Desktop app downloads'}>
          {[
            {
              image: 'img/icons/windows-icon.png',
              imageAlign: 'top',
              title: 'Windows',
              imageLink: 'downloads/lisk-dex-electron-0.1.0-win.exe'
            },
            {
              image: 'img/icons/ubuntu-icon.png',
              imageAlign: 'top',
              title: 'Linux',
              imageLink: 'downloads/lisk-dex-electron-0.1.0-linux-x86_64.AppImage'
            },
          ]}
        </BlockWithHeading>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="splashSubsection">
        <div className="splashSubsectionContent">
          <div className="splashSubsectionCaption" style={{marginRight: '15px'}}>Supported by</div>
            <a className="splashSubsectionLink" href={`https://leasehold.io`} target="_blank">
              <div className="splashSubsectionItem">
              <img src="img/leasehold-logo-with-text-white.png" />
              </div>
            </a>
          </div>
        </div>
        <div className="mainContainer">
          <Features />
        </div>
          <div className="mainContainer desktopApps">
            <DesktopApps />
          </div>
      </div>
    );
  }
}

module.exports = Index;
