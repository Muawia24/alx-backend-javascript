import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(photoResponse.body);
      console.log(userResponse.firstName);
      console.log(userResponse.lastName);
    })
    .catch(() => new Error('Signup system offline'));
}
