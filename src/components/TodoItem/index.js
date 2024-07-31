// Write your code here
import './index.css'

const TodoList = props => {
  const {eachList, onDelete} = props
  const {title, id} = eachList

 const onDeleteTodo = () => {
    onDelete(id); // Pass the id to onDelete function
  };

  return (
    <li className="list-style">
      <p>{title}</p>
      <button type="button" className="delete" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoList
