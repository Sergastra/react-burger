import css from './order-details.module.css';
import PropTypes from 'prop-types';
import imgDone from '../../../images/done.png'

export const OrderDetails = ({title}) => {

	return (
		<div className= {css.order_details}>
			<p className="text text_type_digits-large"> {title} </p>

			<p className= "text text_type_main-medium p-3 pt-5" >идентификатор заказа</p>

			<img src={imgDone} alt={"done"} />

			<p className="text text_type_main-medium mb-2">Ваш заказ начали готовить</p>

			<p className="text text_type_main-small text_color_inactive mb-8">Дождитесь готовности на орбитальной станции</p>

		</div>
	);
}
export default OrderDetails;

OrderDetails.propTypes = {
	title: PropTypes.string.isRequired,
}