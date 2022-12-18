

import './Item.css';


const Item = (props)=>{

    const deletHandler = (event)=>{
        props.ondeletItem(event.target.id);
    }

    return (
        <li className='item'>
            <div>{props.text}</div>
            <div className='icons'>
                <span id={props.id} onClick={deletHandler}>delet</span>
                <span><input type='checkbox'></input></span>
            </div>
        </li>
    )
}

export default Item