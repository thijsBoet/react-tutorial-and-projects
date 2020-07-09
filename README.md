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
<h2>{`${person.firstName} ${personlastName}`}</h2>
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
- Use destructuring to create shorter variables
```javascript
const { name, age, sex} = this.props.person
```
- The content between the opening and the closing Tag are name children
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
### state
