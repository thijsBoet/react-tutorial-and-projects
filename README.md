# React Tutorials and Projects

rfc => functional component
stateless functional component always returns JSX (no longer stateless with Hooks)

ES6, Nested Components and React Tools
```javascript
const Person = () => <h2>John Doe</h2>
const Message = () => <p>This is a message</p>
```

### JSX RULES

- returns single element like a nested div / section / article
- use camelCase for html attribute => onClick => className e.g. className= instead of class=
- close every element e.g. 
```javascript 
<Component/>
```
- properties in quotes using JSX e.g.```javascript<h1 style={{ fontSize: "2rem", color: 'red' }}>Nikola Tesla</h1>```
- variables can only be created before the return statement
```javascript
function Person() {
  const name = 'Nikola Tesla'
  return (
    <Component/>
  );
}
```
- use curly brackets to go in to { javascript } mode
```javascript
<h2>{`${person.firstName} ${person.lastName}`}</h2>
```