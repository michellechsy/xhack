'use strict';
import request from 'superagent';

const external = {
  headers: {}
};

const internal = {
  headers: {
    credentials: 'same-origin'
  }
};

/**
 * Fire the actual http request & return a Promise object.
 *
 * @param {string} method standard http method.
 * @param {string} url endpoint url to request.
 * @param {object} settings configurations used by superagent.
 * @return {Promise} Promise object for futher processing.
 * @api private
 */
const execute = (method, url, settings) => {
  let options = settings || (url.startsWith(url) ? external : internal);
  options.url = url;
  return new Promise((resolve, reject) => {
    request[method.toLowerCase()](options.url)
      .set(options.headers)
      .send(options.payload)
      .end((err, res) => {
        if (err) {
          return reject(err);
        } else if (res.status >= 400) {
          return reject(new Error(res.text));
        }
        return resolve(res);
      });
  });
};

/**
 * Fire an http GET request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const get = (url, options) => {
  return execute('get', url, options);
};


/**
 * Fire an http POST request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const post = (url, options) => {
  return execute('post', url, options);
};


/**
 * Fire an http PUT request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const put = (url, options) => {
  return execute('put', url, options);
};

/**
 * Fire an http DELETE request to the URL endpoint with options.
 *
 * @param {string} url endpoint url to request.
 * @param {object} options settings for superagent.
 * @return {Promise} Promise object for futher processing.
 * @api public
 */
const remove = (url, options) => {
  return execute('delete', url, options);
};

export {
  get, post, put, remove
};
