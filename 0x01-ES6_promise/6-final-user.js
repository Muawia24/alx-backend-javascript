import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => (
      values.map((x) => ({
        status: x.status,
        value: x.status === 'fulfilled' ? x.value : String(x.reason),
      }))
    ));
}
