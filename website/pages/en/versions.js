/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

// const versions = require(`${CWD}/versions.json`); // TODO Uncomment to support multiple versions.
const versions = []; // TODO Uncomment to support multiple versions.

function Versions(props) {
  const {config: siteConfig} = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          <h3 id="latest">Current version (Stable)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${ props.language ? props.language + '/' : '' }faqs`}> Documentation </a>
                </td>
                <td>
                  <a href="">Release Notes</a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="rc">Pre-release versions</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${ props.language ? props.language + '/' : '' }next/faqs`}> Documentation </a>
                </td>
                <td>
                  <a href="https://github.com/capitalisk/capitalisk-dex">Source Code</a>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 id="archive">Past Versions</h3>
          <p>Here you can find previous versions of the documentation.</p>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr key={version}>
                      <th>{version}</th>
                      <td>
                        <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${ props.language ? props.language + '/' : '' }${version}/faqs`}> Documentation </a>
                      </td>
                      <td>
                        <a href={`${repoUrl}/releases/tag/v${version}`}>
                          Release Notes
                        </a>
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
