import express from 'express';
import diagnoseService from '../services/diagnoseService';

const diagnoseORouter = express.Router();

diagnoseORouter.get('/', (_req, res) => {
  res.send(diagnoseService.getAll());
});

export default diagnoseORouter;
