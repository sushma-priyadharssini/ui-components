/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * The Weaveworks 'Weavecloud' logo. The logo can be rendered using a 'dark' or 'light' argument
 * to the `theme` prop.
 * The logo has a transparent background (example below has a black background for contrast).
 * ```javascript
 * import React from 'react';
 * import { WeaveCloudLogo } from 'weaveworks-ui-components'
 *
 * export default function WeaveCloudLogoExample() {
 *   return (
 *     <div>
 *       <WeaveCloudLogo theme="dark" />
 *       <WeaveCloudLogo theme="light" />
 *     </div>
 *   );
 * }
 * ```
 *
 */
function WeaveCloudLogo({ theme, tiny }) {
  let textFill = '#001755';
  let logoAccentFill = textFill;

  if (theme === 'light') {
    textFill = '#FFFFFF';
    logoAccentFill = '#566A90';
  }

  if (tiny) {
    // Renders an icon-sized WW logo
    return (
      <svg viewBox="0 0 20 20">
          <g fill={textFill}>
              <path d="M5.802 11.239l10.192-9.104a9.973 9.973 0 0 0-2.7-1.515L5.802 7.312v3.927zM2.874 9.928L.113 12.394A9.934 9.934 0 0 0 1.31 15.25l1.563-1.395V9.928zM11.254 2.442V.104a10.04 10.04 0 0 0-2.929.008v4.946l2.929-2.616z"/>
              <path d="M11.254 16.2V6.37L8.325 8.984v10.903a10.07 10.07 0 0 0 3.243-.043l7.843-7.005a9.996 9.996 0 0 0 .315-4.21l-8.472 7.57z"/>
              <path d="M11.254 13.313l7.856-7.018a9.99 9.99 0 0 0-1.51-2.578l-6.346 5.67v3.926zM8.325 12.002l-2.523 2.254V.844a10.015 10.015 0 0 0-2.928 1.968v14.376c.66.638 1.406 1.187 2.222 1.626l3.229-2.885v-3.927z"/>
          </g>
      </svg>
    );
  }

  return (
    <svg width="100%" height="100%" viewBox="0 0 943 177">
      <path fill={logoAccentFill} d="M60.937,98.165l75.419-67.366c-5.989-4.707-12.71-8.52-19.981-11.211l-55.438,49.52V98.165z"></path>
      <path fill={logoAccentFill} d="M39.265,88.465l-20.431,18.25c1.86,7.57,4.88,14.683,8.87,21.135l11.561-10.326V88.465z"></path>
      <path fill="#00B4ED" d="M101.276,33.074V15.768C97.815,15.27,94.282,15,90.685,15c-3.766,0-7.465,0.286-11.079,0.828v36.604 L101.276,33.074z"></path>
      <path fill="#00B4ED" d="M101.276,134.874V62.133L79.605,81.49v80.682c3.614,0.543,7.313,0.828,11.079,0.828 c4.41,0,8.723-0.407,12.921-1.147l58.033-51.838c1.971-6.664,3.046-13.712,3.046-21.015c0-3.439-0.254-6.817-0.708-10.132 L101.276,134.874z"></path>
      <path fill="#EB6101" d="M101.276,113.518l58.14-51.933c-2.77-6.938-6.551-13.358-11.175-19.076L101.276,84.46V113.518z"></path>
      <path fill="#EB6101" d="M79.605,103.817l-18.668,16.676V21.242c-8.086,3.555-15.409,8.513-21.672,14.567V142.19 c4.885,4.724,10.409,8.787,16.444,12.03l23.896-21.345V103.817z"></path>
      <polygon fill={textFill} points="271.563,104.099 285.389,52.22 303.955,52.22 283.414,124.377 261.556,124.377 249.311,75.79 237.065,124.377 215.207,124.377 194.666,52.22 213.232,52.22 227.058,104.099 240.752,52.22 257.869,52.22 "></polygon>
      <path fill={textFill} d="M372.429,100.676c-2.106,14.352-13.167,24.623-32.128,24.623c-20.146,0-35.025-12.114-35.025-36.605 c0-24.622,15.406-37.395,35.025-37.395c21.726,0,33.182,15.933,33.182,37.263v3.819h-49.772c0,8.031,3.291,18.17,16.327,18.17 c7.242,0,12.904-3.555,14.353-10.27L372.429,100.676z M354.654,79.608c-0.659-10.008-7.11-13.694-14.484-13.694 c-8.427,0-14.879,5.135-15.801,13.694H354.654z"></path>
      <path fill={textFill} d="M426.628,77.634v-2.502c0-5.662-2.37-9.351-13.036-9.351c-13.298,0-13.694,7.375-13.694,9.877h-17.117 c0-10.666,4.477-24.359,31.338-24.359c25.676,0,30.285,12.771,30.285,23.174v39.766c0,2.897,0.131,5.267,0.395,7.11l0.527,3.028 h-18.172v-7.241c-5.134,5.134-12.245,8.163-22.384,8.163c-14.221,0-25.018-8.296-25.018-22.648c0-16.59,15.67-20.146,21.99-21.199 L426.628,77.634z M426.628,91.195l-6.979,1.054c-3.819,0.658-8.427,1.315-11.192,1.843c-3.029,0.527-5.662,1.186-7.637,2.765 c-1.844,1.449-2.765,3.425-2.765,5.926c0,2.107,0.79,8.69,10.666,8.69c5.793,0,10.928-2.105,13.693-4.872 c3.556-3.555,4.214-8.032,4.214-11.587V91.195z"></path>
      <polygon fill={textFill} points="495.495,124.377 471.399,124.377 447.698,52.221 467.186,52.221 483.775,107.392 500.499,52.221 519.459,52.221 "></polygon>
      <path fill={textFill} d="M587.273,100.676c-2.106,14.352-13.167,24.623-32.128,24.623c-20.146,0-35.025-12.114-35.025-36.605 c0-24.622,15.406-37.395,35.025-37.395c21.726,0,33.182,15.933,33.182,37.263v3.819h-49.772c0,8.031,3.291,18.17,16.327,18.17 c7.242,0,12.904-3.555,14.354-10.27L587.273,100.676z M569.498,79.608c-0.659-10.008-7.109-13.694-14.483-13.694 c-8.428,0-14.88,5.135-15.802,13.694H569.498z"></path>
      <path fill={textFill} d="M631.616,114.994c10.428,0,17.952-5.939,19.008-16.632h10.957c-1.98,17.028-13.597,25.74-29.965,25.74 c-18.745,0-32.077-12.012-32.077-35.905c0-23.76,13.464-36.433,32.209-36.433c16.104,0,27.721,8.712,29.568,25.213H650.36 c-1.452-11.353-9.24-16.104-18.877-16.104c-12.012,0-20.856,8.448-20.856,27.324C610.627,107.471,619.867,114.994,631.616,114.994z "></path>
      <path fill={textFill} d="M676.759,123.179V25.496h10.824v97.683H676.759z"></path>
      <path fill={textFill} d="M735.102,124.103c-19.141,0-32.341-12.145-32.341-36.169c0-23.893,13.2-36.169,32.341-36.169 c19.009,0,32.209,12.145,32.209,36.169C767.311,112.091,754.11,124.103,735.102,124.103z M735.102,114.994 c12.145,0,21.12-7.392,21.12-27.061c0-19.536-8.976-27.061-21.12-27.061c-12.276,0-21.253,7.393-21.253,27.061 C713.849,107.603,722.825,114.994,735.102,114.994z"></path>
      <path fill={textFill} d="M792.917,52.688v45.146c0,12.276,6.204,17.16,15.708,17.16c11.881,0,20.593-7.523,20.593-22.309V52.688 h10.824v70.49H829.35v-10.032c-4.092,6.204-11.484,10.956-23.497,10.956c-15.444,0-23.76-10.032-23.76-23.364v-48.05H792.917z"></path>
      <path fill={textFill} d="M908.944,123.179v-10.296c-3.828,6.996-12.276,11.22-22.705,11.22c-19.009,0-31.021-13.597-31.021-36.169 c0-23.496,12.804-36.169,31.021-36.169c10.429,0,18.745,4.884,22.705,11.616V25.496h10.824v97.683H908.944z M887.296,60.873 c-12.145,0-20.989,7.524-20.989,27.061c0,19.669,8.713,27.061,20.856,27.061c12.276,0,21.913-7.392,21.913-27.061 C909.076,68.266,899.571,60.873,887.296,60.873z"></path>
    </svg>
  );
}

WeaveCloudLogo.propTypes = {
  /**
   * The color that the logo will be rendered in.
   */
  theme: PropTypes.string,
  /**
   * Render a small, icon-sized logo
   */
  tiny: PropTypes.bool
};

WeaveCloudLogo.defaultProps = {
  theme: 'dark'
};

export default WeaveCloudLogo;
