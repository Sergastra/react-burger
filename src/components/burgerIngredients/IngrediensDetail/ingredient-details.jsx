import PropTypes from 'prop-types';


import'./ingredient-details.css'


const IngredientDetails = ({ ingredients }) => {
	
	return (

		<div className="portal"  >

			<img src={ingredients.image_large} alt={ingredients.name} style={{ width: '480px' }} />

			<span className="text text_type_main-medium">{ingredients.name}</span>
			<div className="product_energy">
				<span className="text text_type_main-small text_color_inactive">Калории, ккал<br />{ingredients.calories}</span>
				<span className="text text_type_main-small text_color_inactive">Белки, г<br />{ingredients.proteins}</span>
				<span className="text text_type_main-small text_color_inactive">Жиры, г<br />{ingredients.fat}</span>
				<span className="text text_type_main-small text_color_inactive">Углеводы, г<br />{ingredients.carbohydrates}</span>
			</div>
		</div>
	);
}

export default IngredientDetails;

IngredientDetails.propTypes = {
	image_large: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	proteins: PropTypes.number.isRequired,
	fat: PropTypes.number.isRequired,
	carbohydrates: PropTypes.number.isRequired,
	calories: PropTypes.number.isRequired,
};