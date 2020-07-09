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
- close every element e.g. <Component/>
- properties in quotes using JSX
```javascript
<h1 style={{ fontSize: "2rem", color: 'red' }}>Nikola Tesla</h1>
```