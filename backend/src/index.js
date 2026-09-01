import {Hono} from 'hono'

const app=new Hono()

app.get('/',c=>c.json({app:'PPFMS API'}))

app.post('/api/login',async c=>{
 const body=await c.req.json()
 const user=await c.env.DB.prepare(
 'SELECT id,username,name,role FROM users WHERE username=? AND password=?'
 ).bind(body.username,body.password).first()

 if(!user) return c.json({error:'Login gagal'},401)

 return c.json({user})
})

app.get('/api/expenses',async c=>{
 const data=await c.env.DB.prepare(
 'SELECT * FROM expenses ORDER BY id DESC'
 ).all()
 return c.json(data.results)
})

app.post('/api/expenses',async c=>{
 const e=await c.req.json()
 await c.env.DB.prepare(
 'INSERT INTO expenses(project_id,created_by,date,description,amount) VALUES(?,?,?,?,?)'
 ).bind(e.project_id,e.created_by,e.date,e.description,e.amount).run()

 return c.json({success:true})
})

export default app
