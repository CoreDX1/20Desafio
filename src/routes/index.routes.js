import {Router} from 'express'

const router = Router()

router.get('/about', (_req, res) => {
  res.send('About')
})

export default router;
