// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const authorization = req.headers.authorization
  if (req.method === 'POST' && authorization===process.env.SCREENLESS_SECRET) {
    // Process a POST request
    res.status(200).json({ message: 'Stored', body:req.body  })
  } else {
    res.status(200).json({ message: 'Please make a post request'  })
 
  }

  
}
