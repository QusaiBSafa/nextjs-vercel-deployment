import { Request, Response } from 'express';

export const helloHandler = (req: Request, res: Response) => {
  res.json({ message: 'Hello, World!' });
};

export const goodbyeHandler = (req: Request, res: Response) => {
  res.json({ message: 'Goodbye, World!' });
};