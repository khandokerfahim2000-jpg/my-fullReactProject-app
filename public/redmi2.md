### 1. What is JSX, and why is it used in React?

**Answer:**  
JSX allows us to write HTML-like code inside JavaScript. It makes creating React UI components fast and easy to read.

---

### 2. What is the difference between props and state?

**Answer:**

- **Props:** Read-only data passed from parent to child component.
- **State:** Dynamic data managed inside a component that changes over time.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:**  
`useState` manages dynamic data in a component. I used it to store fetched tech data and manage the "Your Stack" list.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:**  
`useEffect` handles side effects. I used it to fetch the technology JSON data once when the component first loads.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:**  
It helps React track which items changed, added, or removed, making list rendering faster and avoiding UI bugs.

---

### 6. What is conditional rendering? Show one place you used it.

**Answer:**  
Conditional rendering means showing or hiding UI elements based on a condition. In this project, I used it to show an empty state message when no items are in the stack, and display the selected list when items are added.

---

### 7. How do you pass data from parent to child, and child to parent?

**Answer:**

- **Parent to Child:** Passed via **Props**.
- **Child to Parent:** The child calls a **callback function** passed down by the parent as a prop.
