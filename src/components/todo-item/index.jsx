import './todo-item.css';
import { Checkbox, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = (props) => {

    return (
        <li className='todo-item-container'>
            <Checkbox checked={props.isCompleted} onChange={e => props.onToggle(e.target.checked)} />
            <p style={{ textDecoration: props.isCompleted ? 'line-through' : undefined }}>{props.text}</p>
            <Button
                className='delete-button'
                color="error"
                startIcon={<DeleteIcon />}
                onClick={e => props.onDelete(props.id)}
            />
        </li>
    )
}

export default TodoItem