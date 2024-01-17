import PropTypes  from 'prop-types';

const Card = (props) => {
    
    return (
        <div className="card">
            <img className='card-img' src="https://img.freepik.com/premium-photo/astronomer-digital-avatar-generative-ai_934475-9043.jpg?w=1060" alt="profile pic" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text1">{props.age} years old</p>
            <p className='card-text2'>
                我是一个 <span className={`card-text2-caibi-niubi ${props.isNewbie ? 'caibi' : 'niubi'}`}>{props.isNewbie ? '菜逼':'高手'}</span> 程序员!
            </p>

        </div>

    )
}

// 规定数据类型
Card.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isNewbie: PropTypes.bool,
}

// 默认信息
Card.defaultProps = {
    name: 'Guest',
    age: 18,
    isNewbie: true,
}



export default Card;