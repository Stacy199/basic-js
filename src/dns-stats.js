const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainStats = {};
  domains.forEach((domain) => {
    const parts = domain.split('.').reverse();
    let segment = '';

    parts.forEach((part) => {
      segment += `.${part}`;
      if (!domainStats[segment]) domainStats[segment] = 1;
      else domainStats[segment] += 1;
    })

  })
  return domainStats;
}

module.exports = {
  getDNSStats
};
