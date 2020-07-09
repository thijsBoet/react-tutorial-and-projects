# React Tutorials and Projects

rfc => functional component
stateless functional component always returns JSX (no longer stateless with Hooks)

ES6, Nested Components and React Tools
```javascript
const Person = () => <h2>John Doe</h2>
const Message = () => <p>This is a message</p>
```

---
### JSX RULES

- Returns single element like a nested div / section / article
- Use camelCase for html attribute = onClick, class = className
- {Javascript statement} must always return a value
- Close every element e.g.
```javascript 
<Component/>
```
- Properties in quotes using JSX e.g.
```javascript
<h1 style={{ fontSize: "2rem", color: 'red' }}>Nikola Tesla</h1>
```
- Variables can only be created before the return statement
```javascript
function Person() {
  const name = 'Nikola Tesla'
  return (
    <Component/>
  );
}
```
- Use curly brackets to go in to { javascript } mode
```javascript
<h2>{`${person.firstName} ${person.lastName}`}</h2>
```

---
### PROPS
- Props pass values parent module to child module aka prop drilling. Props are arguments to components.
```javascript
// Parent module
<Person name={"Bob Ross"} age={25} sex={male}} />
// Child module
import parent from '.component/parentmodule'
this.props.person.name
```
- Functions can be passed in the same methods
- Use arrow functions to pass arguments through methods without instantly running the method
```javascript
<button type="button" onClick={() => handleDelete(id)}>Delete</button>
```
- Use destructuring to create shorter variables
```javascript
const { name, age, sex } = this.props.person
```
- The content between the opening and the closing Tag are named children and are passed under this name to child component
```javascript
<Person person={friends[0]}>
  {/* props.children */}
  <p>props.children</p>
</Person>
```
- In creating a list use map to iterate over multiple prop items. 
```javascript
{this.state.books.map((item) => (
  <Book key={item.id} info={item}></Book>
))}
```
- Must always pass a fixed key value when iterating as reference. Never use index if reference may be ever be needed.

---
### STATE
- Props are read only. To create variables, they must be declared in the state object.
```javascript
state = {
  address: 'Mainstreet 15',
  age: 56,
}
```
- State can only be set in the head of a react class component (rcc)
```javascript
  export default class componentName extends Component {
    state = {}
  }
}
```
- State values cannot be accessed directly (this.state.age = 12). The setState method must be used
```javascript
this.setState({
  address: 'Sunset Drive 115',
  age: 57,
});
```