import React, { Component } from 'react';
import cookie from 'react-cookies'
import {BASE_API_URL} from "../context";
import axios from 'axios';


export default class DataProvider {
  constructor(dispatch) {
    this._dispatch = dispatch;
    this.client = axios.create({
      baseURL: BASE_API_URL,
      timeout: 1000,
      headers: this.baseHeaders(),
      validateStatus: (status) => status < 500
    });
  }

  baseHeaders() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRFToken': cookie.load('csrftoken'),
    };
  };

  reduceResponse(response) {
    return {
      data: response.data,
      status: response.status
    }
  }

  get(url) {
    return this.client.get(url).then(
      response => {
        if (response.status >= 200 && response.status < 300) {
          return this.reduceResponse(response)
        } else {
          console.log('get.reject', response);
          return Promise.reject(this.reduceResponse(response))
        }
      })
      .catch((response) => {
        console.log('get.catch', response);
        return Promise.reject({status: response.status})
      }
    )
  }


  dispatch(action, payload) {
    const _action = Object.assign({
      type: action,
      payload
    });

    this._dispatch(_action);
  }
}
