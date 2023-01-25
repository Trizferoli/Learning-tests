import app from "./app"
import routes from "./routes";

app.use(routes);
app.listen(6000, () => { console.log('rodando') })
