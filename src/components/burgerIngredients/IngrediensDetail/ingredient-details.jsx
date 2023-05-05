import PropTypes from 'prop-types';
// import { ingredientType } from '../../../prop-types';


import css from './ingredient-details.module.css'


const IngredientDetails = ({ingredient}) => {
	const{ image_large } = ingredient;
	return (

		<div className={css.portal} >

			<img src={image_large} alt={ingredient.name} className={css.image} />

			<span className="text text_type_main-medium">{ingredient.name}</span>
			<div className={css.product_energy}>
				<span className="text text_type_main-small text_color_inactive">Калории, ккал<br />{ingredient.calories}</span>
				<span className="text text_type_main-small text_color_inactive">Белки, г<br />{ingredient.proteins}</span>
				<span className="text text_type_main-small text_color_inactive">Жиры, г<br />{ingredient.fat}</span>
				<span className="text text_type_main-small text_color_inactive mb-8">Углеводы, г<br />{ingredient.carbohydrates}</span>
			</div>
		</div>
	);
}

export default IngredientDetails;

IngredientDetails.propTypes = {
	// ingredient: PropTypes.arrayOf(ingredientType),
	name: PropTypes.string,
	proteins: PropTypes.number,
	fat: PropTypes.number,
	carbohydrates: PropTypes.number,
	calories: PropTypes.number,
	image_large: PropTypes.string,
};