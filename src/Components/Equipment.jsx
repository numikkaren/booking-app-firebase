
import PropTypes from 'prop-types';

function Equipment(props){

    return(
       <div className="card">
            <img className="card-image" src={props.image} alt={`${props.name} image`} />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-description">{props.description}</p>
            <p>Availability: {props.availability ? "Yes":"No"}</p>
            <button className="button-submit" type="submit">See details</button>
       </div>
    );
}
Equipment.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    availability:PropTypes.bool,
}

export default Equipment