import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    if(data.name.length < 3){
      return res.status(401).json({ message: 'enter a vaild name' });
    }

    if(data.dob.trim() == '' ){
      return res.status(401).json({ message: 'dod must not be empty!' });
    }

    if(data.Number.trim().length!==10){
      return res.status(401).json({ message: 'enter a valid number' });
    }

    const client = await MongoClient.connect(
      'mongodb+srv://arunmani:9787480892@cluster0.o9yhm.mongodb.net/logritha?retryWrites=true&w=majority'
    );
    const db = client.db();

    const loritha = db.collection('logrithadata');

    const result = await loritha.insertOne(data);

    
    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
