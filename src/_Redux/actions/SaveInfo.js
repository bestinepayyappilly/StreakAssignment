import {SAVE_INFO} from '../constants';

export function SaveInfo(firstName, secondName, email, number) {
  return {
    type: SAVE_INFO,
    payload: {
      firstName: firstName,
      secondName: secondName,
      email: email,
      number: number,
    },
  };
}
