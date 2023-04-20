import'./order-details.css';
import imgDone from '../../../images/done.png'

export const OrderDetails = () => {

	return (
		<div className='order_details'>
			<p className="text text_type_digits-large"> 034567 </p>

			<p className="text text_type_main-medium" style={{ padding: '15px', paddingBottom: '40px' }}>идентификатор заказа</p>

			<img src={imgDone} alt={"done"} />

			<p className="text text_type_main-medium" style={{ fontSize: '16px', padding: '14px', paddingTop: '38px' }}>Ваш заказ начали готовить</p>

			<p className="text text_type_main-medium" style={{ fontSize: '16px', color: '#8585AD' }}>Дождитесь готовности на орбитальной станции</p>

		</div>
	);
}
export default OrderDetails;