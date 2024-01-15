import { rest } from 'msw';

const baseURL = 'https://ci-drf-api-heroku-7a39d4afbfbb.herokuapp.com/';

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 3,
        "username": "Destan",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 3,
        "profile_image": "https://res.cloudinary.com/dxgzepuov/image/upload/v1/media/../default_profile_lcovgw"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  })
];