import loginPost from '../mocks/login.post.json';

const routes = [
  {
    method: 'post',
    url: '/api/login',
    handler: (req, res) => {
      res.status(200).json(loginPost); 
    }
  }
];

export default routes;
