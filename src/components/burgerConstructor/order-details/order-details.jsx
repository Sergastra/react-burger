import css from './order-details.module.css';
import imgDone from '../../../images/done.png';
import { useSelector } from 'react-redux';


export const OrderDetails = () => {
	const { orderNumber, loading, error } = useSelector(state => state.order);

	return (

		<div className={css.order_details}>
			{loading ? (
				<p className="text text_type_main-medium p-3 pt-5" > Заказ в обработке. Еще чуть-чуть </p>
			) : error ? (<p className="text text_type_main-medium p-3 pt-5" >При оформлении заказа произошла ошибка, попробуйте заказать ещё раз</p>) : (
				<>
					<p className="text text_type_digits-large"> {orderNumber} </p>

					<p className="text text_type_main-medium p-3 pt-5" >идентификатор заказа</p>

					<img src={imgDone} alt={"done"} className={css.image} />

					<p className="text text_type_main-small mb-5">Ваш заказ начали готовить</p>

					<p className="text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
				</>
			)}

		</div>
	);
}
export default OrderDetails;
