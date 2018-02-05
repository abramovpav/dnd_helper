import React, { Component } from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import { BASE_API_URL } from '../context';


export default class DataProvider {
  constructor(dispatch) {
    this.dispatch = dispatch;
    this.client = axios.create({
      baseURL: BASE_API_URL,
      timeout: 1000,
      headers: DataProvider.baseHeaders(),
      validateStatus: status => status < 500,
    });
  }

  static baseHeaders() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-CSRFToken': cookie.load('csrftoken'),
    };
  }

  static reduceResponse(response) {
    return {
      data: response.data,
      status: response.status,
    };
  }

  get(url) {
    return this.client.get(url).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return DataProvider.reduceResponse(response);
      }
      return Promise.reject(DataProvider.reduceResponse(response));
    })
      .catch(response => Promise.reject({ status: response.status }));
  }

  put(url, data) {
    return this.client.put(url, data).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return DataProvider.reduceResponse(response);
      }
      return Promise.reject(DataProvider.reduceResponse(response));
    })
      .catch(response => Promise.reject({ status: response.status }));
  }


  dispatch(action, payload) {
    const newAction = Object.assign({
      type: action,
      payload,
    });

    this.dispatch(newAction);
  }
}
