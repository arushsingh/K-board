/* eslint-disable no-console*/
import io from 'socket.io-client';
import * as config from '../../consts/app-config';
import * as toastrActions from '../toastr-actions';
import { store } from '../../index';
export const startChannel = (token) => {
  console.log('token from start channel', token);
  const channel = `${config.SERVER_URL}/application/author`;
  console.log('channel', channel);
  const authorNsp = io.connect(channel, { query: { token } });
  authorNsp.on('app_connected', (data) => {
    console.log('data', data.msg);
    store.dispatch(toastrActions.pop_toast({ msg: data.msg, status: true }));
  })
  return authorNsp;
}