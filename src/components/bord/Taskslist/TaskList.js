
import Item from '../Item/Item';
import './TaskList.css' ;

const TaskList = (props)=>{


    return (
        <ul className='task-list'>
            {props.items.map(obj => <Item  text={obj.text} key={obj.id} id={obj.id} ondeletItem={props.ondeletItem}></Item>)}
        </ul>
    )

}

export default TaskList