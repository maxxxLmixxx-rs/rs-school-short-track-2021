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

const getDNSStats = (domains) => {
  const getPartialDomains = (domainArray) => domainArray.reverse()
    .map((__, ix) => `.${domainArray.slice(0, ix + 1).join('.')}`);

  return domains.map((domain) => getPartialDomains(domain.split('.')))
    .flat().reduce((acc, domain) => {
      const counter = acc;
      counter[domain] = domain in counter ? counter[domain] + 1 : 1;
      return counter;
    }, {});
};

module.exports = getDNSStats;
