import express from 'express';
import bodyParser from "body-parser";
import { parseBmiArguments, calculateBmi } from './bmiCalculator';
import {
  parseExerciseArguments,
  exerciseCalculator
} from './exerciseCalculator';

const app = express();
app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const Oweight = req.query.Oweight;
  const Oheight = req.query.Oheight;

  if (!Oweight || !Oheight) {
    res.status(400);
    res.send({ error: 'missing parameter Oheight or Oweight' });
  } else {
    try {
      const { OheightInCm, OweightInKg } = parseBmiArguments(
        Number(Oheight),
        Number(Oweight)
      );
      const bmi = calculateBmi(OheightInCm, OweightInKg);
      res.send({
        Oweight: OweightInKg,
        Oheight: OheightInCm,
        bmi: bmi
      });
    } catch (e) {
      res.status(400);
      res.send({ error: e.message });
    }
  }
});

app.post('/exercises', (req, res) => {
  const dailyExercises = req.body.daily_exercises;
  const dailyTarget = req.body.target;

  if (!dailyExercises || !dailyTarget) {
    res.status(400);
    res.send({ error: 'missing parameter daily_exercises or target' });
  } else {
    try {
      const { target, dailyExerciseHours } = parseExerciseArguments(
        dailyTarget,
        dailyExercises
      );
      res.send(exerciseCalculator(target, dailyExerciseHours));
    } catch (e) {
      res.status(400);
      res.send({ error: e.message });
    }
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
