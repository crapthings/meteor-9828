const Nav = () => <div>
  <div><Link to='/'>page1</Link></div>
  <div><Link to='/page2'>page2</Link></div>
</div>

const page1trakcer = (props, onData) => {
  const ready = Meteor.subscribe('page1').ready()
  if (!ready) return
  const test = Test.find().fetch()
  onData(null, { test })
}

const page1comp = ({ test }) => <div>
  <h1>page1</h1>
  {test.map(t => <div key={t._id}>{t.text}</div>)}
</div>

const Page1 = composeWithTracker(page1trakcer)(page1comp)

const page2trakcer = (props, onData) => {
  const ready = Meteor.subscribe('page2').ready()
  if (!ready) return
  const test = Test.find().fetch()
  onData(null, { test })
}

const page2comp = ({ test }) => <div>
  <h1>page2</h1>
  {test.map(t => <div key={t._id}>{t.text}</div>)}
</div>

const Page2 = composeWithTracker(page2trakcer)(page2comp)

const App = () => <Router>
  <div>
    <Nav />
    <Route exact path='/' component={Page1} />
    <Route path='/page2' component={Page2} />
  </div>
</Router>

Meteor.startup(function () {
  const div = document.createElement('div')
  document.body.appendChild(div)
  render(<App />, div)
})
