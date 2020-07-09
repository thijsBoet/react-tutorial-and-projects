# React Tutorials and Projects

rfc => functional component
stateless functional component always returns JSX (no longer stateless with Hooks)

ES6, Nested Components and React Tools
```javascript
const Person = () => <h2>John Doe</h2>
const Message = () => <p>This is a message</p>
```

### JSX RULES

- **Returns single element like a nested div / section / article**
- **Use camelCase for html attribute = onClick, class = className**
- **Close every element e.g.**
```javascript 
<Component/>
```
- **Properties in quotes using JSX e.g.**
```javascript
<h1 style={{ fontSize: "2rem", color: 'red' }}>Nikola Tesla</h1>
```
- **Variables can only be created before the return statement**
```javascript
function Person() {
  const name = 'Nikola Tesla'
  return (
    <Component/>
  );
}
```
- **Use curly brackets to go in to { javascript } mode**
```javascript
<h2>{`${person.firstName} ${personlastName}`}</h2>
```